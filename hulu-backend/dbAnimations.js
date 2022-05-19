import Mongoose from "mongoose";

const animationSchema = new Mongoose.Schema({
    imgUrl: String,
    imgDetails: String,
    imgTitle: String,
    imgLikes: String,
})

export default Mongoose.model("animations", animationSchema)