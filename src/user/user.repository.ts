import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dtos/createUser.dto';
import { User } from './user.schema';
import { UserDto } from './dtos/user.dto';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<UserDto> {
    const userCreated = new this.userModel(createUserDto);
    return (await userCreated.save()).toObject();
  }

  async findOne(data: any): Promise<UserDto> {
    const foundedUsers = (
      await this.userModel.findOne(data).exec()
    )?.toObject();
    return foundedUsers;
  }

  async find(): Promise<UserDto[]> {
    const foundedUsers = await this.userModel.find().exec();
    return foundedUsers;
  }
}
