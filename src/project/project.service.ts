import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ABTest } from 'src/abtest/entity/abtest.entity';
import { Company } from 'src/company/entity/company.entity';
import { Repository } from 'typeorm';
import {
  CreateProjectDto,
  ProjectDto,
  UpdateProjectDto,
} from './dto/project.dto';
import { Project } from './entity/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
    @InjectRepository(ABTest)
    private readonly abtestRepository: Repository<ABTest>,
  ) {}

  async CreateProject(
    body: CreateProjectDto,
    company_id: string,
  ): Promise<any> {
    if (!body.name) {
      throw new HttpException('name field required', HttpStatus.BAD_REQUEST);
    }
    const getCompany = await this.companyRepository.findOne({
      where: { company_id: company_id },
    });

    if (!getCompany) {
      throw new HttpException('not logged in', HttpStatus.UNAUTHORIZED);
    }
    const project: Project = this.projectRepository.create({
      company: getCompany,
      ...body,
    });

    //abtest saves
    if (project.type_id == 'abtest') {
      await this.projectRepository.save(project);
      //creates abtest
      const abtest: ABTest = this.abtestRepository.create({
        for_project: project.project_id,
      });

      if (abtest) {
        await this.abtestRepository.save(abtest);
      } else {
        throw new HttpException('cannot save', HttpStatus.FORBIDDEN);
      }
      return { success: true };
    } else {
      throw new HttpException('cannot create', HttpStatus.FORBIDDEN);
    }
  }

  async GetAllProject(company_id: string): Promise<ProjectDto[]> {
    const getCompany = await this.companyRepository.findOne({
      where: { company_id: company_id },
    });

    if (!getCompany) {
      throw new HttpException('not logged in', HttpStatus.UNAUTHORIZED);
    }
    const projects = await this.projectRepository.find({
      where: { company: getCompany },
    });

    return projects;
  }

  async DeleteOneProject(data: any): Promise<any> {
    const getCompany = await this.companyRepository.findOne({
      where: { company_id: data.company_id },
    });

    if (!getCompany) {
      throw new HttpException('not logged in', HttpStatus.UNAUTHORIZED);
    }
    const findProject = await this.projectRepository.findOne({
      where: { project_id: data.project_id, company: getCompany },
    });
    //deletes abtest
    if (findProject.type_id == 'abtest') {
      const abtest: ABTest = this.abtestRepository.create({
        for_project: findProject.project_id,
      });

      await this.abtestRepository.delete(abtest);
    }
    if (!findProject) {
      throw new HttpException(
        'project does not exist',
        HttpStatus.UNAUTHORIZED,
      );
    }

    await this.projectRepository.delete(findProject);
    return { success: true };
  }

  async GetOneProject(data: any): Promise<any> {
    const getCompany = await this.companyRepository.findOne({
      where: { company_id: data.company_id },
    });

    if (!getCompany) {
      throw new HttpException('not logged in', HttpStatus.UNAUTHORIZED);
    }
    const findProject = await this.projectRepository.findOne({
      where: { project_id: data.project_id, company: getCompany },
    });

    if (!findProject) {
      throw new HttpException(
        'project does not exist',
        HttpStatus.UNAUTHORIZED,
      );
    }

    return { success: true, project: findProject };
  }

  async UpdateProject(body: UpdateProjectDto, data: any): Promise<any> {
    if (!body.name) {
      throw new HttpException('name field required', HttpStatus.BAD_REQUEST);
    }
    const getCompany = await this.companyRepository.findOne({
      where: { company_id: data.company_id },
    });

    if (!getCompany) {
      throw new HttpException('not logged in', HttpStatus.UNAUTHORIZED);
    }
    const project = await this.projectRepository.findOne({
      where: { company: getCompany, project_id: data.project_id },
    });
    if (project) {
      await this.projectRepository.update(project, { ...body });
      return { success: true };
    } else {
      throw new HttpException('does not exist', HttpStatus.FORBIDDEN);
    }
  }
}
