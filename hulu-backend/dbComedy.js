import Mongoose from "mongoose";


const comedySchema = new Mongoose.Schema({
    imgUrl: String,
    imgDetails: String,
    imgTitle: String,
    imgLikes: String,
})

export default Mongoose.model("comedies", comedySchema)