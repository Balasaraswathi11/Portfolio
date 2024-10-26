import React, { useState, useEffect } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation


const Navbar = () => {
  const [show, setShow] = useState(false);
  const location = useLocation(); // Get the current location

  function toggle() {
    setShow(!show);
  }

  
  useEffect(() => {
    setShow(false); 
  }, [location]); 

  return (
    <>
      <header className='flex justify-between px-6 py-4 bg-primary text-lg'>
        <Link to="/" className='font-bold text-2xl'>Bala Saraswathi</Link>
        <nav className='hidden md:block'>
          <ul className='flex justify-between'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <button className="block md:hidden" onClick={toggle}>
          <Bars3Icon className="h-6 w-6 text-black" />
        </button>
      </header>

      {show && (
        <nav className='absolute top-14 left-0 w-full bg-neutral-400 mobilenav z-80'>
          <ul className='flex flex-col items-center text-center'>
            <li className='py-4 w-full border-b-2'><Link to="/">Home</Link></li>
            <li className='py-4 w-full border-b-2'><Link to="/about">About</Link></li>
            <li className='py-4 w-full border-b-2'><Link to="/projects">Projects</Link></li>
            <li className='py-4 w-full border-b-2'><Link to="/resume">Resume</Link></li>
            <li className='py-4 w-full border-b-2'><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      )}
    </>
  );
}
export default Navbar