import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
// import configuration from './configs/configuration';

import { AuthModule } from '../../modules/auth/auth.module';
import { UsersModule } from '../users/users.module';
import { DataBaseConfig } from './configs/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
// console.log('FOI', configuration().database);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.development.local', '.env.development'],
      //   // load: [configuration],
    }),
    // DataBaseConfig,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
