import React from 'react'
import Item from '../Item/Item'
import {memo} from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import { Row} from 'react-bootstrap'
import 'animate.css';



const ItemList = memo(
    ({productos}) =>{
    return (
       

        <Row xs={1} md={2} lg={3} className="g-4 animate__animated animate__fadeInUp animate__slow">
            {productos.map((prod) => <Item key={productos.id} prod={prod} />)}
        </Row>
    )
    }
    )

export default ItemList

