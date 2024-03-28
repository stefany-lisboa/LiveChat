import mongoose from 'mongoose';

export interface UserPayload {
  sub: mongoose.Types.ObjectId;
  email: string;
  name: string;
  iat?: number;
  exp?: number;
}
