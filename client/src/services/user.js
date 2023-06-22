import axios from "axios"
const baseUrl = "http://localhost:5000/app"

const signUp = async () => {
    const request = axios.get(`${baseUrl}/signup`)
    const response = await request
    return response.data
}

const login = async () => {
    const request = axios.get(`${baseUrl}/login`)
    const response = await request
    return response.data
}

const userService = {signUp, login}

export default userService