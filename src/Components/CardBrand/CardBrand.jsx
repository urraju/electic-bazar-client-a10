
import React from 'react'
import { Link } from 'react-router-dom';

const CardBrand = ({brandCard}) => {
    const {_id ,name, brand, price, rating,photo} = brandCard;
    return (
        <div>
       
           
           <div className='border p-7 font-philospar'>
           <img src={photo} alt="" />
           <p className='capitalize text-gray-500'><span className='text-lg text-sky-950 font-semibold'>Name : </span>{name}</p>
           <p className='capitalize text-gray-500'><span className='text-lg text-sky-950 font-semibold'>Brand N : </span>{brand}</p>
           <p className='capitalize text-gray-500'><span className='text-lg text-sky-950 font-semibold'>Rating : </span>{rating}</p>
           <p className='capitalize text-gray-500'><span className='text-lg text-sky-950 font-semibold'>Price : </span>{price}</p>
          <div className='flex gap-3 mt-3'>
          <Link to={`/detailsCard/${_id}`}><button className='bg-sky-500 px-3 text-white rounded'>Details</button></Link>
            <Link to={`/updateData/${_id}`}><button  className='bg-sky-500 px-3 text-white rounded'>Update</button></Link>
          </div>
           </div>
        </div>
    )
}

export default CardBrand