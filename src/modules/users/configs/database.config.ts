import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from 'src/modules/users/entities/user.entity';

console.log('AQUI', process.env.DATABASE_USER);
export const DataBaseConfig = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'example-sso-node-nestjs-usr',
  password: 'example-sso-node-nestjs-psw',
  database: 'example-sso-node-nestjs-db',
  // entities: [User],
  autoLoadEntities: true,
  synchronize: true,
});
