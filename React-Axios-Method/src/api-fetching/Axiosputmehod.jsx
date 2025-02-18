import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
var id = 10;


function Axiosputmehod() {
    const [data, setData] = useState([])
    const [name, setName] = useState("")


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/1')
            .then(res => setData(res.data))

            .catch((err) => { console.log(err) })
    }, [])

    const updateUser = () => {
        axios.put(`https://jsonplaceholder.typicode.com/users/${1}`, {id:id++, name: name })
            .then((res) => { setData(res.data) })
            .catch((err)=>{console.log(err)})
    }
    return (
        <div>
            <h1>UserName:{data.name}</h1>

            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={updateUser}>update</button>

        </div>
    )
}

export default Axiosputmehod
