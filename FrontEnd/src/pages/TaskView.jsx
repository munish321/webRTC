import {factory} from '../repository/factory'
import { useEffect, useState } from 'react'
import { Button,Form,Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';
function TaskView() {
    const [task, setTask] = useState('')
    const [name, setName] = useState('')
    const [check, setCheck] = useState(false)
    const [list,setList] = useState([])
    const [selectedListItem,setSelectedListItem] =useState({})
    const [show,setShow]=useState(false)
    const taskRepo = factory.get('task')
    const handleSaveTask=()=>{
      const newarray = [...list,{label:task}]
      setList(newarray)
      setTask('')
    }
    useEffect(()=>{
      const getDetails=async()=>{
        let res = await taskRepo.getAllTasks('tasks')
        setList(res.data)
      }
      getDetails()
    },[])
    const handleDelete=(index)=>{
      const newarray = [...list]
      newarray.splice(index,1)
      setList(newarray)
    }
    const handleEdit=(item)=>{
      debugger
      setSelectedListItem(item)
      setName(item.name)
      setCheck(item.check)
      setShow(true)
    }
    const handleKeyPress=(e)=>{
      if(e.key==='Enter'){
         e.preventDefault();
        handleSaveTask()
      }
    }
    const handleSaveClick=async()=>{
        let payload ={
          name:name,
          completed:check
        }
       let res = await taskRepo.updateTask(selectedListItem._id,payload)
       if(res.status ===200){
        let response = await taskRepo.getAllTasks('tasks')
        setList(response.data)
        setShow(false)
       }
    }
  return (
    <>
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal show={show} onHide={()=>setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <div className='field'>
          <Form.Label>Name</Form.Label>
          <Form.Control className='' type='text' value={name} onChange={(e)=>setName(e.target.value)}></Form.Control>
        </div>
          <Form.Check 
            type='checkbox'
            checked={check}
            onChange={(e)=>setCheck(e.target.checked)}
            label='Completed'
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShow(false)}>Close</Button>
          <Button variant="primary" onClick={()=>handleSaveClick()}>Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
   
    <div className='container'>
      <div className='wraper'>
      <Form.Label >Task</Form.Label>
      <div className='input-wraper'>
      <Form.Control
       type='text'
       value={task}
       onChange={(e)=>setTask(e.target.value)}
       onKeyDown={handleKeyPress}
       ></Form.Control>
      <Button variant="primary" onClick={handleSaveTask}>Primary</Button>
      </div>
      </div>
       {/* List  */}
        {
          list.length>0 &&
          <div className='list'>
          {
            list.map((item,index)=>{
             return <div className='list-wrapper' key={index}>
                <span className={`text ${item.completed===true ? 'text-decoration-line-through':''}`}>{item.name}</span>
                {/* icon set */}
                <div className='icon-set'>
                <FontAwesomeIcon className='icon' icon={faEdit} onClick={()=>handleEdit(item)}/>
                <FontAwesomeIcon className='icon' icon={faTrash} onClick={()=>handleDelete(index)}/>
                </div>
              </div>
            })
          }
          </div>
        }
    </div>
    </>
  )
}

export default TaskView