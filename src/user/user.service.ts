import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtPayload } from 'src/helpers/jwt.payload';
import { comparePassword } from 'src/helpers/password.compare';
import { Repository } from 'typeorm';
import {
  UserDto,
  CreateUserDto,
  LoginUserDto,
} from './dto/user.dto';
import { User } from './entity/user.entity';
import { toUserDto } from './mapper/user.mapper';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly UserRepository: Repository<User>,
  ) {}

  async CreateUser(data: CreateUserDto): Promise<UserDto> {
    const UserExist = await this.UserRepository.findOne({
      where: { email: data.email },
    });

    if (UserExist) {
      throw new HttpException(
        'User with email exist',
        HttpStatus.BAD_REQUEST,
      );
    }

    const User: User = await this.UserRepository.create(data);

    return await this.UserRepository.save(User);
  }

  async LoginUser(data: LoginUserDto): Promise<UserDto> {
    const UserExist = await this.UserRepository.findOne({
      where: { email: data.email },
    });

    if (!UserExist) {
      throw new HttpException('User does not exist', HttpStatus.BAD_REQUEST);
    }

    const isEqualPassword = await comparePassword(
      data.password,
      UserExist.password,
    );

    if (!isEqualPassword) {
      throw new HttpException('Wrong credentials', HttpStatus.UNAUTHORIZED);
    }

    return toUserDto(UserExist);
  }

  async findByPayload({ email }: JwtPayload): Promise<UserDto> {
    return await this.UserRepository.findOne({
      where: { email },
    });
  }
}
