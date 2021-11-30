export declare class CreateUserDto {
    password: string;
    email: string;
}
export declare class UserDto {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    photo_url: string;
}
export declare class LoginUserDto {
    readonly email: string;
    readonly password: string;
}
