import React from 'react'
import { useCartContext } from "../../context/CartContext"
import 'animate.css';
import '../../styles/styles.css'

export const CartWidget = () => {
    let cantItemsCarrito = [0]
    const {listaCarrito} = useCartContext()

    //Función: suma la cantidad total de productos en el carrito y lo muestra como número, al lado del ícono del mismo.
    // Si la cantidad es 0, no muestra nada.
    function cantItemsCarritoFx(){
      cantItemsCarrito = listaCarrito.reduce ((acc,item)=>{
        return acc += (item.cant)
      },0)
   
    }

  return (
        <div >
            <img src='../cartA.png'   className=' altoCartWidget transicionCartWidget'/>
            

            {cantItemsCarritoFx()}
            

            <span >
              
              {cantItemsCarrito === 0 ? 

                <span></span> 
                
              :

              `${cantItemsCarrito}`
              
              }

            </span>

        </div>
    )
}
