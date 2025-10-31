import axios from "axios";
import { API_URL } from "@/app/config/api-config";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
