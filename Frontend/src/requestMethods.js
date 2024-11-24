import axios from "axios"

const BASE_URL =  "https://sendit1backend.onrender.com/api/v1"
// const BASE_URL =  import.meta.env.backendApiUrl


export const publicRequest = axios.create({
    baseURL: BASE_URL
})