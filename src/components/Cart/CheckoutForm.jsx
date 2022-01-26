import React from 'react'
import { Button, Container } from 'react-bootstrap'
import {useState} from 'react'
import {  addDoc, collection, getFirestore, Timestamp } from "firebase/firestore"
import { useCartContext } from "../../context/CartContext"
import {Link} from 'react-router-dom'
import '../../styles/styles.css'



// Formulario al cual se llega desde Cart. Paso final para generar la orden y concretar la compra.

function CheckoutForm() {


    const [idOrden, setIdOrden] = useState('')
    const [dataForm, setDataForm] = useState({
        nombre:"", email:"", telefono:"", confEmail:""
    })
    const {listaCarrito, borrarCarrito, sumarTotalCarrito}= useCartContext()
    

    const manejadorOnChange = (e) => {

        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
        
        }
 

    const generarOrden = (e) =>{
         
        e.preventDefault()    
         
        let orden = {}

        orden.fecha = Timestamp.fromDate(new Date())
        orden.comprador = dataForm
        orden.total = sumarTotalCarrito();
        orden.productos = listaCarrito.map(itemCarrito => {

            const id = itemCarrito.id;
            const nombre = itemCarrito.nombre;
            const precio = itemCarrito.precio * itemCarrito.cant;
            
            return {id, nombre, precio}  
            
                     
        }) 
        

        
    // Generacion de orden.
        const db = getFirestore()
        const ordenColeccion = collection(db, 'ordenes')
        addDoc(ordenColeccion, orden)
        .then(resp => setIdOrden(resp.id))
        .catch(err => console.log(err))
        .finally(() => { 

            setDataForm({ nombre:"", email:"", telefono:"", confEmail:"" })
            borrarCarrito()
            
        })
    
        console.log(orden) //Esta salida por consola, que debería ser eliminada, se deja con fines demostrativos de cómo se generan el resto de los datos de la orden.
    }


    // Al generarse la orden, se renderiza el siguiente mensaje de compra exitosa:
    if (idOrden) { 
        return (
            <Container fluid className="fondo PB13">
                <h2 className='textoBlanco textoTeko45 PB3'>Compra realizada con éxito</h2>
                <p className='textoBlanco textoTeko45 PB3'>Número de orden: <strong> {idOrden}</strong></p>
                <Link to='/'>
                    <Button variant="outline-light"><span className="textoTeko30">Volver a la tienda</span></Button>
                </Link>
            </Container>
        )
    }

  return (
    <>
      {/*Cuando no exista una orden, se piden datos del cliente, con el requisito de confirmar dirección de email. 
      Al cumplirse este requisito, muestra en pantalla un boton para concretar la compra, el cual será funcional 
      siempre y cuando los campos del formulario sean completados.*/}
      <div className="fondo">
          <h1 className='textoBlanco textoTeko45 PB3'>Complete sus datos:</h1>
            
            
            <form           className='PB7'

                            onSubmit={generarOrden} 
                            
                            onChange={manejadorOnChange} 
                        >
                            <input 
                                type='text' 
                                name='nombre' 
                                placeholder='Nombre y Apellido' 
                                defaultValue={dataForm.nombre}
                                required
                            /><br/> <br/>
                            <input 
                                type='text' 
                                name='telefono'
                                placeholder='Teléfono' 
                                defaultValue={dataForm.telefono}
                                required
                            /><br/><br/>
                            <input 
                                type='email' 
                                name='email'
                                placeholder='email' 
                            defaultValue={dataForm.email}
                            required
                            /><br/><br/>
                            <input 
                                type='email' 
                                name='confEmail'
                                placeholder='Confirme su email' 
                            defaultValue={dataForm.confEmail}
                            required
                            /><br/><br/>
                            {dataForm.email != "" && dataForm.email== dataForm.confEmail ? <Button variant="outline-success" type="submit" >
                                Comprar y Terminar
                            </Button> 
                            :
                            <span className='textoBlanco textoTeko30'>*Asegúrese de escribir el mismo email en ambos campos</span>}
                            
                        </form>


        </div>
    </>
  );
}



export default CheckoutForm