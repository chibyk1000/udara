import {useEffect} from 'react'
import logo from "../assets/logopart.png";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
const About = () => {

  useEffect(() => {
    
      if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }
  let  t1 = gsap.timeline()
    gsap.fromTo(
      ".about",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        scrollTrigger: {
          trigger: ".about",
          toggleActions: "restart pause none reverse",
      
        },
      }
    );

    ScrollTrigger.create({
      trigger: ".about",
      start: "top center",
      end: "bottom center",

    });

  },[])
  return (
      <div className='text-primary md:h-screen grid place-items-center about'>
          <div>
              
      <h2 className='text-center font-bold uppercase text-4xl mb-32'>About Us</h2>

      <div className="grid md:grid-cols-2 w-[80%] mx-auto place-content-center ">
        <div className='text-lg leading-loose'>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            officia eos voluptatem quisquam vel iusto adipisci praesentium, iste
            atque debitis amet corrupti vero rem, perferendis sit saepe.
                      </p>
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorum animi architecto modi aliquam suscipit nihil labore totam iste culpa?    
                      </p>
        </div>
        <a href="" className="">
          <img src={logo} alt="" className=" transition-all ease-in-out" />
        </a>
      </div>
          </div>
    </div>
  );
}

export default About