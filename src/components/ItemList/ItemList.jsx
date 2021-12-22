import React from 'react'
import Item from '../Item/Item'


function ItemList  ({productos}) {
    return (
        <div>
            {productos.map((prod)=> <Item key= {productos.id} prod = {prod} />)}
        </div>
    )
}

export default ItemList

