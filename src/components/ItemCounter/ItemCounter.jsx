import React, {useState} from 'react'
import {Button} from 'react-bootstrap'


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
            
            
            <div>
              <Button variant="primary" onClick = {handleAgregar}>+</Button>            
              <span>{ `  ${value}  ` }</span>
              <Button variant="primary" onClick = {handleQuitar}>-</Button>
            </div>
            
            <Button variant="primary" onClick = {()=>onAdd(value)}>Agregar al Carrito</Button>
            
        </div>
    )
}

export default ItemCounter

