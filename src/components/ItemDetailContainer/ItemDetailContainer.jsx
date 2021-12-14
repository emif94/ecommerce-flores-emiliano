import React from 'react'
import {useState , useEffect} from 'react'
import {Dropdown, DropdownButton} from 'react-bootstrap'
import {getFetch} from "../helpers/getFetch"
import ItemList from  "../ItemList/ItemList"


const ItemDetailContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState (true)

    useEffect(() => {
        getFetch
        .then (resp => setProductos(resp)) 
        .catch (err => console.log(err))
        .finally(()=> setLoading(false))
    },[])    
        


    return (
        <div>
            {greeting}
            { loading ? 
            <h1>Cargando...</h1>
            :
            <ItemList productos = {productos} />
            }
            
            
        </div>
    )
}
export default ItemDetailContainer
