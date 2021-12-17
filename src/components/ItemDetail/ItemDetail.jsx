import React from 'react'


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