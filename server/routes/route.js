import express from "express"
import dotenv from "dotenv"
dotenv.config({path: "./.env"})
import axios from 'axios'
import logger from "../utils/logger.js"
import bcrypt from "bcrypt"
import User from "../models/users.js"
import { randomBytes } from "crypto"

const API_KEY = process.env.SECRET_KEY
const appRoute = express.Router()

const generateRandomString = () => {
    const randomNum = randomBytes(20);
    const randomString = randomNum.toString('hex');
    return randomString;
};


appRoute.get("/", (req, res) => {
    res.send("Hello World")
})

appRoute.post("/signup", async (req, res, next) => {
    //console.log(req.body)
    const {email, password} = req.body
    try {
        //see if user allready exists
        const user = await User.findOne({email:email})

        if(!user){
            //salting of password
            const saltRounds = 10
            const passwordHash = await bcrypt.hash(password, saltRounds)
            const newUser = new User({email, passwordHash})
            const savedUser = await newUser.save()
            res.status(201).json({message:"User registered successfully", user:savedUser})
        }else{
            res.status(400).json({message:"Email already taken"})
        }
    } catch (error) {
        logger.error(error.message)
        next(error)
    }
})

appRoute.post('/login', async (req, res, next) => {
    const {email, password} = req.body
    //look for user
    try {
        const findUser = await User.findOne({email: email})
        let passwordMatch = findUser === null ? false : await bcrypt.compare(password, findUser.passwordHash)

        if(!(findUser && passwordMatch )){
            res.status(400).json({message:"Invalid email or password please try again"})
        }else{
            const randomToken = generateRandomString()
            console.log(randomToken)
            res.status(200).json({message: "Login successfull", user:findUser, token:randomToken})
        }
    } catch (error) {
        logger.error(error.message)
        next(error)
    }

})

appRoute.get('/uncomtrade', async(req, res, next) => {
    const request = await axios.get('https://wits.worldbank.org/trade/comtrade/en/country/ALL/year/2021/tradeflow/Exports/partner/WLD/product/040120')
    const resp = await request
})


export default appRoute