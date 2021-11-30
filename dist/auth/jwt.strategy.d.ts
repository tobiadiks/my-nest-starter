import { Strategy } from 'passport-jwt';
import { JwtPayload } from 'src/helpers/jwt.payload';
import { AuthService } from './auth.service';
import { CompanyDto } from 'src/company/dto/company.dto';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(payload: JwtPayload): Promise<CompanyDto>;
}
export {};
