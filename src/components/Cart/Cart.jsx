//import {useContext} from 'react'
//import { CartContext } from '../../context/CartContext'

import { useCartContext } from "../../context/CartContext"

function Cart()  {

    const {cartList, borrarCarrito}= useCartContext()

    return (
        <div>
            {cartList.map(prod=> 

            <div>
                <h1>{`Producto:${prod.name}`}</h1>
                    <h2>{`Cantidad:${prod.cant}`}</h2>
                    <h2>{`Precio:${prod.precio}`}</h2>

                
            </div>)}

            <button onClick={borrarCarrito}>Eliminar productos del carrito</button>
        </div>
    )
}

export default Cart
