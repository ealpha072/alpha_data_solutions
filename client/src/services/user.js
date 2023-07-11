import axios from "axios"
const baseUrl = "http://localhost:5000/user"

const signUp = async (data) => {
    const request = axios.post(`${baseUrl}/signup`, data)
    const response = await request
    return response.data
}

const login = async (data) => {
    const request = axios.post(`${baseUrl}/login`, data)
    const response = await request
    return response.data
}

const getData = async (data) => {
    const request = await axios.post(`${baseUrl}/dataFetch`, data)
    const resp = await request
    return resp
}

const userService = {signUp, login, getData}

export default userService