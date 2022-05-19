import Mongoose from "mongoose";

const romanceSchema = new Mongoose.Schema({
    imgUrl: String,
    imgDetails: String,
    imgTitle: String,
    imgLikes: String,
})

export default Mongoose.model("romances", romanceSchema)