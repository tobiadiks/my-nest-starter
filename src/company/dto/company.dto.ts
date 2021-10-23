export class CreateCompanyDto {
  email: string;
  password: string;
  display_name: string;
}

export class LoginCompanyDto {
  readonly email: string;
  readonly password: string;
}

export class CompanyDto {
  id: string;
  email: string;
  display_name: string;
  logo_url: string;
  website: string;
  date_created: string;
  date_updated: string;
}
