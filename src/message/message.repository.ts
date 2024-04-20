import { Injectable } from '@nestjs/common';
import { MessageDTO } from './message.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Message } from './message.schema';
import { Model } from 'mongoose';

@Injectable()
export class MessageRepository {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<Message>,
  ) {}

  async create(message: MessageDTO): Promise<MessageDTO> {
    const messageCreated = new this.messageModel(message);
    return (await messageCreated.save()).toObject();
  }

  async find(): Promise<MessageDTO[]> {
    const foundedMessages = await this.messageModel.find().exec();
    return foundedMessages;
  }
}
