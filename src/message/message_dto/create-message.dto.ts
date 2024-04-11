// create-message.dto.ts

import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMessageDto
{
    @IsNotEmpty({ message: 'Content is required' })
    @IsString({ message: 'Content must be a string' })
    content: string;

    timestamp: Date;
}
