import { Message } from "./message.entity";
import { PodMember } from "./pod-member.entity";
export declare class User {
    id: number;
    username: string;
    email: string;
    password: string;
    messages: Message[];
    podMembers: PodMember[];
}
