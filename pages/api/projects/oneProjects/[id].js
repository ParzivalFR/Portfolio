import Project from "@/models/projects.models";

export default async (req, res) => {
  if (req.method === "GET") {
    const { id: projectId } = req.query;

    try {
      const project = await Project.findOne({ _id: projectId });

      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }

      return res.status(200).json(project);
    } catch (error) {
      console.error("Error finding project:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
