// pod.entity.ts

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Message } from './message.entity';
import { PodMember } from './pod-member.entity';

@Entity()
export class Pod
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    name: string;

    @OneToMany(() => Message, message => message.pod)
    messages: Message[];

    @OneToMany(() => PodMember, podMember => podMember.pod)
    podMembers: PodMember[];
}




















// import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
// import { Message } from "./message.entity";
// import { PodMember } from "./pod-member.entity";

// @Entity()
// export class Pod
// {
//     @PrimaryGeneratedColumn()
//     id: number;

//     @Column({ length: 255 })
//     name: string;

//     @OneToMany(() => Message, message => message.pod)
//     messages: Message[];

//     @OneToMany(() => PodMember, podMember => podMember.pod)
//     podMembers: PodMember[];

// }