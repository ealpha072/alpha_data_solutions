import express from "express"
import bcrypt from "bcrypt"
import User from "../models/users.js"

const appRoute = express.Router()

appRoute.get("/", (req, res) => {
    res.send("Hello World")
})

appRoute.post("/signup", async (req, res, next) => {
    //console.log(req.body)
    const {email, password} = req.body
    try {
        //see if user allready exists
        const user = User.findOne({email:email})

        if(!user){
            //salting of password
            const saltRounds = 10
            const passHash = await bcrypt.hash(saltRounds, password)
            const newUser = new User({email, passHash})
            const savedUser = await newUser.save()
            res.status(201).json(savedUser)
        }else{
            res.status(400).json({message:"Email already taken"})
        }
    } catch (error) {
        console.log(error.message)
        next(error)
    }
})


export default appRoute