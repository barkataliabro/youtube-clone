import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config()

const DBConnection = () => {
    mongoose.connect(process.env.MONGODB_URI).then(() => {
        console.log("DB Connected")
    }).catch((err) => {
        console.log(err, "====>>>>>>..   error")
    })
}
export default DBConnection
// videosharingsecondProject