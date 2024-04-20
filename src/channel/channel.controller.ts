import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChannelService } from './channel.service';
import { ChannelDto } from './channel.dto';

@Controller('channel')
export class ChannelController {
  constructor(private channelService: ChannelService) {}
  @Post()
  async create(@Body() channel: ChannelDto) {
    const createdChannel = await this.channelService.create(channel);
    return createdChannel;
  }

  @Get()
  async getChannels() {
    const createdChannel = await this.channelService.getChannels();
    return createdChannel;
  }
}
