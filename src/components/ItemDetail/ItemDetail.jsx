import React from 'react'
import ItemCounter from '../ItemCounter/ItemCounter'
import {useState} from 'react'
import {Link} from 'react-router-dom'

import { useCartContext } from '../../context/CartContext'
import { Card, Button, Container,Row,Col} from 'react-bootstrap'
import { CartWidget } from '../CartWidget/CartWidget'
import '../../styles/styles.css'
import 'animate.css';

//Detalles individuales de cada producto.

const ItemDetail = ({productos}) => {

    const [irCarrito, setIrCarrito] = useState ('comprando');

    const {agregarCarrito} = useCartContext()

    const onAdd = (cantidad) => {
        setIrCarrito ('irCarrito')
        agregarCarrito({...productos, cant:cantidad})
    }

    return (

        <div className='fondo PT0'>


            <Container fluid>
                <Row className='alinearItemDetail animate__fadeInUp animate__animated '>
                    <Col md={4}>

                        <Card  bg='' className='fondo anchoCard'>
                            <Card.Img variant="top" className='altoFotoCard' src={productos.foto} />
                            <Card.Body className='fondoInfoDetail'>
                                <Card.Text className='textoBlanco textoTeko30' >
                                {`No pierdas la oportunidad de adquirir este increíble colecionable de ${productos.nombre}`}
                                </Card.Text>
                                <Button variant="outline-light"><Link to='/' className='textoBlanco'>Más coleccionables...</Link></Button>
                            </Card.Body>
                        </Card>

                    </Col>

                    <Col md={3} className='fondoInfoDetail'>

                        <h1 className='textoBlanco textoTeko35'>{`${productos.nombre}`}</h1>
                        <h3 className='textoBlanco textoTeko35'>{`$${productos.precio}`}</h3>
                        <h4 className='textoBlanco textoTeko30'>{`${productos.detalles}`}</h4>
                        <h5 className='textoBlanco textoTeko30'>{`Tipo de coleccionable: ${productos.categoria.toUpperCase()}`}</h5>

                    </Col>

                    <Col md={3} className='fondoInfoDetail'>
                        <h4 className='textoBlanco textoTeko35'>{`${productos.stock} unidades disponibles` }</h4>

                        {irCarrito === 'comprando' ?
                            (<ItemCounter stock = {productos.stock} onAdd = {onAdd}/>)
                        : 
                        (<Button variant="outline-light"><Link to= '/cart' className='textoBlanco'><CartWidget/></Link></Button>)
                        }

                    </Col >
                </Row>
               
            </Container>





            
        
        </div>
    )
}
 export default ItemDetail