import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    label: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: false },
    logo: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;
