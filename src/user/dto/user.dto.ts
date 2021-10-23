export class CreateUserDto {
  password: string;
  email: string;
}

export class UserDto {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  photo_url: string;
}

export class LoginUserDto {
  readonly email: string;
  readonly password: string;
}
