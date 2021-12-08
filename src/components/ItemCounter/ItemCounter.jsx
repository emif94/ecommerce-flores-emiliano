import React, {useState} from 'react'

 const ItemCounter = ({ max, startValue }) => {

 
     const [value, setValue] = useState (startValue)
     const handleAgregar =()=>{
       value < max ? setValue(value+1) : alert ("No podés comprar más unidades")
     }
     const handleQuitar =()=>{
       value > startValue ? setValue(value-1) : alert ("Debes llevar al menos 1 producto")
     }   
     

    return (
        <div>
            
            <button onClick = {handleAgregar}>+</button>
            <span>{value}</span>
            <button onClick = {handleQuitar}>-</button>
            
        </div>
    )
}

export default ItemCounter