import { CompanyDto } from '../dto/company.dto';

export const toCompanyDto = (data: CompanyDto): CompanyDto => {
  const {
    id,
    email,
    display_name,
    logo_url,
    website,
    date_created,
    date_updated,
  } = data;

  const companyDto: CompanyDto = {
    id,
    email,
    display_name,
    logo_url,
    website,
    date_created,
    date_updated,
  };

  return companyDto;
};
