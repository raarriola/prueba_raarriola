
import React from 'react'
import {login} from '../utils/api' 
import { Navigate } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { isSigned } from '../utils/api'
import { Container, FormControl, InputGroup, Button } from 'react-bootstrap'

const Login = (props) => {
    let navigate = useNavigate();
    const [isSign,setIsSign] = React.useState(false)

    React.useEffect(() => {
        async function fetchdata(){
            const data = await isSigned()
            console.log('data',data)
            setIsSign(data.signed)
        }
        fetchdata()
    },[])
    
    const [user,setUser] = React.useState("")
    const [pass,setPass] = React.useState("")
    const loginApi=async (event)=>{
        try{
            event.preventDefault()
            const val =await login(user,pass)
            if(val){
                console.log("login")
                navigate('/')
            }
        }
        catch(ex){

        }
    }
    return (
        isSign? <Navigate to="/admin"/>:
        <Container className="mt-4 col-4 shadow rounded" style={{backgroundColor:'white'}} >
            <InputGroup className="mt-3 d-flex">
                <p className="h2 text-center">Inicio de sesión</p>
            </InputGroup>
            <Container className="mt-3 mb-3">
            <form onSubmit={(e)=>loginApi(e)}>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Usuario"
                    value = {user}
                    required
                    onChange = {(e)=>setUser(e.target.value)}
                    />
                    
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Contraseña"
                    type="password"
                    value = {pass}
                    required
                    onChange = {(e)=>setPass(e.target.value)}
                    />
            </InputGroup>
            <div className="d-grid gap-2">
                <Button variant="primary" className="bg-primary" type="submit" size="sm">Log in</Button>
            </div>
            </form>
            </Container>
        </Container>
    )
}

export default Login
