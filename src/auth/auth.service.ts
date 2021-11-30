import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/helpers/jwt.payload';
import { LoginStatus, RegistrationStatus } from 'src/helpers/jwt.status';
import { toUserDto } from 'src/user/mapper/userdto.mapper';
import { CreateUserDto, LoginUserDto, UserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';
import { CompanyService } from 'src/company/company.service';
import {
  CompanyDto,
  CreateCompanyDto,
  LoginCompanyDto,
} from 'src/company/dto/company.dto';
import { toCompanyDto } from 'src/company/mapper/company.mapper';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly companyService: CompanyService,
    private readonly jwtService: JwtService,
  ) {}

  //UserService

  async validateUser(payload: JwtPayload): Promise<UserDto> {
    const user = await this.userService.findByPayload(payload);
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return toUserDto(user);
  }
  async registerUser(data: CreateUserDto): Promise<RegistrationStatus> {
    let status: RegistrationStatus = {
      success: true,
      message: 'user registered',
    };
    try {
      await this.userService.CreateUser(data);
    } catch (err) {
      status = { success: false, message: err };
    }
    return status;
  }

  async loginUser(data: LoginUserDto): Promise<LoginStatus> {
    const user = await this.userService.LoginUser(data);
    let status: LoginStatus = {
      success: true,
      message: 'user logged in',
    };
    try {
      user;
    } catch (err) {
      status = { success: false, message: err };
    }

    const token = await this._createUserToken(user);

    return { user: toUserDto(user), ...status, ...token };
  }

  //End UserService

  //CompanyService
  async validateCompany(payload: JwtPayload): Promise<CompanyDto> {
    const company = await this.companyService.findByPayload(payload);
    if (!company) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return toCompanyDto(company);
  }

  async registerCompany(data: CreateCompanyDto): Promise<RegistrationStatus> {
    let status: RegistrationStatus = {
      success: true,
      message: 'company registered',
    };
    try {
      await this.companyService.CreateCompany(data);
    } catch (err) {
      status = { success: false, message: err };
    }

    return status;
  }

  async loginCompany(data: LoginCompanyDto): Promise<LoginStatus> {
    const company = await this.companyService.LoginCompany(data);
    let status: LoginStatus = {
      success: true,
      message: 'company logged in',
    };

    try {
      company;
    } catch (err) {
      status = { success: false, message: err };
    }
    const accessToken = await this._createCompanyToken(company);
    return { company: toCompanyDto(company), ...status, ...accessToken };
  }

  //End CompanyService

  private _createUserToken({ email }: UserDto): any {
    const user: JwtPayload = { email };
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn: '2h',
      accessToken,
    };
  }

  private _createCompanyToken({ email }: CompanyDto): any {
    const user: JwtPayload = { email };
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn: '2h',
      accessToken,
    };
  }
}
