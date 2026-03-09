import axios from "axios";


export const api = axios.create({
    baseURL: "https://truce-backend.railway.internal",
    withCredentials: true,
})
