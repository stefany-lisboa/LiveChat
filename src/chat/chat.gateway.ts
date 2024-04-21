import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { MessageDTO } from 'src/message/message.dto';

@WebSocketGateway({ cors: true })
export class ChatGateway {
  @WebSocketServer()
  public server;
  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: MessageDTO): void {
    console.log('server message ', message);
    this.server.emit('message', message);
  }
}
