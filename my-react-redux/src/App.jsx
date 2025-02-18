import React from 'react'
import './App.css'
import CustomerAdd from './CustomerAdd'
import { Provider } from 'react-redux'
import store from './Store'

function App() {
  

  return (
    <>
    <Provider store={store}>
    <h1>React Redux Customer</h1>
    <CustomerAdd/>
    </Provider>
   
    </>
  )
}


export default App
