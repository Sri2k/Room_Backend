import { Controller, Get, Post, Body, Param, Put, Delete, HttpCode, HttpStatus, NotFoundException } from '@nestjs/common';
import { UserService } from '../user_services/user.service';
import { CreateUserDto } from '../user_dto/create-user.dto';
import { User } from 'src/entities/user.entity';
import { UpdateUserDto } from '../user_dto/update-user.dto';

@Controller('users')
export class UserController
{
    constructor(private readonly userService: UserService) { }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<User>
    {
        return this.userService.createUser(createUserDto);
    }

    @Get()
    async findAllUsers(): Promise<User[]>
    {
        return this.userService.findAllUsers();
    }

    @Get(':id')
    async findUserById(@Param('id') id: string): Promise<User>
    {
        const user = await this.userService.findUserById(Number(id));
        if (!user)
        {
            throw new NotFoundException('User not found');
        }
        return user;
    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User>
    {
        return this.userService.updateUser(Number(id), updateUserDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async deleteUser(@Param('id') id: string): Promise<void>
    {
        await this.userService.deleteUser(Number(id));
    }
}
