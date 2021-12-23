import { CompanyDto } from '../dto/company.dto';

export const toCompanyDto = (data: CompanyDto): CompanyDto => {
  const {
    company_id,
    email,
    display_name,
    logo_url,
    website,
    date_created,
    date_updated,
  } = data;

  const companyDto: CompanyDto = {
    company_id,
    email,
    display_name,
    logo_url,
    website,
    date_created,
    date_updated,
  };

  return companyDto;
};
