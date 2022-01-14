import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from 'src/company/entity/company.entity';
import { Documentation } from 'src/documentation/entity/documentation.entity';
import { Project } from 'src/project/entity/project.entity';
import { Repository } from 'typeorm';
import { DashboardDto } from './dto/dashboard.dto';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
    @InjectRepository(Documentation)
    private readonly documentationRepository: Repository<Documentation>,
  ) {}

  async DashboardMetric(company_id: string): Promise<DashboardDto> {
    const getCompany = await this.companyRepository.findOne({
      where: { company_id: company_id },
    });

    if (!getCompany) {
      throw new HttpException('not logged in', HttpStatus.UNAUTHORIZED);
    }
    const projectMetric = await this.projectRepository.count({
      where: { company: getCompany },
    });
    const documentationMetric = await this.documentationRepository.count({
      where: { company: getCompany },
    });
    return { projects: projectMetric, documentation: documentationMetric };
  }
}
