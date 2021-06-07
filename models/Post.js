import mongoose from  "mongoose"

const schema = new mongoose.Schema({
    title: String,
    content: String,
})


export const PostSchema = mongoose.model("Post", schema)