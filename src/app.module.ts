import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import dataConfig from 'config/dataConfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PacienteModule } from './paciente/paciente.module';
import { MedicoModule } from './medico/medico.module';
import { ObraSocialModule } from './obra-social/obra-social.module';
import { EspecialidadModule } from './especialidad/especialidad.module';
import { ConsultaModule } from './consulta/consulta.module';
import { PracticaModule } from './practica/practica.module';
import { EntradaModule } from './entrada/entrada.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { EnfermedadModule } from './enfermedad/enfermedad.module';
import { TipoPracticaModule } from './tipo-practica/tipo-practica.module';
import { FileModule } from './file/file.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
      load: [dataConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        port: configService.get('database.port'),
        host: configService.get('database.host'),
        username: configService.get('database.user'),
        password: configService.get('database.password'),
        database: configService.get('database.database'),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    PacienteModule,
    MedicoModule,
    ObraSocialModule,
    EspecialidadModule,
    ConsultaModule,
    PracticaModule,
    EntradaModule,
    UserModule,
    AuthModule,
    EnfermedadModule,
    TipoPracticaModule,
    FileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
