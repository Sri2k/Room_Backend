import { WebSocketGateway, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer, SubscribeMessage } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { CreateMessageDto } from 'src/message/message_dto/create-message.dto';
import { UpdateMessageDto } from 'src/message/message_dto/update-message.dto';
import { MessageService } from 'src/message/message_services/message.service';


@WebSocketGateway()
export class WebsocketGateway implements OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly messageService: MessageService) { }

  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket)
  {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket)
  {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('sendMessage')
  async handleMessage(client: Socket, payload: CreateMessageDto): Promise<void>
  {
    console.log(`Message received from client ${client.id}: ${payload.content}`);
    const timestamp = new Date();
    const message = await this.messageService.createMessage({ ...payload, timestamp });
    this.server.emit('messageCreated', message);
  }

  @SubscribeMessage('updateMessage')
  async handleMessageUpdate(client: Socket, payload: UpdateMessageDto): Promise<void>
  {
    console.log(`Update message request from client ${client.id}: ${JSON.stringify(payload)}`);
    const updatedMessage = await this.messageService.updateMessage(payload.id, payload);
    this.server.emit('messageUpdated', updatedMessage);
  }

  @SubscribeMessage('deleteMessage')
  async handleMessageDeletion(client: Socket, messageId: number): Promise<void>
  {
    console.log(`Delete message request from client ${client.id}: ${messageId}`);
    await this.messageService.deleteMessage(messageId);
    this.server.emit('messageDeleted', messageId);
  }
}
