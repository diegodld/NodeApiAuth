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
  res.status(200).json({ msg: "Node API" });
});

router.get("/users", getUsers);

router.get("/user/:id", checkToken, UserContent);

router.post("/auth/register", registerUser);

router.post("/auth/login", login);

export default router;
