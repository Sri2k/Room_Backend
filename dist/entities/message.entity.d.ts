import { User } from "./user.entity";
import { Pod } from "./pod.entity";
export declare class Message {
    id: number;
    content: string;
    sender: User;
    pod: Pod;
    timestamp: Date;
}
