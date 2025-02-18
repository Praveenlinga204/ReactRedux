import React, { useState } from 'react'

function CustomerAdd() {
   const [ state,setState] = useState()
   const [cust,setCust] = useState([])

  function addingCust (){
    if(state){
        setCust((previousState)=>[...previousState,state])
        console.log(cust)
    }
  }
   

    return (<>
        <div>
            <h3>Add New Customer: {state}</h3>
            <input type="text" onChange={(e)=>{setState(e.target.value)}} />
           <button onClick={addingCust}>Add</button>
            
        </div>
        </>
    )
}

export default CustomerAdd
