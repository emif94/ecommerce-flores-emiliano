
import { useCartContext } from "../../context/CartContext"
import {Link} from 'react-router-dom'
import {Button, Container,Table} from 'react-bootstrap'
import '../../styles/styles.css'



function Cart()  {
    
    const {cartList, borrarCarrito, eliminarUnProducto, sumarTotalCarrito}= useCartContext()     
   
    return (
        <div className="fondo">
            

            <div>

                {cartList.length === 0 ?

                    <div  className="PB13 PT8">

                        <h1 className='textoBlanco textoTeko45 PB5'>Su carrito está vacío</h1>
                        <Link to='/'><Button variant="outline-light"><span className="textoTeko30">Mirá nuestros productos!</span></Button></Link>
                    </div> 

                    :                   

                    <div className="PB13 PT8">  
                    <span className='textoBlanco textoTeko55'> RESUMEN DE CARRITO </span>                

                        <Table striped bordered hover variant="dark" className="anchoTablaCart">
                            
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                    <th>Precio Unitario</th>
                                    <th><Button variant="outline-danger" onClick={borrarCarrito} >Vaciar Carrito</Button></th>                                    
                                </tr>
                            </thead> 

                            <tbody>
                                {cartList.map(prod=> 

                                <tr>
                                    <td>{prod.nombre}</td>
                                        <td>{`x${prod.cant}`}</td>
                                        <td>{`$${prod.precio}`}</td>
                                    <td><span id={`${prod.id}`}onClick={eliminarUnProducto}><img src='../delete-24.png'/></span> </td>   
                                        
                                                            

                                </tr>)}

                                <tr>
                                    
                                    
                                    <td colSpan={2}>Total</td>
                                    <td colSpan={2}>{`$${sumarTotalCarrito()}`} </td>
                                </tr>
                                

                            
                            </tbody>
                            </Table>

                            <Link to= '/checkout' className="M1"><Button variant="outline-light">Finalizar Compra</Button></Link>

                            <Link to= '/' className="M1"><Button variant="outline-light">Seguir Comprando</Button></Link>
                                                       

                    </div>
                    
                }               

            </div>
              
        </div>
    )
}

export default Cart
