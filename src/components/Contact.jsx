import React from 'react'
import image from "../assets/shaking.png"

const Contact = () => {
  return (
    <section className='flex flex-col md:flex-row justify-center bg-slate-800'>
    
        <div className='px-20'>
            <img src={image} alt="" className='w-full' />
        </div>
        <div className=' text-white md:w-1/2 flex items-center rounded-sm flex-col justify-start'><h1 className=' text-2xl md:text-4xl  text-center font-bold md:m-10 m-5 animate-bounce'>Contact me</h1>
       
            <p className='font-font text-center md:text-xl animate-slide-down'  > <b>Email:</b>    twilightestrella@gmmail.com</p>
            <p className='font-font text-center  md:text-xl'> <b>phone:</b>  357687687687</p>

        </div>
        
    </section>
  )
}

export default Contact