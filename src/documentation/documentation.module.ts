import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from 'src/company/entity/company.entity';
import { DocumentationController } from './documentation.controller';
import { DocumentationService } from './documentation.service';
import { Documentation } from './entity/documentation.entity';
import { DocumentationChild } from './entity/documentationChild.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Documentation, DocumentationChild,Company])],
  providers: [DocumentationService],
  controllers: [DocumentationController],
  exports: [DocumentationService],
})
export class DocumentationModule {}
