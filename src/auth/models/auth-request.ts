import { Request } from 'express';
import { UserDto } from 'src/user/dtos/user.dto';
export class AuthRequest extends Request {
  user: UserDto;
}
