
import React from 'react'
import { useLoaderData } from 'react-router-dom'

const DetailsCard = () => {
    const detailsData = useLoaderData()
    const {name, brand, price,select, description,rating,photo} = detailsData;
    return (
        <div className='w-full'>
           <div className='w-8/12 mx-auto p-5'>
           <div className='bg-gradient-to-t to-violet-800 from-black'>
                <img className='w-7/12 mx-auto' src={photo} alt="" />
                <p className='text-gray-600 capitalize'><span className='text-violet-800 text-lg font-philospar'>Name : </span>{name}</p>
                <p className='text-gray-600 capitalize'><span className='text-violet-800 text-lg font-philospar'>Description : </span>{description}</p>
                <p className='text-gray-600 capitalize'><span className='text-violet-800 text-lg font-philospar'>Brand : </span>{brand}</p>
                <p className='text-gray-600 capitalize'><span className='text-violet-800 text-lg font-philospar'>Select : </span>{select}</p>
                <p className='text-gray-600 capitalize'><span className='text-violet-800 text-lg font-philospar'>Price : </span>{price}</p>
                <p className='text-gray-600 capitalize'><span className='text-violet-800 text-lg font-philospar'>Rating : </span>{rating}</p>
            </div>
           </div>
        </div>
    )
}

export default DetailsCard