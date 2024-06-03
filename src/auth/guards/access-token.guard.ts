import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { ConfigService } from '@nestjs/config';
/*
Este guardia de autenticación verifica si la petición 
tiene un token JWT válido en el encabezado Authorization. 

Si es válido, la petición se permite, y el usuario autenticado 
se asigna a request.user. 

Si no es válido o no existe, se lanza una excepción UnauthorizedException.
*/
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    //convierte el contexto a una petición HTTP.
    const request = context.switchToHttp().getRequest();

    // obtiene el token del encabezado de la petición.
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      //si no hay token se envia una realiza una exception
      throw new UnauthorizedException();
    }

    try {
      //se realiza una clave secreta
      const secret = this.configService.get<string>('jwt.secret');

      //el payload del token se asigna en el user
      const payload = await this.jwtService.verifyAsync(token, { secret });
      request.user = payload;
    } catch {
      throw new UnauthorizedException();
    }

    return true;
  }

  //funcion que devuelve un token
  private extractTokenFromHeader(request: Request): string | undefined {
    //separa el tipo y el token del encabezado
    const [type, token] = request.headers.authorization?.split(' ') ?? [];

    //devuelve el token en caso de existir el tipo
    return type === 'Bearer' ? token : undefined;
  }
}
