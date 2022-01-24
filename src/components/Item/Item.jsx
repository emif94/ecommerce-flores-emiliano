import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button} from 'react-bootstrap'
import '../../styles/styles.css'


function Item ({prod}) {
    return (
        <div
            key = {prod.id}
            
        >
            <div>                
            
                <Card className='MB3 anchoCard fondo PT0'>
                    <Card.Img variant="top" src={prod.foto} className='altoFotoCard'/>
                    <Card.Body className='fondoInfoDetail'>
                        <Card.Text className='textoBlanco textoTeko35'>{prod.nombre}</Card.Text>
                        <Card.Text  className='textoBlanco textoTeko30 '>
                        Tipo: {prod.categoria.toUpperCase()}<br/>
                       <span className='textoBlanco textoTeko35 '>${prod.precio}</span> 

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
