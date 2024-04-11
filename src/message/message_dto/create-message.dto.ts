// create-message.dto.ts

import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMessageDto
{
    @IsNotEmpty()
    @IsString()
    content: string;
}
