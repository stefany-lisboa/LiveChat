import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Channel } from './channel.schema';
import { Model } from 'mongoose';
import { ChannelDto } from './channel.dto';

@Injectable()
export class ChannelRepository {
  constructor(
    @InjectModel(Channel.name) private channelModel: Model<Channel>,
  ) {}

  async create(createChannelDto: ChannelDto): Promise<ChannelDto> {
    const channelCreated = new this.channelModel(createChannelDto);
    return (await channelCreated.save()).toObject();
  }

  async find(): Promise<ChannelDto[]> {
    const foundedChannels = await this.channelModel.find().exec();
    return foundedChannels;
  }
}
