import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export function DbConfig(): TypeOrmModuleOptions {
  return {
    type: 'postgres',
    host:
      process.env.NODE_ENV == `production`
        ? process.env.NODE_HOST
        : 'localhost',
    port: 5432,
    username:
      process.env.NODE_ENV == `production` ? process.env.NODE_USERNAME : 'postgres',
    password:
      process.env.NODE_ENV == `production`
        ? process.env.PASSWORD
        : '1234',
    database: process.env.NODE_ENV == `production` ? process.env.NODE_DATABASE : 'fpp',
    synchronize: true,
    autoLoadEntities: true,
    ssl:
      process.env.NODE_ENV == `production`
        ? { rejectUnauthorized: false }
        : false,
  };
}
