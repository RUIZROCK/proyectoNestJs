import { ConfigService } from '@nestjs/config'; //para acceder a variables de configuracin

export const jwtConstants = (configService: ConfigService) => {
  secret: configService.get<string>('jwt');
};
