
import React from 'react'
import { useLoaderData } from 'react-router-dom'

const MyCard = () => {
    const data = useLoaderData()
    console.log(data);
    const {name, brand, price,select, description,rating,photo} = data;
    return (
        <div>
           <div>
                <img src={photo} alt="" />
                <p>{price}</p>
           </div>
        </div>
    )
}

export default MyCard