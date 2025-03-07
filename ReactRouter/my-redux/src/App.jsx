import React from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const count = useSelector((state)=>state.count);
  const dispatch = useDispatch();

  return (
    <>
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={()=> dispatch({type:'INCREMENT'})}>+1</button>
      <button onClick={()=> dispatch({type:'DECREMENT'})}>-1</button>
    </div>
   
    </>
  )
}

export default App
