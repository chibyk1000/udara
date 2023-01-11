import logo1 from "../assets/logos/img1.jpg";
import logo2 from "../assets/logos/img2.jpg";
import logo3 from "../assets/logos/img3.jpg";
import logo4 from "../assets/logos/img4.jpg";
import logo5 from "../assets/logos/img1.jpg";
import logo6 from "../assets/logos/img5.jpg";
import logo7 from "../assets/logos/img6.jpg";
import logo8 from "../assets/logos/img7.jpg";
import logo9 from "../assets/logos/img8.jpg";
import LogoSlider from "./LogoSlider";
import {useEffect} from 'react'

import des from '../assets/designs/img.jpg'
import des1 from '../assets/designs/img1.jpg'
import des2 from '../assets/designs/img2.png'
import des3 from '../assets/designs/img3.jpg'
import des4 from '../assets/designs/img4.jpg'
import des5 from '../assets/designs/img5.jpg'
import des6 from '../assets/designs/img6.jpg'
import des7 from '../assets/designs/img7.jpg'
import des8 from '../assets/designs/img8.jpg'
import des9 from '../assets/designs/img9.jpg'
import des10 from '../assets/designs/img10.jpg'
import DesignSlider from "./DesignSlider";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
const Works = () => {
  const images = [
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo1,
    ];
    
    const images2 = [
        des,
        des1,
        des2,
        des3,
        des4,
        des5,
        des6,
        des7,
        des8,
        des9,
        des10,
  ]
  
  useEffect(() => {
     if (typeof window !== "undefined") {
       gsap.registerPlugin(ScrollTrigger);
     }
    gsap.fromTo(
      ".logos",
      {
      
        opacity: 0,
        
      },
      {
     
        opacity:1,
        duration: 1.4,
        scrollTrigger: {
          trigger: ".works",
          toggleActions: "play pause none reverse",
        },
      }
    );
    gsap.fromTo(
      ".des",
      {
      
   
        opacity:0
      },
      {
       
        scale: 1,
        opacity:1,
        duration: 1.4,
        scrollTrigger: {
          trigger: ".design",
          toggleActions: "restart pause none reverse",
        },
      }
    );

    gsap.fromTo(
      ".logotext",
      {
        translateY: 50,
      opacity:0
      },
      {
        translateY: 0,
        opacity:1,
        duration: 2,
        yoyo: true,
      
        scrollTrigger: {
          trigger: ".works",
          toggleActions: "restart pause none reverse",
          
        },
      }
    )
    gsap.fromTo(
      ".logotext2",
      {
        translateY: 50,
      opacity:0
      },
      {
        translateY: 0,
        opacity:1,
        duration: 2,
        yoyo: true,
        
        scrollTrigger: {
          trigger: ".design",
          toggleActions: "restart pause none reverse",
          
        },
      }
    )
   
  }, [])
  
  return (
    <div className="  cont md:py-20 works overflow-hidden">
      <h3 className="text-5xl font-bold text-center text-primary my-7">
        Our Works
      </h3>

      <div className="grid md:grid-cols-2 w-[80%] mx-auto md:h-[50vh] md:grid-rows-1 items-center">
        <p className="font-pacifico text-primary text-8xl md:logotext max-sm:hidden">Logos</p>
        <div className="h-full md:w-full">
          <LogoSlider images={images} />
        </div>
      </div>

      <div className="md:grid-cols-2 w-[80%] mx-auto h-[50vh] md:grid gap-20 grid-rows-1 items-center md:design  ">

                  <div className="w-full h-full">
                      
                  <DesignSlider images={images2}/>
                  </div>
        <div>
          
              <p className="font-dancing-script font-bold text-primary text-8xl text-end logotext2 max-sm:hidden">2D/
                  3D designs</p>
              </div>
      </div>
    </div>
  );
};

export default Works;
