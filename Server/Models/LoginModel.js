import mongoose from "mongoose";

const Login = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

export default mongoose.model("login", Login);