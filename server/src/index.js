import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import routes from "./routes/index.js";
import { connectDB } from "./lib/db.js";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cookieParser());

// ✅ CORS sécurisé et compatible Safari iOS
app.use(
  cors({
    origin: process.env.DEPLOY_FRONT_URL, // ton site Netlify (ex: https://regear.netlify.app)
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // 🔥 Indispensable pour les cookies
  })
);

// ✅ Ajout d’en-têtes CORS explicites pour Render
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.DEPLOY_FRONT_URL);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`✅ Serveur ReGear actif sur le port ${PORT}`);
  connectDB();
});
