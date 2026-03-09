import axios from "axios";


export const api = axios.create({
    baseURL: "http://truce-backend.railway.internal",
    withCredentials: true,
})
