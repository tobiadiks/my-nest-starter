import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtPayload } from 'src/helpers/jwt.payload';
import { comparePassword } from 'src/helpers/password.compare';
import { toUserDto } from 'src/user/mapper/userdto.mapper';
import { Repository } from 'typeorm';
import { CreateUserDto, LoginUserDto, UserDto } from './dto/user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async CreateUser(data: CreateUserDto): Promise<UserDto> {
    const userExist = await this.userRepository.findOne({
      where: { email: data.email },
    });

    if (userExist) {
      throw new HttpException('User already exist', HttpStatus.BAD_REQUEST);
    }

    const user: User = await this.userRepository.create(data);
    await this.userRepository.save(user);
    return toUserDto(user);
  }

  async LoginUser(data: LoginUserDto): Promise<UserDto> {
    const checkUser = await this.userRepository.findOne({
      where: {
        email: data.email,
      },
    });
    if (!checkUser) {
      throw new HttpException('User does not exist', HttpStatus.BAD_REQUEST);
    }

    const isEqualPassword = await comparePassword(
      data.password,
      checkUser.password,
    );
    if (!isEqualPassword) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    return toUserDto(checkUser);
  }

  async findByPayload({ email }: JwtPayload): Promise<UserDto> {
    return await this.userRepository.findOne({
      where: { email },
    });
  }
}
