import { Authenticated } from "@/middlewares/auth.middlewares";
import User from "@/models/users.models";
import connectDB from "@/utils/db.config";
import bcrypt from "bcrypt";

const handle = async (req, res) => {
  await connectDB();

  if (req.method === "POST") {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = new User({
        email: req.body.email,
        password: hashedPassword,
      });
      await user.save();
      res.status(201).json({ message: "Utilisateur créé !" });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Erreur lors de la création de l'utilisateur" });
    }
  } else {
    res.status(405).json({ message: "Méthode non autorisée" });
  }
};

export default Authenticated(handle);
