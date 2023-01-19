import { RxChevronLeft } from "react-icons/rx";
import { RxChevronRight } from "react-icons/rx";
import { RxDividerVertical } from "react-icons/rx";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion"

import ImdbLogo from "../svg-assets/imdb-svgrepo-com.svg"


const SlideshowMobile = () => {

    const [index,setIndex] = useState(0)
    const [direction, setDirection] = useState(0)
    const posterArray = [
        {
            id:"your-name",
            poster: "/your-name-hd-poster.jpg",
            title: "Your Name (Kimi no Na Wa)",
            tagline:"A Makoto Shinkai Film",
            year:2018,
            rating:8.4
        },
        {
            id:"chichore",
            poster:"/chichore-hd-poster.jpg",
            title:"Chhichhore",
            tagline:"A Sajid Nadiawala Film",
            year:2019,
            rating:8.3
        },
        {
            id:'the-shining',
            poster: "/shining-hd-poster.jpg",
            title: "The Shining",
            tagline:"Based on an Original Novel by Stephen King",
            year:1980,
            rating:8.4
        }
    ]

    const next = ()=>{
        setDirection(1)
        if(index===posterArray.length-1)
            setIndex(0)
        else setIndex(index + 1)
    }
    const prev = ()=>{
        setDirection(-1)
        if(index===0)
            setIndex(posterArray.length-1)
        else setIndex(index - 1)
    }
    // This useEffect will run whenever there is a change in the variable index
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        }
    }
    useEffect(()=>{
        resetTimeout()
        timeoutRef.current = setTimeout(
            ()=>{
                next();
            }
            ,5000)
        
        return () =>{resetTimeout()}
        }
    ,[index])

    const variants = {
        enter: (direction) => {
          return {
            x: direction > 0 ? 1000 : -1000,
            opacity:0
          };
        },
        center: {
          zIndex: 1,
          x: 0,
          opacity: 1
        },
        exit: (direction) => {
          return {
            x: direction < 0 ? 1000 : -1000,
            opacity:1
          };
        }
      };

    return ( 
        <div className="slideshow relative h-[70%] w-[90%] bg-black rounded-2xl ml-[5%]">
            {/* Controls for Slideshow */}
            <span className="controls z-20 absolute flex flex-row items-center justify-center h-[10%] w-[10%] right-[17%] bottom-[5%] ">
                <button className="prev active:scale-75 transition-all duration-200" onClick={()=>{ prev() }}>
                    <RxChevronLeft size={20} color={"white"} />
                </button>
                <div className="line"><RxDividerVertical size={25} color={"white"}/></div>
                <button className="next active:scale-75 transition-all duration-200" onClick={()=>{ next() }}>
                    <RxChevronRight size={20} color={"white"}/>
                </button>
            </span>
            {/* Movie Details */}
            <div className="info absolute top-0 left-0 flex flex-col justify-center pl-[12%] text-white h-[100%] w-[80%] rounded-tl-2xl rounded-bl-2xl rounded-br-md rounded-tr-md">
                <h1 className="title text-3xl font-extrabold">
                    {posterArray[index].title}
                </h1>
                <p className="tagline text-gray-300 pl-[2%] text-sm">{posterArray[index].tagline}</p>
                <br></br>
                <div className="movie-details flex flex-row w-[60%] text-lg">
                    <h4 className="year-of-release text-gray-300 pl-[2%]">{posterArray[index].year}</h4>
                    <div className="rating flex flex-row ml-[24%]">
                        <ImdbLogo height={25} width={25} />
                        <p className="ml-[12%]">{posterArray[index].rating}/10</p>
                    </div>
                </div>
                <br></br>
                <button className="more-details h-[12%] w-[30%] max-w-[90px] rounded-lg bg-[#8685ef] active:scale-75">Details</button>
            </div>
            {/* image poster  */}
            <div className="poster-show absolute top-0 left-0 h-[100%] w-[100%] bg-gray-700 rounded-2xl overflow-hidden">
                {
                    <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                        key={posterArray[index].poster} 
                        src={posterArray[index].poster} 
                        alt={posterArray[index].id} 
                        className="poster-mobile " // custom css in global.css
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        // Issue present with exit animation, so using center animation instead
                        exit="center"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                    />
                    </AnimatePresence>
                }
            </div>
        </div>
     );
}
 
export default SlideshowMobile;