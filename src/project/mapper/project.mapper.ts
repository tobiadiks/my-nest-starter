import { ProjectDto } from '../dto/project.dto';

export const toProjectDto = (data: ProjectDto): ProjectDto => {
  const {
    name,
    company,
    description,
    date_created,
    project_id,
    color,
    type_id,
    type_string,
  } = data;

  const projectDto: ProjectDto = {
    name,
    company,
    description,
    date_created,
    project_id,
    type_id,
    type_string,
    color,
  };

  return projectDto;
};
