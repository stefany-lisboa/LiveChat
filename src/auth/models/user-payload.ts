import mongoose from 'mongoose';

export class UserPayload {
  sub: mongoose.Types.ObjectId;
  email: string;
  name: string;
  iat?: number;
  exp?: number;
}
