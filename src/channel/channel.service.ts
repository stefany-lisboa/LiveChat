import { Injectable } from '@nestjs/common';
import { ChannelDto } from './channel.dto';
import { ChannelRepository } from './channel.repository';
import { MessageDTO } from 'src/message/message.dto';

@Injectable()
export class ChannelService {
  constructor(private channelRepository: ChannelRepository) {}
  async create(channel: ChannelDto) {
    await this.channelRepository.create(channel);
  }

  async getChannels() {
    const foundedChannels = await this.channelRepository.find();
    return foundedChannels;
  }

  async getMessagesFromChannel(id: string): Promise<MessageDTO[]> {
    const foundedMessages = await this.channelRepository.findByChannel(id);
    return foundedMessages;
  }
}
