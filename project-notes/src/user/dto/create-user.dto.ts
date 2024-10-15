//import { IsString, IsEmail, MinLength } from 'validator';
export class CreateUserDto {
  // @IsString()
  userName: string;
  // @IsString()
  // @MinLength(6, { msg: 'password is to must bi at leat 6 laters' })
  password: string;
  // @IsEmail({ msg: 'invalid email format' })
  email: string;
}
