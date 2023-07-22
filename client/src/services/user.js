import axios from "axios"

const baseUrl = "http://localhost:5000/user"
//const baseUrl = "https://alpha-data-solutions-backend-git-main-ealpha072.vercel.app/user"

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

const getCountryProfile = async () => {
    const request = await axios.get(`${baseUrl}/countryProfie`)
    const response = await request
    return response
}

const userService = {signUp, login, getData, getCountryProfile}

export default userService