import React from 'react'

function Item ({prod}) {
    return (
        <div
            key = {prod.id}
            
        >
            <div>
                
                <h1> {` ${prod.name} - ${prod.categoria} `}</h1>
                <h2>{prod.precio}</h2>
                <button>Detalles</button>
                
            </div>
            
        </div>
    )
}

export default Item
