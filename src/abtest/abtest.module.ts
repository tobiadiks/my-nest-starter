import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Company } from 'src/company/entity/company.entity';
import { Project } from 'src/project/entity/project.entity';
import { AbtestService } from './abtest.service';
import { ABTest } from './entity/abtest.entity';
import { AbtestController } from './abtest.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ABTest, Project, Company]), AuthModule],
  providers: [AbtestService],
  controllers: [AbtestController],
})
export class AbtestModule {}
