import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Pod } from "./pod.entity";

@Entity()
export class Message
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    content: string;

    @ManyToOne(() => User, user => user.messages)
    sender: User;

    @ManyToOne(() => Pod, pod => pod.messages)
    pod: Pod;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    timestamp: Date;
}