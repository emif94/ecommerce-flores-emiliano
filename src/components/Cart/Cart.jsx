//import {useContext} from 'react'
//import { CartContext } from '../../context/CartContext'

import { useCartContext } from "../../context/CartContext"
import {Link} from 'react-router-dom'

function Cart()  {

    const {cartList, borrarCarrito, eliminarUnProducto}= useCartContext()
    let totalCarrito = [0]
    
    console.log(cartList)


function sumarTotalCarrito(){
     totalCarrito = cartList.reduce ((acc,item)=>{
       return acc += (item.precio * item.cant)
   },0)
   console.log(totalCarrito)

}

 




   
    return (
        <div>
            {cartList.map(prod=> 

            <div>
                <h1>{`Producto:${prod.name}`}</h1>
                    <h2>{`Cantidad:${prod.cant}`}</h2>
                    <h2>{`Precio:${prod.precio}`}</h2>
                    <button id={`${prod.id}`}onClick={eliminarUnProducto}>Eliminar</button>

                
            </div>)}
             
            <button onClick={borrarCarrito}>Eliminar productos del carrito</button>

            {sumarTotalCarrito()}

            <h2>{cartList.length === 0 ?
              <div>
                  <h1>Su carrito está vacío</h1>
                  <button ><Link to='/'>Mirá nuestros productos!</Link></button>
              </div> 
              :   
              `Total :${totalCarrito}` }</h2>
              
        </div>
    )
}

export default Cart
