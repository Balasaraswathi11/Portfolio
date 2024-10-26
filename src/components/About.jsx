import React from 'react'
import girlimage from "../assets/girl.png"

const About = () => {
  return (
    <section className='flex flex-col md:flex-row justify-center items-center border-t-red-200 mt-[30px] gap-3 pb-10'>
        
        <img src={girlimage} className='w-1/2 md:w-1/4' alt="" />
       
       <div className='w-full md:w-1/2'> <h1 className='text-center font-bold text-xl md:text-3xl py-3 font-name  animate-slide-down'>About Me</h1>
       <p className='text-lg px-10 md:text-xl text-center  md:text-left font-font'>Hello! I’m a passionate MERN stack developer eager to create dynamic and responsive web applications. With a solid foundation in MongoDB, Express.js, React.js, and Node.js, I thrive on turning ideas into reality through code.  I enjoy tackling challenges and continuously learning new technologies to enhance my skills.  I believe in the power of collaboration and am excited to contribute to innovative projects that make a difference. Let’s connect and build something amazing together!

</p></div>
        
    </section>
  )
}

export default About