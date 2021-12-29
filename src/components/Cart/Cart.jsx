//import {useContext} from 'react'
//import { CartContext } from '../../context/CartContext'

import { useCartContext } from "../../context/CartContext"

function Cart()  {

    const {cartList, borrarCarrito}= useCartContext()
    let res = [0]

    const total = [0]
   // const sumarTotalCarrito = (cartList) =>{
    //    for (const totalProd of cartList){
    //       total.push(totalProd.precio) 
    //    }
    //    console.log(total)
   // }
function sumarTotalCarrito(){
     res = cartList.reduce ((acc,item)=>{
       return acc += (item.precio * item.cant)
   },0)
   console.log(res)

}
   
    return (
        <div>
            {cartList.map(prod=> 

            <div>
                <h1>{`Producto:${prod.name}`}</h1>
                    <h2>{`Cantidad:${prod.cant}`}</h2>
                    <h2>{`Precio:${prod.precio}`}</h2>

                
            </div>)}
             
            <button onClick={borrarCarrito}>Eliminar productos del carrito</button>

            {sumarTotalCarrito()}
            <h2>Total : {`${res}`}</h2>
        </div>
    )
}

export default Cart
