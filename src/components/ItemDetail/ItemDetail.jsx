import React from 'react'
<<<<<<< HEAD
import { Link } from 'react-router-dom'

function ItemDetail ({prod}) {
    return (
        <div
            key = {prod.id}
            
        >
            <div>
                
                <h1> {` ${prod.name} - ${prod.categoria} `}</h1>
                <h2>{prod.precio}</h2>
<<<<<<<< HEAD:src/components/ItemDetail/ItemDetail.jsx
                <h2>{prod.detail}</h2>
                
                <img src={prod.foto}/>
========
                <Link to= {`detalles/${prod.id}`}><button>Detalles</button></Link>
                
>>>>>>>> tmp:src/components/Item/Item.jsx
                
            </div>
            
        </div>
    )
}

export default ItemDetail
=======


const ItemDetail = ({productos}) => {
    return (
        <div key= {productos.id}>

            <h2>{`${productos.name}`}</h2>
            
            <img src={productos.foto}/>

            <h2>{`${productos.precio}`}</h2>

            <h5>{`${productos.detalles}`}</h5>


            
        
        </div>
    )
}
 export default ItemDetail
>>>>>>> tmp
