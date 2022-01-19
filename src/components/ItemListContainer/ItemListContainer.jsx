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



// USAR EN ITEMDETAIL-->
     //useEffect(() => {
    //     const db = getFirestore()
    //     const queryDb = doc (db, 'productos', 'IGnXI3IMYYhpyaStAhIH' )
    //     getDoc (queryDb)
    //     .then (resp => setProducto ({id: resp.id, ...resp.data()}))
    //},[idCategoria]) 

 
    useEffect(() => {
        if (idCategoria) {

            const dbCate = getFirestore()
            const queryCollectionCate = query(collection (dbCate, 'productos' ), where("categoria","==",idCategoria))
            getDocs(queryCollectionCate)
            .then (resp => setProductos(resp.docs.map(prod => ({id: prod.id,...prod.data()})))) 
            
            .catch (err => console.log(err))
            .finally(()=> setLoading(false))
            

        }else{ 
        
        const db = getFirestore()
         const queryCollection = collection (db, 'productos' )
         getDocs(queryCollection)
         .then (resp => setProductos (resp.docs.map(prod=>({id: prod.id, ...prod.data() } ) ) ) )
         .catch (err=> console.log (err))
         .finally(()=>setLoading(false))}
         
    },[idCategoria]) 



   // useEffect(() => {
   //     if (idCategoria) {
   //         getFetch
   //         .then (resp => setProductos(resp.filter(prod => prod.categoria === idCategoria))) 
   //         .catch (err => console.log(err))
   //         .finally(()=> setLoading(false))
   //
   //     }else {
   //     getFetch
   //      .then (resp => setProductos(resp)) 
   //     .catch (err => console.log(err))
   //     .finally(()=> setLoading(false))
   //      }
   // },[idCategoria])    
        
    console.log (idCategoria)
     console.log (productos)


    return (
        <div  className ="fondo">
            {greeting}
            { loading ? 

            <div>
                
                <img style={{ maxHeight: '50px'}} src="../loading.gif"/>
                <h1 className='textoItemDetail textoBlanco'>Cargando...</h1>
            </div>
            
            
            :
            <ItemList productos = {productos} />
            }
            
        </div>
    )
}
export default ItemListContainer
