import React, {useState} from 'react'
import {Button} from 'react-bootstrap'
import '../../styles/styles.css'

//Contador de la cantidad de un mismo producto a agregar al carrito, se muestra en ItemDetail.

const ItemCounter = ({ stock, onAdd }) => {
     const [value, setValue] = useState (1)

     const manejadorAgregar =()=>{
       value !== stock && setValue(value+1);
     }
     const manejadorQuitar =()=>{
       value !== 0 &&  setValue(value-1);
     }   
     

    return (
        <div>
            
            
            <div>
              <Button variant="outline-light" onClick = {manejadorAgregar}>+</Button>            
              <span className='textoBlanco textoTeko35'>{ `  ${value}  ` }</span>
              <Button variant="outline-light" onClick = {manejadorQuitar}>-</Button>
            </div>
            
            <Button variant="outline-light" onClick = {()=>onAdd(value)}>Agregar al Carrito</Button>
            
        </div>
    )
}

export default ItemCounter

