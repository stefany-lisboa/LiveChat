import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

@WebSocketGateway({ cors: true })
export class ChatGateway {
  @WebSocketServer()
  public server;
  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): void {
    console.log('server message ', message);
    this.server.emit('message', message);
  }
}
