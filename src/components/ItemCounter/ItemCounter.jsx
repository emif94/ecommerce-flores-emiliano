import React, {useState} from 'react'

 const ItemCounter = ({ stock, onAdd }) => {
     const [value, setValue] = useState (1)

     const handleAgregar =()=>{
       value !== stock && setValue(value+1);
     }
     const handleQuitar =()=>{
       value !== 0 &&  setValue(value-1);
     }   
     

    return (
        <div>
            
            <button onClick = {handleAgregar}>+</button>
            <span>{value}</span>
            <button onClick = {handleQuitar}>-</button>
            <button onClick = {()=>onAdd(value)}>Agregar al Carrito</button>
            
        </div>
    )
}

export default ItemCounter

