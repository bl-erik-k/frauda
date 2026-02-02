import axios from "axios";

const baseUrl = "https://loancalculator-ivory.vercel.app/api/";

export const axiosInstance = axios.create({
  baseURL: baseUrl,
});
