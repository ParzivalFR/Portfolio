import cloudinary from "cloudinary";
import fs from "fs";
import multer from "multer";
import { promisify } from "util";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const unlinkAsync = promisify(fs.unlink);

const upload = multer({ dest: "uploads/" });

const uploadImages = (handler) => {
  return async (req, res) => {
    try {
      await new Promise((resolve, reject) => {
        upload.fields([
          { name: "cover", maxCount: 1 },
          { name: "images", maxCount: 15 },
        ])(req, res, (err) => {
          if (err instanceof multer.MulterError || err) {
            console.error("Multer error:", err);
            reject(err);
          } else {
            resolve();
          }
        });
      });

      // Check for the presence of required files
      if (!req.files["cover"]) {
        if (req.files["images"]) {
          await Promise.all(
            req.files["images"].map((file) => unlinkAsync(file.path))
          );
        }
        return res.status(400).json({ error: "Missing cover" });
      }

      if (!req.files["images"]) {
        if (req.files["cover"]) {
          await unlinkAsync(req.files["cover"][0].path);
        }
        return res.status(400).json({ error: "Missing images" });
      }

      const uploadFile = async (file) => {
        const result = await cloudinary.v2.uploader.upload(file.path, {
          transformation: [{ quality: "auto" }, { format: "webp" }],
        });
        await unlinkAsync(file.path);
        return result.secure_url;
      };

      req.body.cover = await uploadFile(req.files["cover"][0]);
      req.body.images = await Promise.all(
        req.files["images"].map((file) => uploadFile(file))
      );

      // Call the next handler
      return handler(req, res);
    } catch (error) {
      console.error("Error processing upload:", error);
      return res.status(500).json({ error: error.message });
    }
  };
};

export default uploadImages;
