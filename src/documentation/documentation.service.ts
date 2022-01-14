import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from 'src/company/entity/company.entity';
import { Repository } from 'typeorm';
import {
  CreateDocumentationDto,
  DocumentationDto,
} from './dto/documentation.dto';
import {
  Documentation,
  
} from './entity/documentation.entity';
import { DocumentationChild } from './entity/documentationChild.entity';

@Injectable()
export class DocumentationService {
  constructor(
    @InjectRepository(Documentation)
    private readonly documentationRepository: Repository<Documentation>,
    @InjectRepository(DocumentationChild)
    private readonly documentationChildRepository: Repository<DocumentationChild>,
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  async CreateDocumentation(
    body: CreateDocumentationDto,
    company_id: string,
  ): Promise<any> {
    if (!body.title) {
      throw new HttpException('title field required', HttpStatus.BAD_REQUEST);
    }
    const getCompany = await this.companyRepository.findOne({
      where: { company_id: company_id },
    });

    if (!getCompany) {
      throw new HttpException('not logged in', HttpStatus.UNAUTHORIZED);
    }
    const documentation: Documentation = this.documentationRepository.create({
      company: getCompany,
      ...body,
    });

    if (documentation) {
      this.documentationRepository.save(documentation);
      return { success: true };
    } else {
      throw new HttpException('cannot save', HttpStatus.FORBIDDEN);
    }
  }

  async GetAllDocumentation(company_id: string): Promise<DocumentationDto[]> {
    const documentation = this.documentationRepository.find({
      where: { company_id: company_id },
    });

    return documentation;
  }
}
