import mongoose from "mongoose"

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) return
  // console.log(mongoose.connection.readyState)
  mongoose.connect(process.env.MONGO_URI, {
    autoIndex: true,
  })
}

export default dbConnect