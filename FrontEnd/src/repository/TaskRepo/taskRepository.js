import { http } from "../../http/http";

export const taskRepository ={
       async getAllTasks(url){
        try {
            const res =  await http.get(url)
            return res;
        } catch (error) {
            return error;
        }
    },
    async updateTask (id,data){
          try {
            const res = await http.patch(`tasks/${id}`,data)
            return res;
          } catch (error) {
            return error;
          }
    }
}