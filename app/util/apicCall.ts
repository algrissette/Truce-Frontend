import axios from "axios";


export const api = axios.create({
    baseURL: "https://truce-backend-production.up.railway.app",
    withCredentials: true,
})
