import { http } from "../../http/http";

export const LoginRepository ={
       async createLoginSession(url,data){
        try {
            const res =  await http.post(url,data)
            return res;
        } catch (error) {
            return error;
        }
    }
}