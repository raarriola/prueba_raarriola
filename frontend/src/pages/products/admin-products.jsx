import React from 'react'
import { Container, Table, ButtonGroup, Pagination, Row, Col } from 'react-bootstrap'
import { BsEyeFill, BsFillTrashFill, BsPencilFill, BsPlus, BsPlusCircleFill } from 'react-icons/bs'
import ComboBox from '../../components/combobox'
import IconButton from '../../components/iconbutton'

const AdminProducts = (props) => {
    const [products,setProducts] = React.useState([])
    const [pageNumber,setPageNumber] = React.useState(1)
    const [pageSize,setPageSize] = React.useState(10)
    const [totalPages,setTotalPages] = React.useState(10)
    const [activePage,setActivePage] = React.useState(1)
    React.useEffect(()=>{
        setProducts([
            {id:1,name:"P1",sku:"P100001",price:12.00},
            {id:2,name:"P2",sku:"P200002",price:13.00},
            {id:3,name:"P3",sku:"P300003",price:14.00},
            {id:4,name:"P4",sku:"P400004",price:15.00}
        ])
    },[])
    return (
        <div>
        <Container className="mt-3">
            <Row>
                <Col xs={12} sm={2}>Cantidad de filas<ComboBox size="sm" options={[10,20,30]}/></Col>
            </Row>
        </Container>
        <Container>
            <br/>
            <Table striped bordered size="sm" responsive>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>SKU</th>
                        <th>Precio</th>
                        <th> <IconButton icon={<BsPlusCircleFill/>}/></th>
                    </tr>
                </thead>
                <tbody>
                {
                    products.length===0?null:
                    products.map(item=>
                    <tr id={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.sku}</td>
                        <td>{item.price}</td>
                        <td>
                            <ButtonGroup>
                                <IconButton icon={<BsEyeFill/>}/>
                                <IconButton icon={<BsFillTrashFill/>}/>
                                <IconButton icon={<BsPencilFill/>}/>
                            </ButtonGroup>
                        </td>
                    </tr>)
                }
                </tbody>
            </Table>
        </Container>
        <Container className="d-flex justify-content-md-center">
            <Pagination>
                {

                    Array.from(Array(totalPages).keys()).map((i,index)=>{
                        if(index+1 === activePage)
                            return <Pagination.Item active>{index+1}</Pagination.Item>
                        else 
                            return <Pagination.Item onClick={(e)=>setActivePage(index+1)}>{index+1}</Pagination.Item>
                    })
                }
            </Pagination>
        </Container>
        </div>
    )
}

export default AdminProducts