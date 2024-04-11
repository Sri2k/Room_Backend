// src/user/user.service.ts

import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
import { CreateUserDto } from '../user_dto/create-user.dto';
import { UpdateUserDto } from '../user_dto/update-user.dto';

@Injectable()
export class UserService
{
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    // v1
    // async createUser(userDto: CreateUserDto): Promise<User>
    // {
    //     const user = this.userRepository.create(userDto);
    //     return await this.userRepository.save(user);
    // }


    async createUser(userDto: CreateUserDto): Promise<User>
    {
        const { username, email } = userDto;

        // Check if username is already in use
        const existingUsername = await this.userRepository.findOne({ where: { username } });
        if (existingUsername)
        {
            throw new ConflictException('Username is already in use');
        }

        // Check if email is already in use
        const existingEmail = await this.userRepository.findOne({ where: { email } });
        if (existingEmail)
        {
            throw new ConflictException('Email is already in use');
        }

        const user = this.userRepository.create(userDto);
        return await this.userRepository.save(user);
    }

    async findAllUsers(): Promise<User[]>
    {
        return await this.userRepository.find();
    }

    async findUserById(id: number): Promise<User>
    {
        const user = await this.userRepository.findOneBy({ id: id });
        if (!user)
        {
            throw new NotFoundException('User not found');
        }
        return user;
    }

    async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User>
    {
        const user = await this.userRepository.findOneBy({ id: id });
        if (!user)
        {
            throw new NotFoundException('User not found');
        }
        Object.assign(user, updateUserDto);
        return await this.userRepository.save(user);
    }

    async deleteUser(id: number): Promise<void>
    {
        const user = await this.userRepository.findOneBy({ id: id });
        if (!user)
        {
            throw new NotFoundException('User not found');
        }
        await this.userRepository.delete(id);
    }
}
