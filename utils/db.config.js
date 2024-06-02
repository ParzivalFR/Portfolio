import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    return;
  } else {
    try {
      mongoose.connect(process.env.MONGODB_URI);
      console.log("✅ Connexion à la base de données MongoDB réussie !");
    } catch (error) {
      console.error("Erreur de connexion à la base de données:", error.message);
      throw new Error("Erreur de connexion à la base de données");
    }
  }
};

module.exports = connectDB;
