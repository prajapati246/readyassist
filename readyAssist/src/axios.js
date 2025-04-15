import axios from 'axios';
export const makeRequest = axios.create({
    baseURL: "http://localhost:7700/api/",
    withCredentials: true,
});