import React from 'react'
import CardItem from '../components/carditem'
import ProductsList from '../components/productslist'
import {get} from '../utils/api'

const Home = () => {
    const [products,setProducts] = React.useState([])
    React.useEffect(()=>{
        async function fetchdata(){
        try{
                const data = await get('products/home')
                setProducts(data.map(i=>{return {...i,img:"data:image/jpeg;base64,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"}}))
            }
            catch(ex){
                console.log(ex)
            }
        }
        fetchdata()
    },[])
    return (
        <div>
            <ProductsList
                items={products } />
        </div>
    )
}

export default Home
