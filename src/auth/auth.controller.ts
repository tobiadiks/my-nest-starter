import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateCompanyDto, LoginCompanyDto } from 'src/company/dto/company.dto';
import { LoginStatus, RegistrationStatus } from 'src/helpers/jwt.status';
import { CreateUserDto, LoginUserDto } from 'src/user/dto/user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('user/register')
  async registerUser(@Body() body: CreateUserDto): Promise<RegistrationStatus> {
    const result: RegistrationStatus = await this.authService.registerUser(
      body,
    );
    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }
    return result;
  }

  @Post('user/login')
  async loginUser(@Body() body: LoginUserDto): Promise<LoginStatus> {
    return await this.authService.loginUser(body);
  }

  @Post('company/register')
  async registerCompany(
    @Body() body: CreateCompanyDto,
  ): Promise<RegistrationStatus> {
    return await this.authService.registerCompany(body);
  }

  @Post('company/login')
  async loginCompany(@Body() body: LoginCompanyDto): Promise<LoginStatus> {
    return await this.authService.loginCompany(body);
  }
}
