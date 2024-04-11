import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Pod } from './entities/pod.entity';
import { Message } from './entities/message.entity';
import { PodMember } from './entities/pod-member.entity';
import { UserController } from './user/user_controllers/user.controller';
import { UserService } from './user/user_services/user.service';
import { MessageService } from './message/message_services/message.service';
import { WebsocketGateway } from './websockets/websocket/websocket.gateway';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root', // Replace with your PostgreSQL password
      database: 'RoomDB',
      entities: [User, Pod, Message, PodMember], // Add all your entity classes here
      synchronize: true, // Auto-generate database schema (useful for development, but not recommended for production)
    }),
    
    TypeOrmModule.forFeature([User,Message]),
  ],
  controllers: [AppController,UserController],
  providers: [AppService, UserService, MessageService, WebsocketGateway],
})
export class AppModule { }
