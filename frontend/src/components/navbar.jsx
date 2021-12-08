import React from 'react'
import { Navbar, Container,Row,Nav, Col, Form, FormControl, Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs'
import { useNavigate } from 'react-router';
import { isSigned,logout } from '../utils/api';
const Header = (props) => {
    let navigate = useNavigate();
    const [isSign,setIsSign] = React.useState(false)
    const [isLoading,setIsLoading] = React.useState(true)
    React.useEffect(() => {
        async function fetchdata(){
            const data = await isSigned()
            console.log('data',data)
            setIsSign(data.signed)
        }
        fetchdata()
    })
    const logOut = async ()=>{
        await logout();
        navigate("/")
    }
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
                                {isSign?<Button variant="outline-success" onClick={(e)=>logOut()}>Log out</Button>:null}
                                {!isSign?<Button variant="outline-success" onClick={(e)=>navigate("/login")}>Log in</Button>:null}
                                {isSign?<Button variant="outline-success" onClick={(e)=>navigate("/admin")}>Admin</Button>:null}
                            </div>
                        </Col>
                    </Row></Container>
            </Navbar.Collapse>
            </Container>
            </Navbar>
    )
}

export default Header
