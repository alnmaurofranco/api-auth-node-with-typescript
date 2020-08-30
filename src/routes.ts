import { Router } from "express";

import authMiddleware from "./app/middlewares/authMiddleware";

import UserController from "./app/controllers/UsersControllers";
import AuthController from "./app/controllers/AuthController";

const router = Router();

router.get("/", (request, response) => {
  return response.send("Bem-vindo a minha API 🚀");
});

router.post("/users", UserController.store);
router.post("/auth", AuthController.authenticate);
router.get("/users", authMiddleware, UserController.index);

export default router;
