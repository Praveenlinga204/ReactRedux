import React from 'react'
import Home from './pages/Home'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Electronic from './pages/Electronic'
import Books from './pages/Books'


const router = createBrowserRouter([{path:'/',element:<Home/>},
  {path:'/electronic', element:<Electronic/>},
  {path:'/books',element:<Books/>},])
function App() {
 

  return (
   <RouterProvider router={router}></RouterProvider>
  )
}

export default App
