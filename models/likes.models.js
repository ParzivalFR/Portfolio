import mongoose from "mongoose";

const likeSchema = mongoose.Schema({
  userIp: { type: String, required: true },
  postId: { type: String, required: true },
});

export default mongoose.models.Like || mongoose.model("Like", likeSchema);
