
import React from 'react'
import Banner from '../Banner/Banner'
import { useLoaderData } from 'react-router-dom'
import HomeCard from '../HomeCard/HomeCard'
import Footer from '../Footer/Footer'
import Discount from '../Discount/Discount'

const Home = () => {
    const homeCardData = useLoaderData()
    return (
        <div>
            <Banner/>
           <div className='w-9/12 mx-auto  mt-[900px]   relative  '>
            <div className='absolute text-black font-philospar text-center w-full rounded-e-xl  -top-36'>
                <h1 className='text-5xl font-bold'>Choice You Any Brand</h1>
                <p className='text-gray-500 mb-20 mt-5'>Our user-friendly official site and App lets you search for a laptop in your price range. You can also check <br /> brand-wise laptops such as samsung Apple, Asus, Acer, HP,   Lenovo, Gigabyte, Doel & Avita. Laptops.</p>
            </div>
           <div className='grid grid-cols-1 mb-20 md:grid-cols-2 lg:grid-cols-3  gap-4'>
                {homeCardData?.map(data => <HomeCard key={data.id} cardData={data}/>)}
            </div>
           </div>
           <Discount/>
           <Footer />
        </div>
    )
}

export default Home