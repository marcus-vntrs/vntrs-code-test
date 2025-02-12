import {IUser} from "@entities/user";
import {users} from "@root/data/users";

export interface  IUserService {
    findAll: () => Promise<IUser[]>;
}

export class UserService implements IUserService {
    constructor(

    ) {}

    async findAll(): Promise<IUser[]> {
        return users;
    }
}
