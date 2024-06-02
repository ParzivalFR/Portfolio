import Project from "@/models/projects.models";

// Get all projects
export default (req, res) => {
  if (req.method === "GET") {
    Project.find()
      .then((projects) => res.status(200).json(projects))
      .catch((error) => res.status(400).json({ error: error.message }));
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};
