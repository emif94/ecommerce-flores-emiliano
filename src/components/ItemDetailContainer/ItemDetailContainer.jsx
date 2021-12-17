import React from "react";
import { useParams } from "react-router-dom";
import {useState , useEffect} from 'react'
import {getFetch} from "../helpers/getFetch"
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([])

     const {id} = useParams ()

    useEffect(() => {
        getFetch
        .then (resp => setProductos(resp.find(prod => prod.id === parseInt(id)))) 
        .catch (err => console.log(err))
    }, [id])   
        

    return (
        <div>
            <h2>Item Detail Container </h2>
            
            
            <h2><ItemDetail productos = {productos} /></h2>
            
        </div>
    )
}

export default ItemDetailContainer
