import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { LoginStatus, RegistrationStatus } from 'src/helpers/jwt.status';
import { CreateUserDto,LoginUserDto } from 'src/user/dto/user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @Post('/signup')
  async registerUser(
    @Body() body: CreateUserDto,
  ): Promise<RegistrationStatus> {
    return await this.authService.registerUser(body);
  }

  @Post('/login')
  async loginUser(@Body() body: LoginUserDto): Promise<LoginStatus> {
    return await this.authService.loginUser(body);
  }
}
