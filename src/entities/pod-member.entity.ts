import { Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./user.entity";
import { Pod } from "./pod.entity";

@Entity()
export class PodMember
{
    @PrimaryColumn()
    userId: number;

    @PrimaryColumn()
    podId: number;

    @ManyToOne(() => User, user => user.podMembers)
    user: User;

    @ManyToOne(() => Pod, pod => pod.podMembers)
    pod: Pod;
}