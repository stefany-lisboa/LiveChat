import { IsBoolean, IsMongoId, IsString } from 'class-validator';
import mongoose from 'mongoose';

export class MessageDTO {
  _id: mongoose.Types.ObjectId;
  @IsString()
  content: string;
  @IsMongoId()
  senderId: mongoose.Types.ObjectId;
  @IsMongoId()
  destinataryId: mongoose.Types.ObjectId;
  @IsMongoId()
  channeld: mongoose.Types.ObjectId;
  @IsBoolean()
  sended: boolean;
  @IsBoolean()
  received: boolean;
  @IsBoolean()
  visualized: boolean;
  @IsBoolean()
  excludedFromSender: boolean;
  @IsBoolean()
  excludedFromChannel: boolean;
}
