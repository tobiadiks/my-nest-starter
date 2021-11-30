import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/helpers/jwt.payload';
import { LoginStatus, RegistrationStatus } from 'src/helpers/jwt.status';
import { CreateUserDto, LoginUserDto, UserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';
import { CompanyService } from 'src/company/company.service';
import { CompanyDto, CreateCompanyDto, LoginCompanyDto } from 'src/company/dto/company.dto';
export declare class AuthService {
    private readonly userService;
    private readonly companyService;
    private readonly jwtService;
    constructor(userService: UserService, companyService: CompanyService, jwtService: JwtService);
    validateUser(payload: JwtPayload): Promise<UserDto>;
    registerUser(data: CreateUserDto): Promise<RegistrationStatus>;
    loginUser(data: LoginUserDto): Promise<LoginStatus>;
    validateCompany(payload: JwtPayload): Promise<CompanyDto>;
    registerCompany(data: CreateCompanyDto): Promise<RegistrationStatus>;
    loginCompany(data: LoginCompanyDto): Promise<LoginStatus>;
    private _createUserToken;
    private _createCompanyToken;
}
