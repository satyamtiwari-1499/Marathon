import axios from "axios"
 export const axiosInstance =  axios.create({
      baseURL: "https://marathon-mfsu.onrender.com/api",
    //  baseURL:"http://localhost:3000/api",
     withCredentials:true
})

