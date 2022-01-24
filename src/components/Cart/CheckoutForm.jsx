import React from 'react'
import { Button, Container } from 'react-bootstrap'
import {useState} from 'react'
import {  addDoc, collection, doc, getFirestore, Timestamp } from "firebase/firestore"
import { useCartContext } from "../../context/CartContext"
import {Link} from 'react-router-dom'
import '../../styles/styles.css'




function CheckoutForm() {


const [idOrden, setIdOrden] = useState('')
    const [dataForm, setDataForm] = useState({
        nombre:"", email:"", telefono:"", confEmail:""
    })
    const {cartList, borrarCarrito, eliminarUnProducto, sumarTotalCarrito}= useCartContext()
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
            const precio = cartItem.precio * cartItem.cant;
            
            return {id, nombre, precio}  
            
            
        })
        console.log (orden) 

        
        // Generacion de orden
         const db = getFirestore()
        const ordenColeccion = collection(db, 'ordenes')
        addDoc(ordenColeccion, orden)
        .then(resp => setIdOrden(resp.id))
        .catch(err => console.log(err))
        .finally(() => { 
            setDataForm({ name: '', email: '', phone: '' })
            borrarCarrito()
            
        })
        console.log (orden) 

        

    }

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
      

      <div className="fondo">
          <h1 className='textoBlanco textoTeko45 PB3'>Complete sus datos:</h1>
            
            
            <form           className='PB7'

                            onSubmit={generarOrden} 
                            
                            onChange={handleChange} 
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