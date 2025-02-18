import React from 'react'
import { Link } from 'react-router-dom'

function Books() {
    return (
        <div>
            <div className='card-header'>
            <h1>Books</h1>
            <Link to={"/"} className='btn-danger-link'>Home</Link>
            </div>
        </div>
    )
}

export default Books
