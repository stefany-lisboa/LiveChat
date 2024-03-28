import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserDto } from './dtos/user.dto';
import { UserRepository } from './user.repository';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto): Promise<UserDto> {
    const userCreated = await this.userRepository.create(createUserDto);
    return userCreated;
  }

  async findOne(data: any): Promise<UserDto> {
    const foundedUsers = await this.userRepository.findOne(data);
    return foundedUsers;
  }

  async getUsers(): Promise<UserDto[]> {
    const foundedUsers = await this.userRepository.find();
    return foundedUsers;
  }
}
