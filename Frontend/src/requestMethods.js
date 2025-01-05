import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm'


const BASE_URL =  "https://sendit1backend.onrender.com/api/v1"
// const BASE_URL =  import.meta.env.backendApiUrl


export const publicRequest = axios.create({
    baseURL: BASE_URL
})