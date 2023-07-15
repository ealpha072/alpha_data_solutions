import axios from "axios"
import cheerio from "cheerio"

const request = await axios.get(`https://wits.worldbank.org/CountryProfile/en/KEN`)
const response = await request
//console.log(response.data)
const $ = cheerio.load(response.data)
const divTarget = $("#staticPageContent > div > div > div:nth-child(4) > section > div > div > div")
const scrapedData = divTarget.text();
console.log(scrapedData);
