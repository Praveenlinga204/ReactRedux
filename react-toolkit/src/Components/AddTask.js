import React, { useState } from 'react'
import  Button  from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap'



function AddTask() {
     const [title,setTitle] = useState('')
     const [desc,setDesc] =useState('')

     const Addtask = (e)=>{
             e.preventDefault()
             console.log({title,desc})
     }

    return (
        <div>
            <section className='my-3'>
             <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Task Title</Form.Label>
        <Form.Control type="text" placeholder="enter-task" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Task Description</Form.Label>
        <Form.Control type="text" placeholder='Enter Task Desc' value={desc} onChange={(e)=>{setDesc(e.target.value)}} />
      </Form.Group>

     <div className="text-end">
     <Button variant='primary' type='submit' onClick={(e)=> Addtask(e)}>
        Add Task
      </Button>
     </div>
    </Form>
    </section>
        </div>
    )
   
}


export default AddTask
