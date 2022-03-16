import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtPayload } from 'src/helpers/jwt.payload';
import { AuthService } from './auth.service';
import { toUserDto } from 'src/user/mapper/user.mapper';
import { UserDto } from 'src/user/dto/user.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'mysecret',
    });
  }

  async validate(payload: JwtPayload): Promise<UserDto> {
    const User = await this.authService.validateUser(payload);
    if (!User) {
      throw new HttpException('Invalid Token', HttpStatus.UNAUTHORIZED);
    }

    return toUserDto(User);
  }
}
