import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
export type MessageDocument = HydratedDocument<Message>;

@Schema()
export class Message {
  _id: mongoose.Types.ObjectId;
  @Prop()
  content: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  senderId: mongoose.Types.ObjectId;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  destinataryId: mongoose.Types.ObjectId;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Channel' })
  channelId: mongoose.Types.ObjectId;
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
