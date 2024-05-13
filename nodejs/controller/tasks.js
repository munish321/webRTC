import { Task } from "../model/Task.js"
import bcrypt from 'bcrypt'
export const getAllTasks = async(req,res)=>{
   const task = await Task.find()
   res.status(200).json(task)
}
export const getTask = async(req,res)=>{
   try {
      const task = await Task.findById(req.params.id)
   if(!task){
      res.status(404)
      throw new Error('Item do not exist')
   }
   res.status(200).json(task)
   } catch (error) {
      res.status(500).json({msg:error})
   }
   
}
export const updateTask = async(req,res)=>{
   if(!req.body){
      res.status(400)
      throw new Error('fields are not present')
   }
   const {name,completed} = req.body
   const data = {
      name:name,
      completed:completed
   }
   const task = await Task.findByIdAndUpdate(req.params.id,data,{new:true})
   res.status(200).json(task)
}
export const removeTask =async (req,res)=>{
   const task =await Task.findByIdAndDelete(req.params.id)
   if(!task){
      res.status(404)
      throw new Error('Item does not exist')
   }
   res.status(200).json({message:`Deleted Successfully }`})
}
export const createTask = async(req,res)=>{
   const {name,completed}= req.body
   const task = await Task.create({name,completed})
   task.save()
   res.status(201).json({message:'Saved Task successfuly'})
}


