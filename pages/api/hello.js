const connectDB = require("@/utils/db.config");

export default async (req, res) => {
  try {
    await connectDB();
    res.status(200).json({ message: "Connexion à MongoDB réussie" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur de connexion à MongoDB", error: error.message });
  }
};
