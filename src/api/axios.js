import axios from "axios";
import { baseUrl } from "./urls";


export const instance = axios.create({
    baseURL: baseUrl
  });