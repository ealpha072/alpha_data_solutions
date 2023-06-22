import express from "express"
import User from "../models/users.js"

const appRoute = express.Router()

appRoute.get("/", (req, res) => {
    res.send("Hello World")
})

appRoute.post("/signup", (req, res) => {
    //console.log(req.body)
    const {email, password} = req.body
    try {
        res.status(201).json({message:"Message recived"})
    } catch (error) {
        console.log(error.message)
    }
})

export default appRoute