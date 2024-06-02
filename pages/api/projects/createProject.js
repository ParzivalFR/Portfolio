import { Authenticated } from "@/middlewares/auth.middlewares";
import uploadImages from "@/middlewares/multer.middlewares";
import Project from "@/models/projects.models";

const checkMethod = (handler) => {
  return (req, res) => {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }
    return handler(req, res);
  };
};

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const {
    userId,
    title,
    categories,
    cover,
    images,
    shortDescription,
    description,
    year,
    skills,
    url,
  } = req.body;

  try {
    const project = new Project({
      userId,
      title,
      categories,
      cover,
      images,
      shortDescription,
      description,
      year,
      skills,
      url,
    });
    await project.save();
    return res.status(201).json({ message: "Project created!" });
  } catch (error) {
    console.error("Error creating project:", error.message);
    return res.status(400).json({ error: error.message });
  }
};

export default Authenticated(checkMethod(uploadImages(handler)));
