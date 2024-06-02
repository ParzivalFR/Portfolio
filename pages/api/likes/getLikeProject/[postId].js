import Like from "@/models/likes.models";

export default async (req, res) => {
  if (req.method === "GET") {
    try {
      const likes = await Like.find({
        postId: req.query.postId,
      });

      res.status(200).json(likes);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Une erreur est survenue: " + error.message });
    }
  }
};
