import React from 'react'
import { Container, Table, ButtonGroup, Pagination, Row, Col } from 'react-bootstrap'
import { BsEyeFill, BsFillTrashFill, BsPencilFill, BsPlus, BsPlusCircleFill } from 'react-icons/bs'
import ComboBox from '../../components/combobox'
import IconButton from '../../components/iconbutton'
import {get} from '../../utils/api'
const AdminProducts = (props) => {
    const [products,setProducts] = React.useState([])
    const [pageNumber,setPageNumber] = React.useState(1)
    const [pageSize,setPageSize] = React.useState(10)
    const [totalPages,setTotalPages] = React.useState(10)
    const [activePage,setActivePage] = React.useState(1)
    React.useEffect(()=>{
        async function fetchdata(){
            try{
            const data = await get('products',true)
            setProducts(data)
            }
            catch(ex){}
        }
        fetchdata()
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
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
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
                        <td>{item.description}</td>
                        <td>{item.price}</td>
                        <td>{item.inventory}</td>
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