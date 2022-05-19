import Mongoose from "mongoose";

const horrorSchema = new Mongoose.Schema({
    imgurl: String,
    imgDetails: String,
    imgTitle: String,
    imgLikes: String,
})

export default Mongoose.model("horrors", horrorSchema)