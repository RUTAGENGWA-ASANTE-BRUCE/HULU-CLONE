import Mongoose from "mongoose";


const sciFiSchema = new Mongoose.Schema({
    imgUrl: String,
    imgDetails: String,
    imgTitle: String,
    imgLikes: String,
})
export default Mongoose.model("fictions", sciFiSchema)