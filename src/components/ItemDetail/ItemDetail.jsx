import React from 'react'
import ItemCounter from '../ItemCounter/ItemCounter'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import { useCartContext } from '../../context/CartContext'
//import { CartContext } from '../../context/CartContext'



const ItemDetail = ({productos}) => {

    const [irCart, setIrCart] = useState ('comprando');

    const {cartList, agregarCarrito} = useCartContext()

    const onAdd = (cantidad) => {
        console.log (cantidad)
        setIrCart ('irCarrito')
        agregarCarrito({...productos, cant:cantidad})
    }
        console.log (cartList)
    return (
        <div>

            <h2>{`${productos.name}`}</h2>
            
            <img src={productos.foto}/>

            <h2>{`${productos.precio}`}</h2>

            <h5>{`${productos.detalles}`}</h5>

            {irCart === 'comprando' ?
                (<ItemCounter stock = {productos.stock} onAdd = {onAdd}/>)
            : 
            (<button><Link to= '/cart'><CartWidget/></Link></button>)
            }


            
        
        </div>
    )
}
 export default ItemDetail