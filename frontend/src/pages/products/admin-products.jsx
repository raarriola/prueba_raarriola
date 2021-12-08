import React from 'react'
import { Container, Table, ButtonGroup, Pagination, Row, Col, Modal, Button, Form,FloatingLabel } from 'react-bootstrap'
import { BsEyeFill, BsFillTrashFill, BsPencilFill, BsPlus, BsPlusCircleFill} from 'react-icons/bs'
import ComboBox from '../../components/combobox'
import IconButton from '../../components/iconbutton'
import ModalProduct from './components/modal'
import {destroy, get,post, put} from '../../utils/api'
import {useFormik} from 'formik'
const AdminProducts = (props) => {
    const formik = useFormik({
        initialValues:{
            id:0,
            name:'',
            sku:'',
            description:'',
            price:0,
            inventory:0,
            image:null
        },
        onSubmit:values =>{
           saveChanges()
        }
    })
    const deleteProduct = async(id)=>{
        try{
            const data = await destroy(`product/${id}`,true)
            setProducts(products.filter(i=>i.id!==id))
        }
        catch(ex){

        }
    }
    const saveChanges=async ()=>{
        try{
            if(createMode){
                const data = await post('products',true,formik.values)
                setProducts([...products,data])
            }
            else if(editMode)
            {
                const data = await put(`product/${formik.values.id}`,true,formik.values)
                setProducts(products.map(i=>{
                    if(data.id===i.id){
                        return data
                    }
                    else
                        return i
                }))
            }
            setOpenDialog(false)
        }
        catch(ex){}
    }
    const [products,setProducts] = React.useState([])
    const [openDialog,setOpenDialog] = React.useState(false)
    const [editMode,setEditMode] = React.useState(true)
    const [createMode,setCreateMode] = React.useState(true)
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
    const loadProduct = async(id)=>{
        try{
            console.log('sssss')
            const data = await get(`product/${id}`,true)
            formik.setFieldValue('id',data.id)
            formik.setFieldValue('name',data.name)
            formik.setFieldValue('sku',data.sku)
            formik.setFieldValue('description',data.description)
            formik.setFieldValue('price',Number(data.price))
            formik.setFieldValue('inventory',Number(data.inventory))
            setOpenDialog(true)
        }
        catch(ex){

        }
    }
    return (
        <div>
        <Modal show={openDialog} onHide={()=>setOpenDialog(false)}>
            <Form onSubmit={formik.handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title>Producto {formik.values.id==0?"":formik.values.id}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FloatingLabel label="Nombre" controlId="name">
                    <Form.Control placeholder="Nombre" 
                        required className="mb-2" readOnly={!(createMode|editMode)} onChange={formik.handleChange} value={formik.values.name}/></FloatingLabel>
                <FloatingLabel label="SKU" controlId="sku">
                    <Form.Control placeholder="SKU" required className="mb-2"  
                        readOnly={!(createMode|editMode)} onChange={formik.handleChange} value={formik.values.sku}/></FloatingLabel>
                <FloatingLabel label="Descripcion" controlId="description">
                    <Form.Control placeholder="Descripcion" required 
                        readOnly={!(createMode|editMode)} className="mb-2"  onChange={formik.handleChange} value={formik.values.description}/></FloatingLabel>
                <FloatingLabel label="Precio" controlId="price">
                    <Form.Control placeholder="Precio" required className="mb-2"  type="number" min="0.1" step="0.1"
                        readOnly={!(createMode|editMode)} onChange={formik.handleChange} value={formik.values.price}/></FloatingLabel>
                <FloatingLabel label="Cantidad" controlId="inventory">
                    <Form.Control placeholder="Cantidad" required className="mb-2" type="number" min="1" step="1"
                        readOnly={!(createMode|editMode)} onChange={formik.handleChange} value={formik.values.inventory}/></FloatingLabel>
                <Form.Group controlId="formFileSm" className="mb-2" >
                    <Form.Control type="file" size="sm" accept="image/*" disabled={!(createMode|editMode)}/>
                </Form.Group>
            </Modal.Body>
            
            <Modal.Footer>
               <Button className="bg-primary" variant="primary" type="submit">Guardar</Button>
               <Button variant="secondary" onClick={(e)=>setOpenDialog(false)}>Cerrar</Button>
            </Modal.Footer>
            </Form>
        </Modal>
        {/* <Container className="mt-3">
            <Row>
                <Col xs={12} sm={2}>Cantidad de filas<ComboBox size="sm" options={[10,20,30]}/></Col>
            </Row>
        </Container> */}
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
                        <th> <IconButton icon={<BsPlusCircleFill/>}
                            onClick={(e)=>{formik.resetForm();setOpenDialog(true); setEditMode(false); setCreateMode(true)}}/></th>
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
                                <IconButton onClick ={(e)=>{setEditMode(false);setCreateMode(false);loadProduct(item.id)}} icon={<BsEyeFill/>}/>
                                <IconButton onClick ={(e)=>{setEditMode(true);setCreateMode(false);loadProduct(item.id)}} icon={<BsPencilFill/>}/>
                                <IconButton onClick ={(e)=>{deleteProduct(item.id)}} icon={<BsFillTrashFill/>}/>
                            </ButtonGroup>
                        </td>
                    </tr>)
                }
                </tbody>
            </Table>
        </Container>
        <Container className="d-flex justify-content-md-center">
            {/* <Pagination>
                {

                    Array.from(Array(totalPages).keys()).map((i,index)=>{
                        if(index+1 === activePage)
                            return <Pagination.Item active>{index+1}</Pagination.Item>
                        else 
                            return <Pagination.Item onClick={(e)=>setActivePage(index+1)}>{index+1}</Pagination.Item>
                    })
                }
            </Pagination> */}
        </Container>
        </div>
    )
}

export default AdminProducts