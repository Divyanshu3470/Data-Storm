import User from "../models/User.js";

export const createUser = async (req, res) => {
  const user = await User.create(req.body);

  res.json(user);
};

export const getUsers = async (req, res) => {
  const users = await User.find();

  res.json(users);
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};