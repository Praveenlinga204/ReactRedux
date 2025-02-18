
// Normal way to fetch data using javaScript,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
import React from 'react'

function Fetch() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res =>{
        res.json()
        .then((resp)=>{
            console.log(resp)
        })
      })
      .catch()
    return (
        <div>
            
        </div>
    )
}

export default Fetch
