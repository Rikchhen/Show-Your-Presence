import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

console.log("Cloudinary Config Loaded:", {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY ? "Loaded" : "Missing",
  api_secret: process.env.CLOUDINARY_API_SECRET ? "Loaded" : "Missing",
});


const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
  console.error("Cloudinary environment variables are missing!");
  process.exit(1);
}

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

export default cloudinary;
