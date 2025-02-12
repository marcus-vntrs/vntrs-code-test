import {Router} from "express";
import {PostService} from "@domains/post";

export const postRouter = () => {
    const router = Router();
    const postService = new PostService();

    router.get('/', async (req, res) => {
        try {
            const posts = await postService.findAll();
            res.status(200).send(posts);
        } catch (e) {
            res.status(400).send(e.message);
        }
    });

    return router;
}
