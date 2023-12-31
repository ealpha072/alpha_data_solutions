import express from "express"
import config from "./utils/config.js"
import mongoose from "mongoose";
import cors from "cors"
import logger from "./utils/logger.js";
import middleware from "./utils/middleware.js";
import appRoute from "./routes/route.js";

const app = express()
app.use(cors())

const PORT = config.PORT
const URL = config.URL
logger.info(`Attempting connection to: ${URL}`)

mongoose.set("strictQuery", true)

mongoose
.connect(URL)
.then(()=>{
    logger.info(`Connected to database`)
    app.listen(PORT, ()=>{
        logger.info(`Server listening on port ${PORT}`)
    })
})
.catch((error) => {
    logger.error(error.message)
})

app.use(express.json())

//middleware
app.use(middleware.requestLogger)
app.use("/user", appRoute)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)