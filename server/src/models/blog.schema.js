import mongoose, { Schema } from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    image: { type: [String], default: [] },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    marque: { type: String, required: true },
    modele: { type: String, required: true },
    desc: { type: String, required: true },
    livraison: { type: String, required: true },
    ville: { type: String, required: true },
    prixVente: { type: Number, default: true },
    prixAchat: { type: Number, required: null },
    etat: { type: String, required: true },
    anneeAchat: { type: String, required: null },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
