import React, { useEffect } from "react";
import pics from "../assets/pics.jpg";
import pics2 from "../assets/pics2.jpg";
import {RxCaretDown} from 'react-icons/rx'
import gsap from "gsap";
const Banner = () => {

  const text = "CREATING";
  useEffect(() => {
    gsap.fromTo('.bold-text', {
      opacity: 0,
      y: -100
    }, {
      opacity: 1,
      delay:1.4,
      duration: 1.3,
      y:0
    })
    

    gsap.fromTo('.text-p', {
opacity: 0
    }, {
      opacity: 1,
      duration: 6,
      delay: 1.6

    },)
  }, [])

  const getRandomColor = () => {
    const char = ['white', 'orange', 'red', 'forestgreen', 'yellow']

   const color = char[Math.floor(Math.random()* char.length)]
    return color
  }
  const handleHover = () => {
    gsap.to(".char", {
      color: getRandomColor(),
      duration: 1.4
    })
  }


    return (
      <div className="h-banner  relative    cont w-full text-center text-white grid place-items-center">
        <div className="md:w-1/2 w-[90%]">
          <h2 className="md:text-6xl text-5xl max-sm:text-center font-sans font-bold bold-text">
            {text.split("").map((char) => {
              return (
                <span onMouseEnter={handleHover} className="char">
                  {char}
                </span>
              );
            })}{" "}
            <span> BEAUTIFUL</span> DESIGNS
          </h2>
          <p className="leading-8 mt-4 text-lg text-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            veniam accusantium saepe itaque assumenda sequi blanditiis? Quidem
            inventore reprehenderit perferendis!
          </p>
        </div>
        <button className="inline-flex items-center mt-5 absolute bottom-2 animate-bounce ">
          Scroll Down <RxCaretDown size={29} className="inline" />
        </button>
      </div>
    );
};

export default Banner;
