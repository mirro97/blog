import axios from "axios";

const req = axios.create({
  baseURL: "https://open.api.nexon.com",
  headers: {
    "x-nxopen-api-key": process.env.NEXT_PUBLIC_NEXON_API_KEY,
  },
});

axios.interceptors.request.use((config) => {
  return config;
});

axios.interceptors.response.use(
  (res) => res,
  (error) => {
    return Promise.reject(error);
  }
);

export default req;
