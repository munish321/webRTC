import e from "express";
import {getAllTasks,updateTask,removeTask,createTask,getTask} from '../controller/tasks.js'
const router = e.Router()

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').patch(updateTask).delete(removeTask).get(getTask)

export default router;