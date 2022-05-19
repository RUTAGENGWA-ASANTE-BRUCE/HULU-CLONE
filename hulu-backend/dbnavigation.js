import Mongoose from "mongoose";

const navigationSchema = new Mongoose.Schema({
    imgUrl: String,
    imgDetails: String,
    imgTitle: String,
    imgLikes: String,

})

export default Mongoose.model("titles", navigationSchema)