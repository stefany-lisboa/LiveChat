import { Injectable } from '@nestjs/common';
import { MessageRepository } from './message.repository';
import { MessageDTO } from './message.dto';

@Injectable()
export class MessageService {
  constructor(private messageRepository: MessageRepository) {}

  async create(message: MessageDTO) {
    const createdMessage = this.messageRepository.create(message);
    return createdMessage;
  }

  async getMessages(): Promise<MessageDTO[]> {
    const foundedMessages = await this.messageRepository.find();
    return foundedMessages;
  }
}
