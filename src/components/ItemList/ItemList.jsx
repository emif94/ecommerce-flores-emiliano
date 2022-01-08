import React from 'react'
import Item from '../Item/Item'
import {memo} from 'react'
import { CartWidget } from '../CartWidget/CartWidget'



const ItemList = memo(
    ({productos}) =>{
    return (
        <div>
            {productos.map((prod)=> <Item key= {productos.id} prod = {prod} />)}
        </div>
    )
    }
    )

export default ItemList

