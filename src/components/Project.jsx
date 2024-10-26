import React from 'react';
import todo from "../assets/todo.png"
import weather from "../assets/weather.jpg"
import lmspic from "../assets/lmspic.jpg"
const Project = () => {
  const handleClick = () => {
    window.open("https://learnermanagementsystem-fe.netlify.app", "_blank"); // Open in a new tab
  };
  const todoclick=()=>{
    window.open("https://todo-react-25.netlify.app/")
  }
  const weatherclick=()=>{
    window.open("https://restcountries-cards.netlify.app/")
  }
  return (
    <>
      <section className='bg-slate-800 pb-10'>
        <h1 className="text-white text-4xl text-center font-bold py-10">Projects</h1>
        <div className='flex justify-center flex-wrap'>
          
          {/* Card 1 */}
          <div className="max-w-sm rounded overflow-hidden m-4 bg-white shadow-lg">
            <img 
              className="w-full h-48 object-cover" 
              src={lmspic}
              alt="Card Image 1" 
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Learner Management system</div>
              <p className="text-gray-700 text-base">
              This Learner Management System combines a user-friendly React frontend with a robust Node.js backend, enabling efficient course management, user authentication, and seamless collaboration between educators and learners.
              </p>
            </div>
          <div className="px-6 pt-4 pb-2">
            <button  className="bg-slate-800 hover:bg-gray-400 text-white hover:text-black font-bold py-2 px-4 rounded" onClick={handleClick}>click
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="max-w-sm rounded overflow-hidden m-4 bg-white shadow-lg">
            <img 
              className="w-full h-48 object-cover" 
              src={todo} 
              alt="Card Image 2" 
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2"> Simple Todo app</div>
              <p className="text-gray-700 text-base">
              This To-Do app is a simple and intuitive task manager built with React, allowing users to easily create, update, and delete tasks. It features a clean interface and local storage for persistent data management.


              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
            <button className="bg-slate-800 hover:bg-gray-400 text-white hover:text-black font-bold py-2 px-4 rounded" onClick={todoclick}>click
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="max-w-sm rounded overflow-hidden m-4 bg-white shadow-lg">
            <img 
              className="w-full h-48 object-cover" 
              src={weather} 
              alt="Card Image 3" 
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Weather app</div>
              <p className="text-gray-700 text-base">
              This weather app provides real-time weather updates and forecasts using a user-friendly interface. Built with React, it allows users to search for locations and view detailed weather information, including temperature, humidity, and conditions.


              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
            <button className="bg-slate-800 hover:bg-gray-400 text-white hover:text-black font-bold py-2 px-4 rounded" onClick={'https://restcountries-cards.netlify.app/'}>click
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Project;
