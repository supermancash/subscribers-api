import express from "express"
import mongoose from "mongoose"
import router from "./routes/routes.js"

const app = express()
app.use(express.json())
app.use("/api", router)

mongoose
    .connect("mongodb://localhost:27017/subscribers_db", { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.listen(5000, () => {
            console.log("Server has started!")
        })
    })