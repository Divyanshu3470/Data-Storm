import Post from "../models/Post.js";

export const createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);

    res.status(201).json(post);
  } catch (err) {
    res.json(err);
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    res.json(posts);
  } catch (err) {
    res.json(err);
  }
};

export const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);

    res.json({
      message: "Post Deleted",
    });
  } catch (err) {
    res.json(err);
  }
};