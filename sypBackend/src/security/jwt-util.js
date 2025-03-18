import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

//Admin Status is included when generating token
const generateToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
    isAdmin: user.isAdmin, 
  };

  const options = {
    expiresIn: process.env.JWT_EXPIRES_IN || "1d", 
  };

  return jwt.sign(payload, process.env.JWT_SECRET, options);
};

export { generateToken };
