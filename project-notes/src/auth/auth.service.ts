import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from 'src/user/entities/user.interface';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private userModel: Model<IUser>,
    private readonly jwtService: JwtService,
  ) {}
  async validatorUser(loginDto: LoginDto) {
    try {
      //find user
      const user = await this.userModel.findOne({
        userName: loginDto.userName,
      });
      if (!user) {
        throw new NotFoundException('user not found');
      }

      //compare
      const isPasswordValid = await bcrypt.compare(
        loginDto.password,
        user.password,
      );
      if (!isPasswordValid) {
        throw new UnauthorizedException('Invalid password');
      }

      //token or error
      const payload = { userName: user.userName, sub: user._id };
      const token = this.jwtService.sign(payload);

      return { token };
    } catch (error) {}
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
