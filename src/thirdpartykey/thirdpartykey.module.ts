import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrivateKey } from './entity/thirdparty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PrivateKey])],
})
export class ThirdpartykeyModule {}
