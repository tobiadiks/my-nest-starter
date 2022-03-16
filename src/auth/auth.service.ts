import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/helpers/jwt.payload';
import { LoginStatus, RegistrationStatus } from 'src/helpers/jwt.status';
import { UserService } from 'src/user/user.service';
import {
  UserDto,
  CreateUserDto,
  LoginUserDto,
} from 'src/user/dto/user.dto';
import { toUserDto } from 'src/user/mapper/user.mapper';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  

  //UserService
  async validateUser(payload: JwtPayload): Promise<UserDto> {
    const User = await this.userService.findByPayload(payload);
    if (!User) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return toUserDto(User);
  }

  async registerUser(data: CreateUserDto): Promise<RegistrationStatus> {
    let status: RegistrationStatus = {
      success: true,
      message: 'User registered',
    };
    try {
      await this.userService.CreateUser(data);
    } catch (err) {
      status = { success: false, message: err };
    }

    return status;
  }

  async loginUser(data: LoginUserDto): Promise<LoginStatus> {
    const User = await this.userService.LoginUser(data);
    let status: LoginStatus = {
      success: true,
      message: 'User logged in',
    };

    try {
      User;
    } catch (err) {
      status = { success: false, message: err };
    }
    const accessToken = await this._createUserToken(User);
    return { User: toUserDto(User), ...status, ...accessToken };
  }

  //End UserService

  private _createUserToken({ email }: UserDto): any {
    const user: JwtPayload = { email };
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn: '2h',
      accessToken,
    };
  }
}
