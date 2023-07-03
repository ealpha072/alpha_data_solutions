import axios from 'axios'

const getUn = async () => {
    const request = axios.get(`https://comtradeapi.un.org/public/v1/preview/C/A/HS?reporterCode=404&period=2021&partnerCode=840&cmdCode=040120&flowCode=M`)
    const resp = request
    console.log(resp)
}

