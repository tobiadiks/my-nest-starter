import { UserDto } from '../dto/user.dto';

export const toUserDto = (data: UserDto): UserDto => {
  const {
    user_id,
    email,
    country,
    profile_url,
    firstname,
    lastname,
    date_created,
    date_updated,
  } = data;

  const UserDto: UserDto = {
    user_id,
    email,
    country,
    profile_url,
    firstname,
    lastname,
    date_created,
    date_updated,
  };

  return UserDto;
};
