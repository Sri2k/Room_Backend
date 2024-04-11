// user.entity.ts

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Message } from './message.entity';
import { PodMember } from './pod-member.entity';

@Entity()
export class User
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    username: string;

    @Column({ length: 255 })
    email: string;

    @Column({ length: 255 })
    password: string;

    @OneToMany(() => Message, message => message.sender)
    messages: Message[];

    @OneToMany(() => PodMember, podMember => podMember.user)
    podMembers: PodMember[];
}















// import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
// import { Message } from "./message.entity";
// import { PodMember } from "./pod-member.entity";

// @Entity()
// export class User
// {
//     @PrimaryGeneratedColumn()
//     id: number;

//     @Column({ length: 255 })
//     username: string;

//     @Column({ length: 255 })
//     email: string;

//     @Column({ length: 255 })
//     password: string;

//     @OneToMany(() => Message, message => message.sender)
//     messages: Message[]; // Define the messages property here

//     @OneToMany(() => PodMember, podMember => podMember.user)
//     podMembers: PodMember[];
// }