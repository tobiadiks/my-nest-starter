import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export function DbConfig(): TypeOrmModuleOptions {
  return {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'fpp',
    synchronize: true,
    autoLoadEntities: true,
  };
}
