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

const getUn = async () => {
    const request = await axios.get(`https://comtradeapi.un.org/public/v1/preview/C/A/HS?reporterCode=404&period=2021&partnerCode=840&cmdCode=040120&flowCode=M`)
    const resp = await request
    console.log(resp)
}

const userService = {signUp, login, getUn}

export default userService