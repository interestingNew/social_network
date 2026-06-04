import axios from "axios";

export const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true,
   headers: {
      'API-KEY': '569a9845-83fa-42f4-b2bd-1478d35186f6'
   }
})