import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/modules/users/entities/user.entity';

export const DataBaseConfig = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.DATABASE_USER,
  password: 'example-sso-node-nestjs-psw',
  database: 'example-sso-node-nestjs-db',
  entities: [],
  synchronize: true,
});
