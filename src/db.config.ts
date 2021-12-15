import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export function DbConfig(): TypeOrmModuleOptions {
  return {
    type: 'postgres',
    host: process.env.host,
    port: 5432,
    username: process.env.username,
    password: process.env.password,
    database: process.env.database,
    synchronize: true,
    autoLoadEntities: true,
    logging: false,
    dropSchema: false,
  };
}
