import axios from 'axios';
import { errorHandler } from './httpErrorHandler'; 

export const httpClient = axios.create({
    baseURL:'http://localhost:3000/api/v1/',
    headers:{
        Authorization:'',
        "Content-Type":"application/json",
        Accept:'application/json',
    }
})

httpClient.interceptors.response.use(
    function(response){
        return response;
    },
    function(error){
       return errorHandler(error)
    }
)