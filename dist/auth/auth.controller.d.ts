import { CreateCompanyDto, LoginCompanyDto } from 'src/company/dto/company.dto';
import { LoginStatus, RegistrationStatus } from 'src/helpers/jwt.status';
import { CreateUserDto, LoginUserDto } from 'src/user/dto/user.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    registerUser(body: CreateUserDto): Promise<RegistrationStatus>;
    loginUser(body: LoginUserDto): Promise<LoginStatus>;
    registerCompany(body: CreateCompanyDto): Promise<RegistrationStatus>;
    loginCompany(body: LoginCompanyDto): Promise<LoginStatus>;
}
