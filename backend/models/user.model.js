import mongoose from "mongoose"

const movies = new mongoose.Schema({
  backdrop_path: { type: String, default: "" },
  id: { type: String, default: "" },
  overview: { type: String, default: "" },
  poster_path: { type: String, default: "" },
  title: { type: String, default: "" },
  vote_average: { type: String, default: "" },
  budget: { type: String, default: "" },
  revenue: { type: String, default: "" },
  runtime: { type: String, default: "" },
  release_date: { type: String, default: "" },
  genres: { type: Array, default: [] },
})

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  favourites: { type: [movies], default: [] },
})

export default mongoose.models.User || mongoose.model("User", userSchema)
