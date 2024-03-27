import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserDto } from 'src/user/dtos/user.dto';
import { UserService } from 'src/user/user.service';
import { UserPayload } from './models/user-payload';
@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  async validateUser(email: string, password: string) {
    const user = await this.userService.findOne({ email });
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        return {
          ...user,
          password: undefined,
        };
      }

      throw new Error('Email address or password provided is incorrect');
    }
  }
  login(user: UserDto) {
    const payload: UserPayload = {
      sub: user._id,
      email: user.email,
      name: user.name,
    };
    return payload;
  }
}
