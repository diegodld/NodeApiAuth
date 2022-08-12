import "dotenv/config";
import app from "./src/app.js";
import mongoose from "./src/database/mongodb.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`servidor rodando na porta ${port}`));
