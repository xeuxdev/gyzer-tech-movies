import express from "express"
import cors from "cors"
import "dotenv/config"

import dbConnect from "./config/dbConnect.js"
import UserModel from "./models/user.model.js"

const app = express()
const port = 3000

app.use(cors())

app.use(express.json())

app.get("/", (req, res) => res.send("Welcome to gyzer tech!"))

app.get("/api/:userId/favourites", async (req, res) => {
  await dbConnect()

  const user = await UserModel.findOne({
    userId: req.params.userId,
  })

  if (!user) {
    return res.json({ status: 400, movies: [] })
  }

  return res.json({ status: 200, movies: user.favourites })
})

app.post("/api/favourites", async (req, res) => {
  const { userId, movie } = req.body

  await dbConnect()

  const user = await UserModel.findOne({ userId: userId })

  if (!user) {
    const newUser = await UserModel.create({
      userId: userId,
      favourites: [movie],
    })

    if (newUser) {
      return res.json({ status: 200, message: "Movie added to facourites" })
    } else {
      return res.json({
        status: 500,
        message: "failed to add movie to favourites",
      })
    }
  } else {
    const doesFavourtieExist = await UserModel.findOne({
      favourites: { $elemMatch: { id: movie.id } },
    })

    if (doesFavourtieExist) {
      return res.json({ status: 400, message: "Movie already in favourites" })
    }
    const updatedUser = await UserModel.findOneAndUpdate(
      { userId: userId },
      {
        $push: { favourites: movie },
      },
      { new: true }
    )

    if (updatedUser) {
      return res.json({ status: 200, message: "Movie added to facourites" })
    } else {
      return res.json({
        status: 500,
        message: "failed to add movie to favourites",
      })
    }
  }
})

app.put("/api/:userId/favourites/:movieId", async (req, res) => {
  await dbConnect()

  const { userId, movieId } = req.params

  const user = await UserModel.findOne({ userId: userId })

  if (!user) {
    return res.json({ status: 400, message: "User not found" })
  }

  const deleteFavouriteMovie = await UserModel.updateOne(
    { userId: userId },
    { $pull: { favourites: { id: movieId } } }
  )

  console.log(deleteFavouriteMovie)

  if (deleteFavouriteMovie) {
    return res.json({ status: 200, message: "Movie deleted from favourites" })
  } else {
    return res.json({
      status: 500,
      message: "Failed to delete movie from favourites",
    })
  }
})

app.listen(port, () => console.log(` app listening on port ${port}!`))
