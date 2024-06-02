import Like from "@/models/likes.models";

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const userIp = req.ip;
      const existingLike = await Like.findOne({
        userIp: userIp,
        postId: req.body.postId,
      });

      if (existingLike) {
        return res.status(400).json({ message: "Like déjà existant." });
      }

      const like = new Like({
        userIp: userIp,
        postId: req.body.postId,
      });

      await like.save();

      res.status(201).json(like);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Une erreur est survenue: " + error.message });
    }
  }
};
