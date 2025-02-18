import React, { useState } from 'react'
import {Button} from 'react-bootstrap'
import { Table } from 'react-bootstrap'
import UpdateTask from './UpdateTask'



function Tasklist() {

    const [modalShow,setModalShow] = useState(false)

    const upDatetask=()=>{
        console.log('Updated Successfully')
        setModalShow(true)
    }

    const deleteTask = () =>{
        console.log('Deleted Successfully')
    }

    return (<>
        <div>
            <Table striped bordered hover>
      <thead>
        <tr className='text-center'>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr className='text-center'>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <div className='d-flex gap-2 mb-2 '>
            <Button variant="primary" size='lg' className='mx-3' onClick={()=>{upDatetask()}}><i className = "bi bi-pencil-square"></i></Button>
            <Button variant="primary" size='lg' className='mx-3' onClick={()=>{deleteTask()}}><i className = "bi bi-trash"></i></Button>
            </div>
          
          </td>
        </tr>
       
      </tbody>
    </Table>

    <UpdateTask
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </div>
        </>)
}

export default Tasklist
