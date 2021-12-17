import React from 'react'
import { Link } from 'react-router-dom'

function Item ({prod}) {
    return (
        <div
            key = {prod.id}
            
        >
            <div>
                
                <h1> {` ${prod.name} - ${prod.categoria} `}</h1>
                <h2>{prod.precio}</h2>
                <Link to= {`detalles/${prod.id}`}><button>Detalles</button></Link>
                
                
            </div>
            
        </div>
    )
}

export default Item
