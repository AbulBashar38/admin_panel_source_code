import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const instance = axios.create({
  // your url
  baseURL: "https://my-date-jar-p2-36562.uk.r.appspot.com",
});

// Set the AUTH token for any request
instance.interceptors.request.use(function (config) {
  const token = cookies.get("token");

  if (token) {
    config.headers.Authorization = token ? `Bearer ${token}` : "";
  }
  return config;
});

export default instance;
