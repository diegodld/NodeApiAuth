import mongoose from "mongoose";

const db = process.env.DATABASE_URL;

mongoose
  .connect(db)
  .then(() => console.log("Banco de dados conectado!"))
  .catch((err) => console.log(err));

export default mongoose;
