<<<<<<< HEAD
import React from 'react'
import {useState , useEffect} from 'react'
import {Dropdown, DropdownButton} from 'react-bootstrap'
import {getFetch} from "../helpers/getFetch"
import ItemList from  "../ItemList/ItemList"

import {useParams} from 'react-router-dom'


const ItemDetailContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState (true)

    const {idCategoria} = useParams ()

    useEffect(() => {
        if (idCategoria) {
            getFetch
            .then (resp => setProductos(resp.filter(prod => prod.categoria === idCategoria))) 
            .catch (err => console.log(err))
            .finally(()=> setLoading(false))

        }else {
        getFetch
        .then (resp => setProductos(resp)) 
        .catch (err => console.log(err))
        .finally(()=> setLoading(false))
        }
    },[idCategoria])    
        
    console.log (idCategoria)


    return (
        <div>
            {greeting}
            { loading ? 
            <h1>Cargando...</h1>
            :
            <ItemList productos = {productos} />
            }
=======
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
>>>>>>> tmp
            
        </div>
    )
}
<<<<<<< HEAD
=======

>>>>>>> tmp
export default ItemDetailContainer
