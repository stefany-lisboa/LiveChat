import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Channel } from './channel.schema';
import mongoose, { Model } from 'mongoose';
import { ChannelDto } from './channel.dto';
import { Message } from 'src/message/message.schema';
import { MessageDTO } from 'src/message/message.dto';

@Injectable()
export class ChannelRepository {
  constructor(
    @InjectModel(Channel.name) private channelModel: Model<Channel>,
    @InjectModel(Message.name) private messageModel: Model<Message>,
  ) {}

  async create(createChannelDto: ChannelDto): Promise<ChannelDto> {
    const channelCreated = new this.channelModel(createChannelDto);
    return (await channelCreated.save()).toObject();
  }

  async find(): Promise<ChannelDto[]> {
    const foundedChannels = await this.channelModel.find().exec();
    return foundedChannels;
  }

  async findByChannel(id: string): Promise<MessageDTO[]> {
    const query = { channelId: new mongoose.Types.ObjectId(id) };
    const foundedMessages = await this.messageModel.find(query);
    return foundedMessages;
  }
}
