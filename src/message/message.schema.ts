import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
export type MessageDocument = HydratedDocument<Message>;

@Schema()
export class Message {
  _id: mongoose.Types.ObjectId;
  @Prop()
  content: string;
  senderId: mongoose.Types.ObjectId;
  destinataryId: mongoose.Types.ObjectId;
  @Prop()
  channeld: mongoose.Types.ObjectId;
  @Prop()
  sended: boolean;
  @Prop()
  received: boolean;
  @Prop()
  visualized: boolean;
  @Prop()
  excludedFromSender: boolean;
  @Prop()
  excludedFromChannel: boolean;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
