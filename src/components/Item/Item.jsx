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
            
                <Card style={{ width: '20rem' }} className='MB3'>
                    <Card.Img variant="top" src={prod.foto} style={{ maxHeight: '300px' }}/>
                    <Card.Body>
                        <Card.Title>{prod.nombre}</Card.Title>
                        <Card.Text>
                        {prod.categoria}
                        </Card.Text>
                        <Button variant="primary">
                            <Link to= {`/detalles/${prod.id}`} className = "textoBlanco">Detalles</Link>
                        </Button>
                    </Card.Body>
                    
                </Card>
                
              
                
                
            </div>
            
        </div>
    )
}

export default Item
