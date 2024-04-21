import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Get(':id/messages')
  async getMessagesFromChannels(@Param() id: string) {
    const getMessages = await this.channelService.getMessagesFromChannel(id);
    return getMessages;
  }
}
