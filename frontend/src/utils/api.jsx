import axios from 'axios'
let baseapi = 'http://144.126.213.215:8000/'

const get = async (url, auth=false)=>{
    if(!auth){
        const response = await axios.get(baseapi+url)
        return response.data}
    else{
        const session = await isSigned()
        const response = await axios.get(baseapi+url,{headers:{
            Authorization: session.access
        }})
        return response.data
    }
}
const post = async (url, auth=false,body)=>{
    if(!auth){
        const response = await axios.post(baseapi+url,body)
        return response.data}
    else{
        const session = await isSigned()
        const response = await axios.post(baseapi+url,body,{headers:{
            Authorization: session.access
        }})
        console.log(response)
        return response.data
    }
}
const destroy = async (url, auth=false)=>{
    if(!auth){
        const response = await axios.delete(baseapi+url)
        return response.data}
    else{
        const session = await isSigned()
        const response = await axios.delete(baseapi+url,{headers:{
            Authorization: session.access
        }})
        console.log(response)
        return response.data
    }
}
const put = async (url, auth=false,body)=>{
    if(!auth){
        const response = await axios.put(baseapi+url,body)
        return response.data}
    else{
        const session = await isSigned()
        const response = await axios.put(baseapi+url,body,{headers:{
            Authorization: session.access
        }})
        console.log(response)
        return response.data
    }    
}
const login = async (user,pass)=>{
    try{
        const resp = await axios.post(baseapi+"token/",{
            "username":user,
            "password":pass
        })
        sessionStorage.setItem("user",JSON.stringify({
            refresh:`Bearer ${resp.data.refresh}`,
            access:`Bearer ${resp.data.access}`,
        }))
        return true;
    }
    catch(ex)
    {
        console.log(ex)
        return false;
    }
}
const isSigned=async ()=>{
    const session = JSON.parse(sessionStorage.getItem('user'))
    let data = { signed:false, access:null,refresh:null}
    try{
        if(session){
            data["signed"]=true
            data["access"]=session.access
            data["refresh"]=session.refresh
        }
    }
    catch(ex){

    }
    return data;

}
const logout = async ()=>{
    sessionStorage.clear()
}
export {get, login, isSigned, logout, post, put, destroy}