import React from 'react'
import { Modal } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import { Form } from 'react-bootstrap'


function UpdateTask() {
    return (
        <div>
            <Modal
    
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
        
      </Modal.Body>
      <Modal.Footer>
        <Button>Close</Button>
      </Modal.Footer>
    </Modal>
        </div>
    )
}

export default UpdateTask
