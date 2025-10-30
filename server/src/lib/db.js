import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ Connexion ${connect.connection.host} OK !`);
  } catch (error) {
    console.log("❌ Connexion échouée", error);
  }
};
