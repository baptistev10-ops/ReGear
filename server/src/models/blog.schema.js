import mongoose, { Schema } from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, minLength: 3 },
    content: { type: String, required: true, minLength: 10 },
    image: { type: String, default: null },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamp: true,
  }
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
