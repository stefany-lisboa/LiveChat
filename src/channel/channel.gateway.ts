import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { ChannelService } from './channel.service';
import { ChannelDto } from './channel.dto';

@WebSocketGateway({ cors: true })
export class ChannelGateway {
  constructor(private channelService: ChannelService) {}
  @WebSocketServer()
  public server;

  @SubscribeMessage('channel')
  async handleChannel(@MessageBody() channel: ChannelDto): Promise<void> {
    const channelMessages = await this.channelService.getMessagesFromChannel(
      channel._id.toString(),
    );
    console.log('channelMessages ', channelMessages);
    this.server.emit('channel', channelMessages);
  }

  @SubscribeMessage('channel/users')
  async handleChannelUsers(@MessageBody() channel: ChannelDto): Promise<void> {
    const channelUsers = await this.channelService.getUsersFromChannel(
      channel._id.toString(),
    );
    console.log('users ', channelUsers);
    this.server.emit('channel/users', channelUsers);
  }
}
