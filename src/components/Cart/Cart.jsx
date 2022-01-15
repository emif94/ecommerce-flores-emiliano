//import {useContext} from 'react'
//import { CartContext } from '../../context/CartContext'
import {  addDoc, collection, doc, getFirestore, Timestamp } from "firebase/firestore"
import { useCartContext } from "../../context/CartContext"
import {Link} from 'react-router-dom'
import { useState } from "react"


function Cart()  {
    const [idOrden, setIdOrden] = useState('')
    const {cartList, borrarCarrito, eliminarUnProducto}= useCartContext()
    let totalCarrito = [0]
    
    console.log(cartList)

     const generarOrden = (e) =>{
        e.preventDefault()    
          
        let orden = {}
        orden.date = Timestamp.fromDate(new Date())
       

        orden.comprador = {nombre: 'Emiliano', tel: '6454', email: 'emif94@gmail.com'}
        orden.total = sumarTotalCarrito();

        orden.productos = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.nombre;
            const precio = cartItem.precio * cartItem.cantidad;
            
            return {id, nombre, precio}  
            
        })
        console.log (orden) 

        // Generacion de orden
         const db = getFirestore()
        const ordenColeccion = collection(db, 'ordenes')
        addDoc(ordenColeccion, orden)
        .then(resp => setIdOrden(resp.id))
        .catch(err => console.log(err))

    }


function sumarTotalCarrito(){
     return cartList.reduce ((acc,item)=>{
       return acc += (item.precio * item.cant)
   },0)
   //console.log(totalCarrito)
   console.log(cartList)

}

 




   
    return (
        <div>
            {cartList.map(prod=> 

            <div>
                <h1>{`Producto:${prod.nombre}`}</h1>
                    <h2>{`Cantidad:${prod.cant}`}</h2>
                    <h2>{`Precio:${prod.precio}`}</h2>
                    <button id={`${prod.id}`}onClick={eliminarUnProducto}>Eliminar</button>

                
            </div>)}

             
            <button onClick={borrarCarrito}>Eliminar productos del carrito</button>

            

            <h2>{cartList.length === 0 ?
              <div>
                  <h1>Su carrito está vacío</h1>
                  <button ><Link to='/'>Mirá nuestros productos!</Link></button>
              </div> 
              :   
              `Total :${sumarTotalCarrito()}` }</h2>

              <div>
            {idOrden.length !== 0 && idOrden}
            {  cartList.map(prod=> <li>{prod.nombre}   {prod.cantidad}</li>) }
            <form 
                onSubmit={generarOrden} 
                
            >
                
                <button>Generar Orden</button>
            </form>
            <button onClick={borrarCarrito} >Vaciar Carrito</button>

        </div>
              
        </div>
    )
}

export default Cart
