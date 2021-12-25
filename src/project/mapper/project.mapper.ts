import { ProjectDto } from '../dto/project.dto';

export const toProjectDto = (data: ProjectDto): ProjectDto => {
  const { name, company, description, date_created, project_id, color} = data;

  const projectDto: ProjectDto = {
    name,
    company,
    description,
    date_created,
    project_id, 
    color,
  };

  return projectDto;
};
