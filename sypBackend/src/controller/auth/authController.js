import { User } from "../../model/index.js";
import { generateToken } from "../../security/jwt-util.js";
import bcrypt from "bcryptjs";

/**
 * User Login
 */
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password are required" });
    }

    // Find user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Compare hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Incorrect password" });
    }

    // Generating token on login 
    const token = generateToken({ 
      id: user.id, 
      email: user.email, 
      isAdmin: user.isAdmin //admin status yeha defined
    });

    return res.status(200).json({
      success: true,
      access_token: token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin 
      },
      message: "Successfully logged in",
    });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ success: false, message: "Failed to login" });
  }
};

/**
 * Fetch Current User
 */
const init = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const user = await User.findByPk(req.user.id, {
      attributes: ["id", "username", "email", "isAdmin"]
    });

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    return res.status(200).json({ 
      success: true,
      user, 
      message: "Successfully fetched current user" 
    });
  } catch (error) {
    console.error("Fetch User Error:", error);
    return res.status(500).json({ success: false, message: "Failed to fetch user" });
  }
};

export const authController = { login, init };
