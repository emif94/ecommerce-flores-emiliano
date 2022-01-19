//import {useContext} from 'react'
//import { CartContext } from '../../context/CartContext'
import {  addDoc, collection, doc, getFirestore, Timestamp } from "firebase/firestore"
import { useCartContext } from "../../context/CartContext"
import {Link} from 'react-router-dom'
import { Card, Button, Container,Row,Col, Table} from 'react-bootstrap'
import { useState } from "react"


function Cart()  {
    const [idOrden, setIdOrden] = useState('')
    const [dataForm, setDataForm] = useState({
        nombre:"", email:"", telefono:""
    })
    const {cartList, borrarCarrito, eliminarUnProducto}= useCartContext()
    let totalCarrito = [0]
    
    console.log(cartList)


        const handleChange = (e) => {
        // console.log(e.target.name)
         //console.log(e.target.value)
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
        console.log(dataForm)
        }


     const generarOrden = (e) =>{
        e.preventDefault()    
          
        let orden = {}
        orden.date = Timestamp.fromDate(new Date())
       

        orden.comprador = dataForm
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
            {/*cartList.map(prod=> 

            <div>
                <h1>{`Producto:${prod.nombre}`}</h1>
                    <h2>{`Cantidad:${prod.cant}`}</h2>
                    <h2>{`Precio:${prod.precio}`}</h2>
                    <button id={`${prod.id}`}onClick={eliminarUnProducto}>Eliminar</button>

                
            </div>)*/}

             
            {/*<button onClick={borrarCarrito}>Eliminar productos del carrito</button>*/}

            

            <div>

                {cartList.length === 0 ?

                    <div>

                        <h1>Su carrito está vacío</h1>
                        <button ><Link to='/'>Mirá nuestros productos!</Link></button>

                    </div> 


                    :   
                

                    <div>

                        {idOrden.length !== 0 && idOrden}
                        { cartList.map(prod=> <li>{prod.nombre}   {prod.cantidad}</li>) }
                        <form 
                            onSubmit={generarOrden} 
                            onChange={handleChange} 
                        >
                            <input 
                                type='text' 
                                name='nombre' 
                                placeholder='nombre' 
                                defaultValue={dataForm.nombre}
                            /><br />
                            <input 
                                type='text' 
                                name='telefono'
                                placeholder='telefono' 
                                defaultValue={dataForm.telefono}
                            /><br/>
                            <input 
                                type='email' 
                                name='email'
                                placeholder='email' 
                            defaultValue={dataForm.email}
                            /><br/>
                            <button>Generar Orden</button>
                        </form>
                        <button onClick={borrarCarrito} >Vaciar Carrito</button>




                        <Table striped bordered hover variant="dark">
                            
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                    <th>Precio</th>
                                    <th><button onClick={borrarCarrito} >Vaciar Carrito</button></th>

                                    
                                </tr>
                            </thead> 
                            <tbody>
                                {cartList.map(prod=> 

                                <tr>
                                    <td>{prod.nombre}</td>
                                        <td>{`x${prod.cant}`}</td>
                                        <td>{`$${prod.precio}`}</td>
                                    <td><button id={`${prod.id}`}onClick={eliminarUnProducto}>Eliminar</button></td> 
                                    

                                    
                                </tr>)}
                                <tr>
                                    
                                    
                                    <td colSpan={2}>Total</td>
                                    <td colSpan={2}>{`$${sumarTotalCarrito()}`} </td>
                                </tr>
                                

                            
                            </tbody>
                            </Table>

                    </div>
                    
                }

                

            </div>
              
        </div>
    )
}

export default Cart
