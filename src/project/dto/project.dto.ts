import { CompanyDto } from 'src/company/dto/company.dto';

export class CreateProjectDto {
  name: string;
  description: string;
  color: string;
  date_created: string;
}

export class ProjectDto {
  company: CompanyDto;
  project_id: string;
  name: string;
  description: string;
  date_created: string;
  project: string;
}
