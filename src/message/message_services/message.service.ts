// message.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from 'src/entities/message.entity';
import { Repository } from 'typeorm';
import { CreateMessageDto } from '../message_dto/create-message.dto';


@Injectable()
export class MessageService
{
    constructor(
        @InjectRepository(Message)
        private readonly messageRepository: Repository<Message>,
    ) { }

    async createMessage(createMessageDto: CreateMessageDto): Promise<Message>
    {
        const message = this.messageRepository.create(createMessageDto);
        return this.messageRepository.save(message);
    }

    async getAllMessages(): Promise<Message[]>
    {
        return this.messageRepository.find();
    }

    async getMessageById(id: number): Promise<Message>
    {
        const message = await this.messageRepository.findOneBy({
            id:id
        });
        if (!message)
        {
            throw new NotFoundException(`Message with ID ${id} not found`);
        }
        return message;
    }

    async updateMessage(id: number, updateMessageDto: CreateMessageDto): Promise<Message>
    {
        const message = await this.getMessageById(id);
        message.content = updateMessageDto.content;
        return this.messageRepository.save(message);
    }

    async deleteMessage(id: number): Promise<void>
    {
        const result = await this.messageRepository.delete(id);
        if (result.affected === 0)
        {
            throw new NotFoundException(`Message with ID ${id} not found`);
        }
    }
}
