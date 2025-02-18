import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Axiosgetmethod() {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setData(res.data))
        
        .catch((err)=>{console.log(err)})
    })

   
   

    return (
        <div>
            <h1>Axios Get Method</h1>
            <h3>{data.map((u,id)=>{
                return (
                    <div key={id}>
                        {u.name},{u.email}
                    </div>
                )
            })}</h3>
        </div>
    )
}

export default Axiosgetmethod
