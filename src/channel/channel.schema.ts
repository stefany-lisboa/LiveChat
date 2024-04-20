import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
export type ChannelDocument = HydratedDocument<Channel>;

@Schema()
export class Channel {
  _id: mongoose.Types.ObjectId;
  @Prop()
  channel: string;
}

export const ChannelSchema = SchemaFactory.createForClass(Channel);
