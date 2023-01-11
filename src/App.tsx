import { useState, useLayoutEffect, useEffect } from 'react'
import reactLogo from './assets/react.svg'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Banner from './components/Banner';
import Services from './components/Services';
import Navbar from './components/Navbar';
import Works from './components/Works';
import About from './components/About';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
   if (typeof window !== "undefined") {
     gsap.registerPlugin(ScrollTrigger);
   }

    gsap.fromTo(
      ".main",
      {
        backgroundColor: "black",
      },
      {
        backgroundColor: "#0e265e",
        duration: 6,
        yoyo: true,
        yoyoEase: "ease"
      }
    ).yoyo(true).repeat(10).timeScale(2).play(0.5);
  },[])

  return (
    <div className="App ">
      <div className="bg-primary main">
        <Navbar />
        <Banner />
      </div>
      <Services />
      <Works />
      <About />

      <footer className="bg-primary h-60 pt-20">
        <button className="bg-amber-700 text-white block mx-auto px-20 py-4 text-3xl rounded  ">
          Contact Us
        </button>

        <div></div>
      </footer>
      <div></div>
      <div className="bg-primary text-white text-center">
        Designed and built by 
        <a href='https://www.codebyte.me' className=" text-center text-white italic underline"> codebyte</a>
      </div>
    </div>
  );
}

export default App
