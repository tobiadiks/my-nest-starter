import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtPayload } from 'src/helpers/jwt.payload';
import { AuthService } from './auth.service';
import { toCompanyDto } from 'src/company/mapper/company.mapper';
import { CompanyDto } from 'src/company/dto/company.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'mysecret',
    });
  }

  async validate(payload: JwtPayload): Promise<CompanyDto> {
    const company = await this.authService.validateCompany(payload);
    if (!company) {
      throw new HttpException('Invalid Token', HttpStatus.UNAUTHORIZED);
    }

    return toCompanyDto(company);
  }
}
