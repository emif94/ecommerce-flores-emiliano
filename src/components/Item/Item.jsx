import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, Row} from 'react-bootstrap'
import '../../styles/styles.css'


function Item ({prod}) {
    return (
        <div
            key = {prod.id}
            
        >
            <div>                
            
                <Card style={{ width: '20rem' }} className='MB3'  className='fondo'>
                    <Card.Img variant="top" src={prod.foto} style={{ maxHeight: '300px' }}/>
                    <Card.Body className='fondoInfoDetail'>
                        <Card.Text className='textoBlanco textoItemDetail'>{prod.nombre}</Card.Text>
                        <Card.Text  className='textoBlanco textoItemDetail'>
                        {prod.categoria}
                        </Card.Text>
                        <Button variant="outline-light">
                            <Link to= {`/detalles/${prod.id}`} className = "textoBlanco">Detalles</Link>
                        </Button>
                    </Card.Body>
                    
                </Card>
                
              
                
                
            </div>
            
        </div>
    )
}

export default Item
