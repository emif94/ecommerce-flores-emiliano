import React from "react";
import { useParams } from "react-router-dom";
import {useState , useEffect} from 'react'
import ItemDetail from "../ItemDetail/ItemDetail";
import {doc, getDoc, getFirestore} from 'firebase/firestore'


const ItemDetailContainer = () => {
    const [productos, setProducto] = useState([])

     const {id} = useParams ()

     

    useEffect(() => {
         const dbDetail = getFirestore()
         const queryDbDetail = doc (dbDetail, 'productos', id )
         getDoc (queryDbDetail)
         .then (resp => setProducto ({id: resp.id, ...resp.data()}))
    },[id])
        

    return (
        <div>
            
            
            
            <h2><ItemDetail productos = {productos} /></h2>
        
            
        </div>
    )
}

export default ItemDetailContainer
