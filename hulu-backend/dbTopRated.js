import Mongoose from "mongoose";

const topRatedSchema = new Mongoose.Schema({
    imgUrl: String,
    imgDetails: String,
    imgTitle: String,
    imgLikes: String,
})

export default Mongoose.model("toprated", topRatedSchema)