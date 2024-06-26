import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from 'src/entities/message.entity';
import { CreateMessageDto } from '../message_dto/create-message.dto';
import { UpdateMessageDto } from '../message_dto/update-message.dto';
import { validateOrReject } from 'class-validator';

@Injectable()
export class MessageService
{
    constructor(
        @InjectRepository(Message)
        private readonly messageRepository: Repository<Message>,
    ) { }

    async createMessage(createMessageDto: CreateMessageDto): Promise<Message>
    {
        await validateOrReject(createMessageDto); // Validate input
        const { content, timestamp } = createMessageDto;
        const message = this.messageRepository.create({ content, timestamp });
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

    async updateMessage(id: number, updateMessageDto: UpdateMessageDto): Promise<Message>
    {
        await validateOrReject(updateMessageDto); // Validate input
        const { content } = updateMessageDto;
        const message = await this.getMessageById(id);
        message.content = content;
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
