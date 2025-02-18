import React from 'react'
import {electronics} from '../data/dataset'

import { Link } from 'react-router-dom'

function Electronic() {
    return (
        <div>
         <div className='card-header'>
<h1>Electronic</h1>
<Link to={"/"} className='btn-danger-link'>Home</Link>
         </div>
        </div>
    )
}

export default Electronic
