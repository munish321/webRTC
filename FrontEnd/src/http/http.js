import { httpClient } from "./htttpClient";

export class http{
    static async get(url){
    return await httpClient.get(url).then(response=>{
        return response;
      }).catch(error=>{
        return error;
      })
    }
    static async post(url,data){
      return await httpClient.post(url,data).then(response=>{
            return response;
          }).catch(error=>{
            return error;
          })
    }
    static async patch(url,data){
     return  await httpClient.patch(url,data).then(response=>{
            return response;
          }).catch(error=>{
            return error;
          })
    }
    static async put(url,data){
     return await  httpClient.put(url,data).then(response=>{
            return response;
          }).catch(error=>{
            return error;
          })
    }
    static async delete(url){
    return  await  httpClient.delete(url).then(response=>{
            return response;
          }).catch(error=>{
            return error;
          })
    }

}

