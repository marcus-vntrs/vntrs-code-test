import {Router} from "express";
import {UserService} from "@domains/user";

export const userRouter = () => {
    const router = Router();
    const userService = new UserService();

    router.get('/', async (req, res) => {
        try {
            const users = await userService.findAll();
            res.status(200).send(users);
        } catch (e) {
            res.status(400).send(e.message);
        }
    });

    return router;
}
