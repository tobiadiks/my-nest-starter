import { CompanyDto } from 'src/company/dto/company.dto';

export class CreateProjectDto {
  name: string;
  description: string;
  color: string;
  type_id: string;
  date_created: string;
}

export class UpdateProjectDto {
  name: string;
  description: string;
}

export class ProjectDto {
  company: CompanyDto;
  project_id: string;
  name: string;
  description: string;
  type_id: string;
  type_string: string;
  date_created: string;
  color: string;
}
