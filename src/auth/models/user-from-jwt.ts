import mongoose from 'mongoose';

export interface UserFromJwt {
  _id: mongoose.Types.ObjectId;
  email: string;
  name: string;
}
