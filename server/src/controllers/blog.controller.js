import Blog from "../models/blog.schema.js";

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const publishAd = async (req, res) => {
  console.log(req);
  try {
    const {
      category,
      image,
      title,
      marque,
      modele,
      desc,
      livraison,
      ville,
      prixVente,
      prixAchat,
      etat,
      anneeAchat,
    } = req.body;
    const blog = await Blog.create({
      category,
      image,
      author: req.user._id, // récupéré via middleware
      title,
      marque,
      modele,
      desc,
      livraison,
      ville,
      prixVente,
      prixAchat,
      etat,
      anneeAchat,
    });

    res.status(201).json(blog);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};
