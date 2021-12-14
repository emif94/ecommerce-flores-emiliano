import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'


function ItemList  ({productos}) {
    return (
        <>
            {productos.map((prod)=> <ItemDetail prod = {prod} />)}
            {console.log (productos)}
        </>
    )
}

export default ItemList

