import axios from "axios"
const baseUrl = "http://localhost:5000/user"

const signUp = async (data) => {
    const request = axios.post(`${baseUrl}/signup`, data)
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