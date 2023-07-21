import mongoose from "mongoose";

const Product = mongoose.Schema({
    name: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    }
})

export default mongoose.model("Products", Product);