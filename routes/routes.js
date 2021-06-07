import express from "express"
import { PostSchema } from "../models/Post.js";
import {SubscriberSchema} from "../models/Subscribers.js";
const router = express.Router()

router.get("/posts", async (req, res) => {
    const posts = await PostSchema.find()
    res.send(posts)
})

router.post("/posts", async (req, res) => {
    const post = new PostSchema(req.body)
    await post.save()
    await res.send(post)
})

router.get("/subscribers", async (req, res) => {
    const subscriber = await SubscriberSchema.find()
    res.send(subscriber)
})

router.post("/subscribers", async (req, res) => {
    const subscriber = new SubscriberSchema(req.body)
    await subscriber.save()
    await res.send(subscriber)
})



export default router