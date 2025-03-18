import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../../uploads/cloudinaryConfig.js";


// Cloudinary storage configuration
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "manga_images",
    allowed_formats: ["jpg", "jpeg", "png", "gif"], 
    public_id: (req, file) => `${Date.now()}-${file.originalname.split(".")[0]}`, 
  },
});

// File filter to allow only images
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/jpg"];
  allowedTypes.includes(file.mimetype)
    ? cb(null, true)
    : cb(new Error("Invalid file type. Only JPEG, PNG, JPG, and GIF are allowed!"), false);
};


const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
});


export default upload;
