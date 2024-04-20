import { IsString } from 'class-validator';
import mongoose from 'mongoose';

export class ChannelDto {
  _id: mongoose.Types.ObjectId;
  @IsString()
  channel: string;
}
