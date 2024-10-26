import React from 'react'
import present from "../assets/present.png"

const Resume = () => {
  const downloadfile=()=>{
const link=document.createElement('a')
link.href="/Resume.pdf"
link.setAttribute('download','Resume.pdf')
document.body.appendChild(link)
link.click();
document.body.removeChild(link)

  }

  return (
  <section className='bg-slate-100 z '>
      
    <div className='flex md:flex-row flex-col justify-center items-center md:px-10 px-2'>
     
      <div className=' w-1/2'>
      <h1 className=' text-2xl md:text-4xl  text-center font-bold md:m-10 m-5'>Resume</h1>
     <p className='font-font text-center '>"Ready to explore my journey? Click below to download my resume and discover the skills, experiences, and passions that drive me forward!"</p>
     <div className=" pt-4 flex justify-center">
            <button onClick={downloadfile} className="bg-slate-800 hover:bg-gray-400 text-white hover:text-black font-bold py-2 px-4 rounded text-center">click
              </button>
            </div>
      
      </div>
      <img src={present} alt="" className='w-2/3 md:w-1/3' />
     
      
    </div>
  </section>
  )
}

export default Resume