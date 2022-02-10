import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from 'src/company/entity/company.entity';
import { Project } from 'src/project/entity/project.entity';
import { Repository } from 'typeorm';
import { ABTest } from './entity/abtest.entity';

@Injectable()
export class AbtestService {
  constructor(
    @InjectRepository(ABTest)
    private readonly abtestRepository: Repository<ABTest>,
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async GetResult(company_id: string, project_id: string): Promise<any> {
    const getCompany = await this.companyRepository.findOne({
      where: { company_id: company_id },
    });

    if (!getCompany) {
      throw new HttpException('not logged in', HttpStatus.UNAUTHORIZED);
    }
    const findProject = await this.projectRepository.findOne({
      where: { project_id: project_id, company: getCompany },
    });
    //find abtest
    if (findProject.type_id == 'abtest') {
      const abtest = this.abtestRepository.findOne({
        where: { for_project: findProject.project_id },
      });

      return abtest;
    } else {
      throw new HttpException('cannot find', HttpStatus.BAD_REQUEST);
    }
  }

  async Edit(
    company_id: string,
    project_id: string,
    item_a_url: string,
    item_b_url: string,
  ): Promise<any> {
    const getCompany = await this.companyRepository.findOne({
      where: { company_id: company_id },
    });

    if (!getCompany) {
      throw new HttpException('not logged in', HttpStatus.UNAUTHORIZED);
    }
    const findProject = await this.projectRepository.findOne({
      where: { project_id: project_id, company: getCompany },
    });
    //find abtest
    if (findProject.type_id == 'abtest') {
      const abtest = await this.abtestRepository.findOne({
        where: { for_project: findProject.project_id },
      });

      if (abtest) {
        await this.abtestRepository.update(abtest, {
          item_a_url: item_a_url,
          item_b_url: item_b_url,
        });
      }

      return abtest;
    } else {
      throw new HttpException('cannot find', HttpStatus.BAD_REQUEST);
    }
  }
  async Vote(project_id: string, value: string): Promise<any> {
    const abtest = await this.abtestRepository.findOne({
      where: { for_project: project_id },
    });
    //find abtest
    if (value == 'A') {
      await this.abtestRepository.update(abtest, {
        item_a_vote: abtest.item_a_vote + 1,
      });

      return { success: true, message: `voted ${value}` };
    } else if (value == 'B') {
      await this.abtestRepository.update(abtest, {
        item_b_vote: abtest.item_b_vote + 1,
      });

      return { success: true, message: `voted ${value}` };
    } else {
      throw new HttpException('cannot vote', HttpStatus.BAD_REQUEST);
    }
  }

  async GetVote(project_id: string): Promise<any> {
    const abtest = await this.abtestRepository.findOne({
      where: { for_project: project_id },
    });
    //find abtest
    if (abtest) {
      return { success: true, abtest };
    } else {
      throw new HttpException('cannot find', HttpStatus.BAD_REQUEST);
    }
  }
}
