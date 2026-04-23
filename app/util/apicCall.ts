import axios from "axios";

/*railway code
export const api = axios.create({
    baseURL: "https://truce-backend-production.up.railway.app",
    withCredentials: true,
})
 


export const api = axios.create({
    baseURL: "https://trucelofficiel.shop:4000",
    withCredentials: true,
})

   */
export const api = axios.create({
    baseURL: "/api",
    withCredentials: true,
})
