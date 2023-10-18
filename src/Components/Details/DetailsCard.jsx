
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const DetailsCard = () => {
    const detailsData = useLoaderData()
    const {name, brand, price,select, description,rating,photo} = detailsData;
    return (
        <div className='w-full'>
           <div className='md:w-9/12 mx-auto p-3'>
           <div className='bg-gradient-to-t p-8 rounded-xl to-violet-800 from-black'>
                <img className='lg:w-7/12 mx-auto' src={photo} alt="" />
                <div className='bg-gray-300 w-full mb-2 h-[1px] font-philospar'></div>
                <p className='text-gray-300 capitalize'><span className='text-sky-500 text-lg font-philospar'>Name : </span>{name}</p>
                <p className='text-gray-400 capitalize'><span className='text-sky-500 text-lg font-philospar'>Description : </span>{description}</p>
                <p className='text-teal-600 capitalize'><span className='text-sky-500 text-lg font-philospar'>Brand : </span>{brand}</p>
                <p className='text-gray-300 capitalize'><span className='text-sky-500 text-lg font-philospar'>Select : </span>{select}</p>
                <p className='text-gray-300 capitalize'><span className='text-sky-500 text-lg font-philospar'>Price : </span>{price}</p>
                <p className='text-rose-500 capitalize'><span className='text-sky-500 text-lg font-philospar'>Rating : </span>{rating}</p>
               <div className='w-full flex items-center justify-center '>
               <Link><button className='text-white mt-2 bg-gradient-to-t font-philospar border-b  border-gray-700 rounded  px-6 py-2'>Add To Card</button></Link>
               </div>
            </div>
           </div>
        </div>
    )
}

export default DetailsCard