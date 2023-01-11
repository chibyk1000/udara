import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import vid1 from "../assets/videos/palette.mp4";
import vid2 from "../assets/videos/vector.mp4";
import vid3 from "../assets/videos/running-shoes.mp4";
import gsap from "gsap";
import LocomotiveScroll from 'locomotive-scroll'
const Services = () => {
  const num: number = 0;



  const [loop, setLoop] = useState(false);
  const vidRef = useRef<HTMLVideoElement>(null);
  const vidRef2 = useRef<HTMLVideoElement>(null);
  const vidRef3 = useRef<HTMLVideoElement>(null);

  const refs = [vidRef, vidRef2, vidRef3]

  useEffect(() => {
     if (typeof window !== "undefined") {
       gsap.registerPlugin(ScrollTrigger);
     }
    refs.map(ref => {
      ScrollTrigger.create({
        trigger: '.serv',
        start: "top center",
        end: "bottom center",
        onEnter: () => ref.current?.play(),
        onLeave: () => ref.current?.pause(),
      });
  
      
      let proxy = { skew: 0 },
        skewSetter = gsap.quickSetter(".serv", "skewY", "deg"), // fast
        clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

      ScrollTrigger.create({
        onUpdate: (self) => {
          let skew = clamp(self.getVelocity() / -300);
          // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
          if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew;
            gsap.to(proxy, {
              skew: 0,
              duration: 0.8,
              ease: "power3",
              overwrite: true,
              onUpdate: () => skewSetter(proxy.skew),
            });
          }
        },
      });

      // make the right edge "stick" to the scroll bar. force3D: true improves performance
      gsap.set(".serv", { transformOrigin: "right center", force3D: true });
})
  }, []);
  return (
    <div className="md:h-screen cont md:px-20 px-10 py-2  grid place-items-center text-primary serv">
      <div>


      <h3 className="text-center font-bold uppercase text-3xl my-10">Services</h3>

      <div className="w-3/12 max-sm:hidden my-10">
        <p className="text-2xl font-bold">
          We Have dedicated designers on these areas
        </p>
      </div>

      <div className="services grid md:grid-cols-3  mx-auto gap-10">
        <div
          onMouseEnter={() => vidRef.current?.play()}
          className="text-center border shadow-md card py-10 rounded "
          onMouseLeave={() => {
            vidRef.current?.pause();
          }}

        >
          <video
            ref={vidRef}
            src={vid2}
            loop
            // autoPlay
            preload="auto"
            muted

            className="w-40 h-40 mx-auto"
          ></video>
          <h2 className="font-bold text-xl my-3">GRAPHIC DESIGNS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            qui!
          </p>

          <button className="border border-amber-700 text-amber-700 px-8 py-2 mt-4">
            Learn More
          </button>
        </div>

        <div
          onMouseEnter={() => vidRef2.current?.play()}
          className="text-center border shadow-md card py-10 rounded "
          onMouseLeave={() => {
            vidRef2.current?.pause();
          }}
        >
          <video
            ref={vidRef2}
            src={vid1}
            loop
            // autoPlay
            preload="auto"
            muted
            className="w-40 h-40 mx-auto"
          ></video>
          <h2 className="font-bold text-xl my-3">UI/UX  DESIGN</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            qui!
          </p>

          <button className="border border-amber-700 text-amber-700 px-8 py-2 mt-4">
            Learn More
          </button>
        </div>

        <div
          onMouseEnter={() => vidRef3.current?.play()}
          className="text-center border shadow-md card py-10 rounded "
          onMouseLeave={() => {
            vidRef3.current?.pause();
            
          }}
        >
          <video
            ref={vidRef3}
            src={vid3}
            loop
            // autoPlay
            
            preload="auto"
            muted
            className="w-40 h-40 mx-auto"
          ></video>
          <h2 className="font-bold text-xl my-3">ANIMATIONS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            qui!
          </p>

          <button className="border border-amber-700 text-amber-700 px-8 py-2 mt-4">
            Learn More
          </button>
        </div>
      </div>
    </div>
      </div>
  );
};

export default Services;
