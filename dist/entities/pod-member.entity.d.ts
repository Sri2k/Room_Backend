import { User } from "./user.entity";
import { Pod } from "./pod.entity";
export declare class PodMember {
    userId: number;
    podId: number;
    user: User;
    pod: Pod;
}
