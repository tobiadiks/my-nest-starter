import { UserDto } from 'src/user/dto/user.dto';

export const toUserDto = (data: UserDto): UserDto => {
  const { id, first_name, last_name, email, photo_url } = data;
  const userDto: UserDto = { id, first_name, last_name, email, photo_url };
  return userDto;
};
