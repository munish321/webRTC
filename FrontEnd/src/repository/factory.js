import { LoginRepository } from "./loginRepo/LoginRepository";
import { taskRepository } from "./TaskRepo/taskRepository";
const repositories = {
    login:LoginRepository,
    task:taskRepository
}

export const factory ={
   get: (name)=> repositories[name]
}