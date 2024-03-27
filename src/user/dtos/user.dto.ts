import mongoose from 'mongoose';

export class UserDto {
  _id: mongoose.Types.ObjectId;
  email: string;
  password: string;
  name: string;
}
