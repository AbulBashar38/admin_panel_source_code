import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL_LOCAL

const service = axios.create({ withCredentials: true, baseURL });
const header =
{
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
}

const errorHandler = (err) => {
    if (err.response && err.response.data) {
        console.error(err.response.data);
        throw err.response.data.message;
    }
    throw err;
};

export default {
    service,
    header,
    errorHandler,
};



export const getForum = (search, page, limit, sort, fields) => {
    return axios.get(`${baseURL}date-card/Forumlist?q=${search}&page=${page}&limit=${limit}&sort=${sort}&fields=${fields}`)
}

export const getVendorLocation = (search, page, limit) => {
    console.log("getVendorLocation", `${baseURL}vendor?q=${search}&page=${page}&limit=${limit}`)
    return axios.get(`${baseURL}vendor?q=${search}&page=${page}&limit=${limit}`)
}

export const addVendorLocation = (values) => {
    return axios.post(`${baseURL}vendor`, values)
}

export const sendNotification = (values)=>{
    return axios.post(`${baseURL}notification/`,values)
}