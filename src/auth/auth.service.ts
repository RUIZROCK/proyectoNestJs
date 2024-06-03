import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { RegisterAuthDto, LoginAuthDto } from './dto/auth.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jtwService: JwtService,
  ) {}

  async register({ username, mail, password, rol }: RegisterAuthDto) {
    const user = await this.userService.findForMail(mail);

    if (user) {
      throw new BadRequestException('user already exist');
    }

    await this.userService.create({
      username,
      mail,
      password: await bcryptjs.hash(password, 10),
      rol,
    });
  }

  async login({ mail, password }: LoginAuthDto) {
    const user = await this.userService.findForMail(mail);
    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!user) {
      throw new UnauthorizedException('mail is wrong');
    }
    if (!isPasswordValid) {
      throw new UnauthorizedException('password is wrong');
    }
    const payload = { mail: user.mail, rol: user.rol };
    const token = await this.jtwService.signAsync(payload);

    return { token, payload };
  }
}
