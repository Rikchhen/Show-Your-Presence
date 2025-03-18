import { User } from "../../model/index.js";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";

/**
 * Fetch all users (Excludes passwords)
 */
const getAll = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: { exclude: ["password"] } });
    res.status(200).json({ data: users, message: "Successfully fetched users" });
  } catch (error) {
    console.error("Fetch Users Error:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

/**
 * Create a new user
 */
const create = async (req, res) => {
  try {
    console.log("Incoming Registration Request:", req.body);

    const { username, email, password, isAdmin = false } = req.body;

    if (await User.findOne({ where: { email } })) {
      console.error("Email already in use:", email);
      return res.status(400).json({ message: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashedPassword, isAdmin });

    console.log("User Created:", user.toJSON());
    res.status(201).json({ data: user, message: "User created successfully" });
  } catch (error) {
    console.error("Create User Error:", error);
    res.status(500).json({ error: "Failed to create user" });
  }
};


/**
 * Fetch user by ID
 */
const getById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, { attributes: { exclude: ["password"] } });
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ data: user, message: "User fetched successfully" });
  } catch (error) {
    console.error("Get User Error:", error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
};

/**
 * Update user details
 */
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, username, password, isAdmin } = req.body;

    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (email) user.email = email;
    if (username) user.username = username;
    if (password) user.password = await bcrypt.hash(password, 10);
    if (isAdmin !== undefined) user.isAdmin = isAdmin; 

    await user.save();
    res.status(200).json({ data: user, message: "User updated successfully" });
  } catch (error) {
    console.error("Update User Error:", error);
    res.status(500).json({ error: "Failed to update user" });
  }
};

/**
 * Delete user by ID
 */
const deleteById = async (req, res) => {
  try {
    const deleted = await User.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Delete User Error:", error);
    res.status(500).json({ error: "Failed to delete user" });
  }
};

export const userController = { getAll, create, getById, update, deleteById };
