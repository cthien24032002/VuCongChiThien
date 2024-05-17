import axios from "axios"

export const  getPrices = ()=>{
    return  axios.get('https://interview.switcheo.com/prices.json').then(data=>data.data)
}