import { JwtPayload } from 'src/helpers/jwt.payload';
import { Repository } from 'typeorm';
import { CreateUserDto, LoginUserDto, UserDto } from './dto/user.dto';
import { User } from './entity/user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    CreateUser(data: CreateUserDto): Promise<UserDto>;
    LoginUser(data: LoginUserDto): Promise<UserDto>;
    findByPayload({ email }: JwtPayload): Promise<UserDto>;
}
