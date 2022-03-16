export class CreateUserDto {
  firstname:string;
  lastname:string;
  email: string;
  password: string;
  country: string;
}

export class LoginUserDto {
  readonly email: string;
  readonly password: string;
}

export class UserDto {
  user_id: string;
  firstname:string;
  lastname:string;
  email: string;
  country: string;
  profile_url: string;
  date_created: string;
  date_updated: string;
}
