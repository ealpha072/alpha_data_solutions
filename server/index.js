import express from "express"
import config from "./utils/config.js"
import mongoose from "mongoose";
import cors from "cors"

const app = express()
const PORT = 5000

app.get('/', (req, res)=> {
    res.send("Hello World!!")
})

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})