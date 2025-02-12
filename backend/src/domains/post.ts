import {IPost} from "@entities/post";
import {posts} from "@root/data/posts";

export interface IPostService {
    findAll: () => Promise<IPost[]>;
}

export class PostService implements IPostService {
    constructor(

    ) {}

    async findAll(): Promise<IPost[]> {
        return posts;
    }
}
