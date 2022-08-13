import express from "express";
import {
  registerUser,
  getUsers,
  login,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", (_, res) => {
  res.status(200).json({ msg: "Node API" });
});

router.get("/users", getUsers);

router.post("/auth/register", registerUser);

router.post("/auth/login", login);

export default router;
