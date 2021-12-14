import React from 'react'

function ItemDetail ({prod}) {
    return (
        <div
            key = {prod.id}
            
        >
            <div>
                
                <h1> {` ${prod.name} - ${prod.categoria} `}</h1>
                <h2>{prod.precio}</h2>
                <h2>{prod.detail}</h2>
                
                <img src={prod.foto}/>
                
            </div>
            
        </div>
    )
}

export default ItemDetail
