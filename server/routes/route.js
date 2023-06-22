import express from "express"
import User from "../models/users.js"

const appRoute = express.Router()

appRoute.get("/", (req, res) => {
    res.send("Hello World")
})

appRoute.get("/users", (req, res) => {

})

export default appRoute