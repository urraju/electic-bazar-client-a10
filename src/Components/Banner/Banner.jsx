
import React from 'react'
import DarkMode from '../Dark/DarkMode'

const Banner = () => {
    return (
        <div className='bg-backgroudBanner absolute -z-30 top-0 bg-cover bg-no-repeat w-full h-[750px]'>
            <div className='h-full -z-30  w-full bg-black opacity-50'></div>

          <div className='flex w-9/12 mx-auto items-center justify-center top-60 md:top-80  md:left-52 left-12 absolute'>
            
          <div className='font-philospar '>
                <h1 className='text-white first-letter:text-6xl first-letter:text-sky-500 font-semibold text-5xl'>You can intarest visit <br /> Our Electic Bazar</h1>
                <p className='text-white font-light mt-4  tracking-widest'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt veniam corrupti exercitationem. <br /> Quae reprehenderit excepturi, natus repellendus temporibus perspiciatis recusandae.</p>
                <button className='backdrop-blur bg-white/20 text-white px-5 py-2 mt-3   rounded'>Visit Now</button>
                <DarkMode/>
            </div>
          </div>
        </div>
    )
}

export default Banner