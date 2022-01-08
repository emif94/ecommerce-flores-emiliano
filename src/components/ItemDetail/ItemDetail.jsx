import React from 'react'
import ItemCounter from '../ItemCounter/ItemCounter'
import {useState} from 'react'
import {Link} from 'react-router-dom'

import { useCartContext } from '../../context/CartContext'
import { Card, Button, Container,Row,Col} from 'react-bootstrap'
import { CartWidget } from '../CartWidget/CartWidget'
//import { CartContext } from '../../context/CartContext'



const ItemDetail = ({productos}) => {

    const [irCart, setIrCart] = useState ('comprando');

    const {cartList, agregarCarrito} = useCartContext()

    const onAdd = (cantidad) => {
        console.log (cantidad)
        setIrCart ('irCarrito')
        agregarCarrito({...productos, cant:cantidad})
    }
        console.log (cartList)
    return (
        <div className='fondo'>

            {/*<Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={productos.foto} />
                <Card.Body>
                    <Card.Title>{`${productos.nombre}`}</Card.Title>
                    <Card.Text>
                    {`${productos.detalles}`}
                    </Card.Text>
                    <Card.Text>
                    {`$${productos.precio}`}
                    </Card.Text>
                    
                    <Button variant="primary"><Link to= '/cart'><CartWidget/></Link></Button>
                </Card.Body>
    </Card>*/}

            <Container>
                <Row className='alinearItemDetail'>
                    <Col md={3}>

                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={productos.foto} />
                        <Card.Body>
                            <Card.Text>
                            {`No pierdas la oportunidad de adquirir este increíble colecionable de ${productos.nombre}`}
                            </Card.Text>
                            <Button variant="primary"><Link to='/' className='textoBlanco'>Mirá nuestros productos!</Link></Button>
                        </Card.Body>
                    </Card>




                    </Col>

                    <Col md={6}>

                        <h1 className='textoBlanco'>{`${productos.nombre}`}</h1>
                        <h3 className='textoBlanco'>{`$${productos.precio}`}</h3>
                        <h4 className='textoBlanco'>{`${productos.detalles}`}</h4>
                        <h5 className='textoBlanco'>{`Tipo de coleccionable: ${productos.categoria}`}</h5>

                    </Col>

                    <Col>
                        <h4 className='textoBlanco'>{`${productos.stock} unidades disponibles` }</h4>
                        {irCart === 'comprando' ?
                            (<ItemCounter stock = {productos.stock} onAdd = {onAdd}/>)
                        : 
                        (<Button variant="primary"><Link to= '/cart'><CartWidget/></Link></Button>)
                        }

                    </Col>
                </Row>
               
            </Container>





            
        
        </div>
    )
}
 export default ItemDetail