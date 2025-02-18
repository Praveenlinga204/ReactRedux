import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

function Axiospostmethod() {

    const [data,setData] = useState([])
    const [name,setName] = useState("")


    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setData(res.data))
        
        .catch((err)=>{console.log(err)})
    },[])

    const postUser = ()=>{
        axios.post('https://jsonplaceholder.typicode.com/users',{name:name})
        .then((res)=>{setData([...data,res.data])})
    }


    return (
        
             <div>
            <h1>Axios Get Method</h1>
            <h5>{data.map((u,id)=>{
                return (
                    <div key={id}>
                        {u.name}
                    </div>
                )
            })}</h5>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={postUser}>Add</button>
        </div>
        
    )
}

export default Axiospostmethod
