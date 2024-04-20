import { Body, Controller, Get, Post } from '@nestjs/common';
import { MessageDTO } from './message.dto';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private messageService: MessageService) {}
  @Post()
  async create(@Body() message: MessageDTO) {
    const createdMessage = await this.messageService.create(message);
    return createdMessage;
  }

  @Get()
  async getMessages() {
    const getMessages = await this.messageService.getMessages();
    return getMessages;
  }
}
