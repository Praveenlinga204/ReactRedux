import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
var id =1;

function Axiosdeletemethod() {
    const [data, setData] = useState([])
    const [name, setName] = useState("")

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/1')
            .then(res => setData(res.data))

            .catch((err) => { console.log(err) })
    }, [])

    const deleteUser = () => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${1}`, { id: id++, name: name })
            .then((res) => setData(res.data))
            .catch((err) => { console.log(err) })
    }
    if(!data) return `No users available`
    return (
        <div>
             <div>
             
            <h3>Name : {data.name}</h3>


<button onClick={deleteUser}>Delete</button>
        </div>

            
        </div>
    )
}

export default Axiosdeletemethod
