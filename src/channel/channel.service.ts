import { Injectable } from '@nestjs/common';
import { ChannelDto } from './channel.dto';
import { ChannelRepository } from './channel.repository';

@Injectable()
export class ChannelService {
  constructor(private channelRepository: ChannelRepository) {}
  async create(channel: ChannelDto) {
    await this.channelRepository.create(channel);
  }

  async getChannels() {
    const foundedChannels = await this.channelRepository.getChannels();
    return foundedChannels;
  }
}
