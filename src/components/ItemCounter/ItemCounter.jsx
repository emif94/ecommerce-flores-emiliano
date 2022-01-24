import React, {useState} from 'react'
import {Button} from 'react-bootstrap'
import '../../styles/styles.css'


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
              <Button variant="outline-light" onClick = {handleAgregar}>+</Button>            
              <span className='textoBlanco textoTeko35'>{ `  ${value}  ` }</span>
              <Button variant="outline-light" onClick = {handleQuitar}>-</Button>
            </div>
            
            <Button variant="outline-light" onClick = {()=>onAdd(value)}>Agregar al Carrito</Button>
            
        </div>
    )
}

export default ItemCounter

