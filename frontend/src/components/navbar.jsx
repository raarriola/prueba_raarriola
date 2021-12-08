import React from 'react'
import { Navbar, Container,Row,Nav, Col, Form, FormControl, Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs'
const Header = (props) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary " variant="dark" className="fixed-top">
            <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <br/>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col sm={3}/>
                        <Col sm={6}><Form className="d-flex search-bord">
                            <FormControl
                                type="search"
                                placeholder="Buscar"
                                className="me-2 search-input"
                                aria-label="Buscar"
                            />
                            <Button variant="success btn-search btn-circle btn-sm"> <BsSearch className="icon-search"/></Button>
                        </Form></Col>
                        <Col sm={3}>
                            <div class="d-flex flex-row-reverse">
                                <Button variant="outline-success">ads</Button>
                            </div>
                        </Col>
                    </Row></Container>
            </Navbar.Collapse>
            </Container>
            </Navbar>
    )
}

export default Header
