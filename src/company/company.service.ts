import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtPayload } from 'src/helpers/jwt.payload';
import { comparePassword } from 'src/helpers/password.compare';
import { Repository } from 'typeorm';
import {
  CompanyDto,
  CreateCompanyDto,
  LoginCompanyDto,
} from './dto/company.dto';
import { Company } from './entity/company.entity';
import { toCompanyDto } from './mapper/company.mapper';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  async CreateCompany(data: CreateCompanyDto): Promise<CompanyDto> {
    const companyExist = await this.companyRepository.findOne({
      where: { email: data.email },
    });

    if (companyExist) {
      throw new HttpException(
        'Company with email exist',
        HttpStatus.BAD_REQUEST,
      );
    }

    const company: Company = await this.companyRepository.create(data);

    return await this.companyRepository.save(company);
  }

  async LoginCompany(data: LoginCompanyDto): Promise<CompanyDto> {
    const companyExist = await this.companyRepository.findOne({
      where: { email: data.email },
    });

    if (!companyExist) {
      throw new HttpException('Company does not exist', HttpStatus.BAD_REQUEST);
    }

    const isEqualPassword = await comparePassword(
      data.password,
      companyExist.password,
    );

    if (!isEqualPassword) {
      throw new HttpException('Wrong credentials', HttpStatus.UNAUTHORIZED);
    }

    return toCompanyDto(companyExist);
  }

  async findByPayload({ email }: JwtPayload): Promise<CompanyDto> {
    return await this.companyRepository.findOne({
      where: { email },
    });
  }
}
