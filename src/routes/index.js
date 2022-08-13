import express from "express";
import {
  registerUser,
  getUsers,
  login,
  UserContent,
  checkToken,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", (_, res) => {
  const message = {
    msg: "API para cadastro e autenticação de usuários",
    Desenvolvedor: "Diego Lopes",
    Repositorio: "https://github.com/diegodld/NodeApiAuth",
  };
  res.status(200).json(message);
});

router.get("/users", getUsers);

router.get("/user/:id", checkToken, UserContent);

router.post("/auth/register", registerUser);

router.post("/auth/login", login);

export default router;
