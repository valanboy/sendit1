import axios from "axios"

// const BASE_URL = "http://localhost:4000/api/v1"
 const BASE_URL =  import.meta.env.backendApiUrl

export const publicRequest = axios.create({
    baseURL: BASE_URL
})