import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  favourites: { type: Array, default: [] },
})

export default mongoose.models.User || mongoose.model("User", userSchema)
