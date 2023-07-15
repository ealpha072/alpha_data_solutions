import express from "express"
import dotenv from "dotenv"
dotenv.config({path: "./.env"})
import logger from "../utils/logger.js"
import bcrypt from "bcrypt"
import User from "../models/users.js"
import countries from "../countries.js"
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

appRoute.post('/dataFetch', async(req, res, next) => {
    const {reporterCode, period, flowCode, partnerCode, cmdCode} = req.body

    let countryId = ''

    countries.results.forEach(country => {
        if(country.text === reporterCode){
            countryId = country.id
        }else{
            console.log("Not found")
            res.status(404).json({error:"Reporter not Found, please check and try again"})
        }
    })

    console.log(countryId)

    try {
        /**const request = await axios.get(`https://comtradeapi.un.org/public/v1/preview/C/A/HS?`,
            {
                params: {
                    reporterCode:parseInt(reporterCode),
                    period:parseInt(period),
                    partnerCode:parseInt(partnerCode),
                    cmdCode:parseInt(cmdCode),
                    flowCode:flowCode,
                    customsCode:"C00",
                    motCode:0,
                },
                headers: {
                    'Cache-Control': 'no-cache'
                }
        })

        const resp = await request

        if(resp.data){
            res.status(200).json({data: resp.data})
        }else{
            res.status(400).json({error: "Error fetching data, please try again"})
        }*/
    } catch (error) {
        logger.error(error.message)
        res.status(400).json(error)
        next(error)
    }
})

export default appRoute