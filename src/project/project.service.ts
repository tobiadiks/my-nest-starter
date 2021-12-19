import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from 'src/company/entity/company.entity';
import { Repository } from 'typeorm';
import { CreateProjectDto, ProjectDto } from './dto/project.dto';
import { Project } from './entity/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  async CreateProject(
    body: CreateProjectDto,
    company_id: string,
  ): Promise<any> {
    if (!body.name) {
      throw new HttpException('name field required', HttpStatus.BAD_REQUEST);
    }
    const getCompany = await this.companyRepository.findOne({
      where: { id: company_id },
    });

    if (!getCompany) {
      throw new HttpException('not logged in', HttpStatus.UNAUTHORIZED);
    }
    const project: Project = await this.projectRepository.create({
      company: getCompany,
      ...body,
    });
    if (project) {
      return { success: true };
    } else {
      throw new HttpException('cannot create', HttpStatus.FORBIDDEN);
    }
  }

  async GetAllProject(company_id: string): Promise<ProjectDto[]> {
    const getCompany = await this.companyRepository.findOne({
      where: { id: company_id },
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
      where: { id: data.company_id },
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

    await this.projectRepository.delete(findProject);
    return { success: true };
  }

  async GetOneProject(data: any): Promise<any> {
    const getCompany = await this.companyRepository.findOne({
      where: { id: data.company_id },
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

  async UpdateProject(body: CreateProjectDto, data: any): Promise<any> {
    if (!body.name) {
      throw new HttpException('name field required', HttpStatus.BAD_REQUEST);
    }
    const getCompany = await this.companyRepository.findOne({
      where: { id: data.company_id },
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
