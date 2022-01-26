import React from 'react'
import {useState , useEffect} from 'react'
import ItemList from  "../ItemList/ItemList"
import {collection, getFirestore, getDocs, query, where} from 'firebase/firestore'
import {useParams} from 'react-router-dom'
import '../../styles/styles.css'

//Contiene a ItemList, muestra la colección de productos existentes en la base de datos.

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState (true)

    const {idCategoria} = useParams ()
    const {id} = useParams ()

 
    useEffect(() => {
        if (idCategoria) { //Filtra los productos por categoría.

            const dbCate = getFirestore()
            const queryCollectionCate = query(collection (dbCate, 'productos' ), where("categoria","==",idCategoria))
            getDocs(queryCollectionCate)
            .then (resp => setProductos(resp.docs.map(prod => ({id: prod.id,...prod.data()})))) 
            .finally(()=> setCargando(false))
            

        }else{ // En caso de no existir un id de categoria, renderiza todos los productos.
        
            const db = getFirestore()
            const queryCollection = collection (db, 'productos' )
            getDocs(queryCollection)
            .then (resp => setProductos (resp.docs.map(prod=>({id: prod.id, ...prod.data() } ) ) ) )
            .catch (err=> console.log (err))
            .finally(()=>setCargando(false))}
         
    },[idCategoria]) 

        

    return (
        <div  className ="fondo PT1">
            {greeting}

            
            { cargando ?  // Al finalizar la carga de productos, se deja de mostrar "Cargando..." y se muestran los mismos.

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
