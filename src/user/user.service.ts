import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dtos/createUser.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const userCreated = await this.userModel.create(createUserDto);
    return (await userCreated.save()).toObject();
  }

  async findOne(data: any): Promise<User> {
    const foundedUsers = await this.userModel.findOne(data);
    return foundedUsers;
  }
}
