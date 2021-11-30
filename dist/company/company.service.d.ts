import { JwtPayload } from 'src/helpers/jwt.payload';
import { Repository } from 'typeorm';
import { CompanyDto, CreateCompanyDto, LoginCompanyDto } from './dto/company.dto';
import { Company } from './entity/company.entity';
export declare class CompanyService {
    private readonly companyRepository;
    constructor(companyRepository: Repository<Company>);
    CreateCompany(data: CreateCompanyDto): Promise<CompanyDto>;
    LoginCompany(data: LoginCompanyDto): Promise<CompanyDto>;
    findByPayload({ email }: JwtPayload): Promise<CompanyDto>;
}
