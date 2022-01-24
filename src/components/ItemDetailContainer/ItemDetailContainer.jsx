import React from "react";
import { useParams } from "react-router-dom";
import {useState , useEffect} from 'react'
import ItemDetail from "../ItemDetail/ItemDetail";
import { useCartContext } from "../../context/CartContext"
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'

import {doc, getDoc, getFirestore} from 'firebase/firestore'
import '../../styles/styles.css'


const ItemDetailContainer = () => {
    const [productos, setProducto] = useState([])
    const [loading, setLoading] = useState (true)
    

     const {id} = useParams ()

     

    useEffect(() => {
         const dbDetail = getFirestore()
         const queryDbDetail = doc (dbDetail, 'productos', id )
         getDoc (queryDbDetail)
         .then (resp => setProducto ({id: resp.id, ...resp.data()}))
         .finally(()=> setLoading(false))
    },[id])
    

    
    return (
        <div>
            


            
            
            { loading ? 

                <div className="fondo">
                    
                    <img className='altoLoading' src="../loading.gif"/>
                    <h1 className='textoTeko35 textoBlanco PB15'>Cargando...</h1>
                </div>
            
            
            :
               
                productos.nombre ?

                <h2><ItemDetail productos = {productos} /></h2>

                : 

                <div className="fondo">
                    
                    <img className="lupa" src="../lupa.png"/>
                    <h1 className='textoTeko35 textoBlanco'>Este producto no existe</h1><br/>
                    
                    <Button variant="outline-light MB10">
                        <Link to= '/'className = "textoBlanco">Regresar a la tienda</Link>
                    </Button>
                </div>


            }
            
             
            
            
            
            
            
        
            
        </div>
    )
}

export default ItemDetailContainer
