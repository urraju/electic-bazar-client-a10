 

 import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import MyCard2 from '../MyCard/MyCard2';
 
 const MyCard = () => {
    const useData = useLoaderData()
    const [deleted , setDeleted] = useState(useData)
     
    console.log(useData[0].name);
    console.log(useData);
    return (
       <div className='h-sreen w-full mt-10 bg-black bg-gradient-to-t p-4  from-violet-800'>
        <div>
            <h1 className='text-white text-center font-philospar text-4xl first-letter:text-5xl first-letter:text-sky-500'>You want to Add more product</h1>
        </div>
         <div className='w-9/12 mx-auto mt-20'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {deleted.map(item => <MyCard2 key={item._id} data={item} setDeleted={setDeleted} useData={deleted} />)}
          </div>
        </div>
       </div>
    )
 }
 
 export default MyCard