import React from 'react'
import {Container,Row,Col, Card} from 'react-bootstrap'
import CardItem from './carditem'

const ProductsList = (props) => {
    return (
        <Container>
        {
            props.items===undefined?null:
            <Row>
                {props.items.map(i=>
                <Col sm={4} className="d-flex justify-content-center">
                    <CardItem title={i.name} img={i.img}>
                        {i.price}
                    </CardItem>
                </Col>)
                }
            </Row>
        }
        </Container>
    )
}

export default ProductsList
