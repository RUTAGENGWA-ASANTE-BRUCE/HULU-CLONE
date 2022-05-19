import Mongoose from "mongoose";

const mysterySchema = new Mongoose.Schema({
    imgUrl: String,
    imgDetails: String,
    imgTitle: String,
    imgLikes: String,
})

export default Mongoose.model("mysteries", mysterySchema)