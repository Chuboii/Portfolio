import mongoose from "mongoose";

const SubscribedUsersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique:true
    }
}, { timestamps: true })

export default mongoose.model("SubscribedUsers",  SubscribedUsersSchema)