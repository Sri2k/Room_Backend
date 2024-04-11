import { Message } from "./message.entity";
import { PodMember } from "./pod-member.entity";
export declare class Pod {
    id: number;
    name: string;
    messages: Message[];
    podMembers: PodMember[];
}
