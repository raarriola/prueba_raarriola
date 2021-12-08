import React from 'react'
import { Card, Button, Container, Row, Col} from 'react-bootstrap'
import { BsFillEyeFill } from 'react-icons/bs'
import {get} from '../utils/api'
const CardItem = (props) => {
    const[img,setImg] = React.useState('')
    React.useEffect(()=>{
        async function loadImg(){
            try{
                const result = await get(`product/${props.id}/image64`,false)
                if(result)
                {
                    setImg(result.head+result.encod)
                    console.log(result)
                }   
            }
            catch(ex){console.log(ex)}
        }
        loadImg()
    },[])
    return (
        <Card style={{ width: '18rem', marginTop: '10px', padding:'10px'}} className="card-item shadow rounded">
            <Card.Img variant="top" src={img===''?process.env.PUBLIC_URL + '/default.png':img} />
            <Card.Body className="body-card">
                <Container className="container-card">
                    <Row>
                        <Col xs={9} className="col-card">
                        <Card.Title><h6>{props.title}</h6></Card.Title>
                        <Card.Text>
                            {props===undefined?null:props.children}
                        </Card.Text>
                        </Col>
              {/*           <Col xs={3} className="col-card d-flex align-items-end">
                            <Button variant="btn sm d-flex align-items-center "> <BsFillEyeFill/></Button>
                        </Col> */}
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}

export default CardItem
