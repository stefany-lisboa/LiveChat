import { Body, ConflictException, Controller, Post } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const userExists = await this.findByEmail(createUserDto.email);
    if (userExists) {
      throw new ConflictException('User already exists');
    }
    const data = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };
    const createdUser = await this.userService.create(data);
    return {
      ...createdUser,
      password: undefined,
    };
  }

  async findByEmail(email: string) {
    return this.userService.findOne({ email });
  }
}
