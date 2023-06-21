import logger from "./logger.js";

const requestLogger = (req, res, next) => {
    logger.info("Method: ", req.method)
    logger.info("Path: ", req.path)
    logger.info("Body: ", req.body)
    logger.info("------------------")

    next()
}

const errorHandler = (error, req, res, next) => {
    logger.error(error.message)
    next(error)
}

const unknownEndpoint = (req, res) => {
    res.status(400).json({error:"Unknown endpoint"})
}

export default {requestLogger, errorHandler, unknownEndpoint}