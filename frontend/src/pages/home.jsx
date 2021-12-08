import React from 'react'
import CardItem from '../components/carditem'
import ProductsList from '../components/productslist'

const Home = () => {
    return (
        <div>
            <ProductsList
                items={[{
                    name:"Fancy P1",
                    description:"Awesome Lotem ipsum 1",
                    img:"https://holatelcel.com/wp-content/uploads/2020/09/cheems-memes-9.jpg"
                },
                {
                    name:"Fancy P2",
                    description:"Awesome Lorem ipsum 2",
                    img:"https://www.nacionrex.com/__export/1590864876789/sites/debate/img/2020/05/30/dogs_meme_crop1590864505475.jpg_423682103.jpg"
                },
                {
                    name:"Fancy P3",
                    description:"Awesome Lorem ipsum 3",
                    img:"https://i.pinimg.com/736x/3f/55/a9/3f55a9d405d36b26009c907322c6f6ba.jpg"
                },
                {
                    name:"Fancy P4",
                    description:"Awesome Lorem ipsum 4",
                    img:"https://yt3.ggpht.com/ytc/AKedOLSPLqaWiisMNS5oJiANTK965TwBMesAmV8uEsE8=s900-c-k-c0x00ffffff-no-rj"
                },
                {
                    name:"Fancy P1",
                    description:"Awesome Lotem ipsum 1",
                    img:"https://holatelcel.com/wp-content/uploads/2020/09/cheems-memes-9.jpg"
                },
                {
                    name:"Fancy P2",
                    description:"Awesome Lorem ipsum 2",
                    img:"https://www.nacionrex.com/__export/1590864876789/sites/debate/img/2020/05/30/dogs_meme_crop1590864505475.jpg_423682103.jpg"
                },
                {
                    name:"Fancy P3",
                    description:"Awesome Lorem ipsum 3",
                    img:"https://i.pinimg.com/736x/3f/55/a9/3f55a9d405d36b26009c907322c6f6ba.jpg"
                },
                {
                    name:"Fancy P4",
                    description:"Awesome Lorem ipsum 4",
                    img:"https://yt3.ggpht.com/ytc/AKedOLSPLqaWiisMNS5oJiANTK965TwBMesAmV8uEsE8=s900-c-k-c0x00ffffff-no-rj"
                },
            ]}
            />
        </div>
    )
}

export default Home
