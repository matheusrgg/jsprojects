import { Router } from "express";
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

router.use(ensureAdmin)
router.post("/users", ensureAdmin, createUserController.handle);
router.post("/tags", createTagController.handle);

export { router }