import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './entities/user.interface';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<IUser>) {}
  async create(createUserDto: CreateUserDto): Promise<IUser> {
    try {
      const hashPass = await bcrypt.hash(createUserDto.password, 10);
      const newUser: IUser = new this.userModel({
        userName: createUserDto.userName,
        password: hashPass,
        email: createUserDto.email,
      });
      return await newUser.save();
    } catch (error) {
      throw new BadRequestException();
    }
  }

  findAll() {
    try {
    } catch (error) {}
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
