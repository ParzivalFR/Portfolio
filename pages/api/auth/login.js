import User from "@/models/users.models";
import connectDB from "@/utils/db.config";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async (req, res) => {
  await connectDB();
  console.log("Connected to database"); // Log database connection

  if (req.method === "POST") {
    try {
      const { email, password } = req.body;
      console.log("Request body:", req.body); // Log request body

      const user = await User.findOne({ email });
      if (!user) {
        console.log("User not found"); // Log user not found
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        console.log("Invalid password"); // Log invalid password
        return res
          .status(401)
          .json({ error: "Identifiant et/ou Mot de passe incorrect !" });
      }

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });

      console.log("User authenticated, token generated"); // Log successful authentication
      res.status(200).json({
        userId: user._id,
        token,
      });
    } catch (error) {
      console.error("Error during authentication:", error); // Log error details
      res
        .status(500)
        .json({ error: "Erreur lors de la connexion de l'utilisateur" });
    }
  } else {
    res.status(405).json({ message: "Méthode non autorisée" });
  }
};
