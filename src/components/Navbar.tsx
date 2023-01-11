import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { Expo, gsap } from 'gsap'
import {FaBars} from 'react-icons/fa'
const Navbar = () => {
    const [collapse, setCollapse] = useState(true)
    useEffect(() => {
        gsap.fromTo(
          ".nav-item",
          {
              y: -100,

          },
          {
            y: 0,
            ease: Expo.easeInOut,
              duration: 1.3,
            
            
          }
        );


        gsap.fromTo('.logo', {
x: -90,
        }, {
            x: 0,
            duration: 1
        })


        gsap.fromTo('.btn', {
          x:200  
        }, {

            x: 0,
            duration: 1.3,
            
        })
},[])
  return (
      <nav className='container flex items-center justify-between capitalize pl-2 text-white h-[6rem] nav md:pr-0 max-sm:pr-4 relative'>
          <a href="" className='w-20 logo'>
              <img src={logo} alt="" className='-rotate-90 w-full' />
          </a>
          <ul className={`flex justify-evenly w-1/2 nav-item max-sm:flex-col max-sm:absolute max-sm:top-24 max-sm:text-primary max-sm:bg-white max-sm:w-full max-sm:left-0 max-sm:h-32 max-sm:${collapse?'hidden': ""} max-sm:pl-2`}>
              <li>
                  <a href="">Home</a>

              </li>
              <li>
                  <a href="">About</a>
              </li>
              <li>
                  <a href="">services</a>
              </li>
          </ul>

          <button className='bg-amber-600 rounded px-3 py-2 btn'>Let's Talk</button>
          
          <button onClick={()=>setCollapse(!collapse)}>
              
          <FaBars className="text-amber-600 block md:hidden" size={30}/>
          </button>

    </nav>
  )
}

export default Navbar