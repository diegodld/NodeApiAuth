import User from "../models/User.js";
import bcrypt, { hash } from "bcrypt";

class UserController {
  name;
  email;
  password;

  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  async CreateUser() {
    const userExists = await User.findOne({ email: this.email });

    if (userExists) {
      throw "O Email já existe!";
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(this.password, salt);

    //Cadastro no banco de dados
    const user = new User({
      name: this.name,
      email: this.email,
      password: passwordHash,
    });

    try {
      await user.save();
      return true;
    } catch (error) {
      throw error;
    }
  }

  static async findAll() {
    try {
      const users = await User.find();
      return users;
    } catch (error) {
      throw error;
    }
  }
}

async function registerUser(req, res) {
  const { name, email, password, confirmPassword } = req.body;

  if (!name || !email || !password || !confirmPassword) {
    return res.status(403).json({ msg: "Todos os campos são obrigatórios!" });
  }

  if (password != confirmPassword) {
    return res.status(403).json({ msg: "As senhas precisam ser iguais! " });
  }

  const user = new UserController(name, email, password);

  try {
    await user.CreateUser();
    return res.status(201).json({ msg: "Usuário criado com sucesso!" });
  } catch (error) {
    return res.status(400).json({ msg: `Erro: ${error}` });
  }
}

async function getUsers(req, res) {
  try {
    const users = await UserController.findAll();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json({ msg: `Erro: ${error}` });
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: "Preencha todos os campos!" });
  }
  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(404).json({ msg: "Usuário não encontrado" });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(404).json({ msg: "Senha inválida!" });
  }

  return res.status(200).json({ msg: "Logado!" });
}

export { registerUser, getUsers, login };
