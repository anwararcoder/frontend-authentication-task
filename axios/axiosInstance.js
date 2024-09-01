import { storage } from "@/utils/LocalStorage";
import axios from "axios";


const TOKEN_AUTH = storage.get("token");

export const AxiosAPI = axios.create({
  baseURL: process.env.BASE_API,
});

AxiosAPI.defaults.headers.common["Authorization"] = `Bearer ${TOKEN_AUTH}`;