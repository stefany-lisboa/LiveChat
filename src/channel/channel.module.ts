import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Channel, ChannelSchema } from './channel.schema';
import { ChannelController } from './channel.controller';
import { ChannelRepository } from './channel.repository';
import { ChannelService } from './channel.service';
import { Message, MessageSchema } from 'src/message/message.schema';
import { ChannelGateway } from './channel.gateway';
import { User } from 'src/user/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Channel.name, schema: ChannelSchema }]),
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: MessageSchema }]),
  ],
  controllers: [ChannelController],
  providers: [ChannelService, ChannelRepository, ChannelGateway],
  exports: [ChannelService],
})
export class ChannelModule {}
