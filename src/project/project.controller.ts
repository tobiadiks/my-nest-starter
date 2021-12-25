import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  CreateProjectDto,
  ProjectDto,
  UpdateProjectDto,
} from './dto/project.dto';
import { ProjectService } from './project.service';

@Controller('/:company_id/project')
@UseGuards(AuthGuard())
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}
  @Post()
  async CreateProject(
    @Body() body: CreateProjectDto,
    @Param('company_id') company_id: string,
  ): Promise<ProjectDto> {
    const result: ProjectDto = await this.projectService.CreateProject(
      body,
      company_id,
    );
    return result;
  }

  @Get()
  async GetAllProject(
    @Param('company_id') company_id: string,
  ): Promise<ProjectDto[]> {
    const result: ProjectDto[] = await this.projectService.GetAllProject(
      company_id,
    );
    return result;
  }

  @Get('/:project_id')
  async GetOneProject(@Param() data: any): Promise<any> {
    const result = await this.projectService.GetOneProject(data);

    return result;
  }

  @Delete('/:project_id')
  async DeleteOneProject(@Param() data: any): Promise<any> {
    const result = await this.projectService.DeleteOneProject(data);

    return result;
  }

  @Put('/:project_id')
  async UpdateProject(
    @Body() body: UpdateProjectDto,
    @Param() data: any,
  ): Promise<ProjectDto> {
    const result: ProjectDto = await this.projectService.UpdateProject(
      body,
      data,
    );
    return result;
  }
}
