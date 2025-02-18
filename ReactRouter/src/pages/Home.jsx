import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    
    return (
        <div className='container'>
            <h1 className='title'>Welcome to Eshop</h1>
            <div className='home'>
                <img className='banner' src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg " alt="img" />
                <div className='category'>
                <h1>Pick Your Catagory</h1>
                <div className='links'>
                    <Link to="/electronic" className='link'>Electroics</Link>
                    <Link to="books" className='link'>Books</Link>
                    <button onClick={()=>{alert('Bimmitha is very bad,,,,,')}}>Click</button>
                    <button onClick={()=>{alert(' is very bad,,,,,')}}>Click</button>
                </div>
            </div>
            </div>
          
        </div>
    ) 
}

export default Home
