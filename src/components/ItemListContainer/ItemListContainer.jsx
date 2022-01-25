import React from 'react'
import {useState , useEffect} from 'react'
import {Dropdown, DropdownButton} from 'react-bootstrap'
import {getFetch} from "../helpers/getFetch"
import ItemList from  "../ItemList/ItemList"
import {collection, doc, getDoc, getFirestore, getDocs, query, where} from 'firebase/firestore'

import {useParams} from 'react-router-dom'
import '../../styles/styles.css'
import { CartWidget } from '../CartWidget/CartWidget'


const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState (true)

    const {idCategoria} = useParams ()
    const {id} = useParams ()

 
    useEffect(() => {
        if (idCategoria) {

            const dbCate = getFirestore()
            const queryCollectionCate = query(collection (dbCate, 'productos' ), where("categoria","==",idCategoria))
            getDocs(queryCollectionCate)
            .then (resp => setProductos(resp.docs.map(prod => ({id: prod.id,...prod.data()})))) 
            .finally(()=> setLoading(false))
            

        }else{ 
        
        const db = getFirestore()
         const queryCollection = collection (db, 'productos' )
         getDocs(queryCollection)
         .then (resp => setProductos (resp.docs.map(prod=>({id: prod.id, ...prod.data() } ) ) ) )
         .catch (err=> console.log (err))
         .finally(()=>setLoading(false))}
         
    },[idCategoria]) 

        



    return (
        <div  className ="fondo PT1">
            {greeting}
            { loading ? 

            <div>
                
                <img  className='altoLoading' src="../loading.gif"/>
                <h1 className='textoTeko35 textoBlanco PB15'>Cargando...</h1>
            </div>
            
            
            :
            <ItemList productos = {productos} />
            }
            
        </div>
    )
}
export default ItemListContainer
