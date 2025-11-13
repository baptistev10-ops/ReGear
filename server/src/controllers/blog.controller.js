import Blog from "../models/blog.schema.js";

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find()
      .populate("author", "username")
      .sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const publishAd = async (req, res) => {
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
      author: req.user._id,
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
    console.log("test");
    res.status(201).json(blog);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id).populate("author", "username");
    return res.status(200).json(blog);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getUserBlogCount = async (req, res) => {
  try {
    const { id } = req.params;

    const count = await Blog.countDocuments({ author: id });

    return res.status(200).json({ count });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
