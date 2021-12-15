import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export function DbConfig(): TypeOrmModuleOptions {
  return {
    type: 'postgres',
    host:
      process.env.NODE_ENV == `production`
        ? `ec2-184-73-25-2.compute-1.amazonaws.com`
        : 'localhost',
    port: 5432,
    username:
      process.env.NODE_ENV == `production` ? `vjhxvpfqrswzkt` : 'postgres',
    password:
      process.env.NODE_ENV == `production`
        ? `e1f0e2d6bdd0ed82629d7bd96994aa9baf5d308ad26e161447d2fb7bae0bdeb6`
        : '1234',
    database: process.env.NODE_ENV == `production` ? `df0qjgqppjpga0` : 'fpp',
    synchronize: true,
    autoLoadEntities: true,
  };
}
