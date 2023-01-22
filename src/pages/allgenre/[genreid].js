import React, { useState,useEffect } from "react";
import { SiImdb } from "react-icons/si";
import { GiDirectorChair } from "react-icons/gi";
import {useRouter} from 'next/router'
import { hrrorlst } from '@/data/horrormvs'
import { actionlst } from '@/data/actionmvs'
import { animelst } from '@/data/animemvs'
import { mysterylst } from '@/data/mysterymvs'
import { romcomlst } from "@/data/romcommvs";
import useWindowSize from '@/Hooks/useWindowSize'
import { BiMenu } from "react-icons/bi";
import { genreArray } from "@/data/genre";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose, AiFillCloseCircle } from "react-icons/ai";
import {
  BsSearch,
  BsFacebook,
  BsInstagram,
  BsPerson,
  BsPeople,
} from "react-icons/bs";

import Dracula from "../../svg-assets/dracula-svgrepo-com.svg";
import Love from "../../svg-assets/valentines-valentines-day-svgrepo-com.svg";
import Anime from "../../svg-assets/anime-and-manga-svgrepo-com.svg";
import Detetive from "../../svg-assets/detective-face-svgrepo-com.svg";
import Action from "../../svg-assets/criminal-heist-svgrepo-com.svg";

//sm:border-solid sm:border-[3px] sm:border-[#21877e]
function returnSVG(id) {
  switch (id) {
    case "horror":
      return <Dracula className="svg" height={25} width={25} />;
      break;
    case "romcom":
      return <Love className="svg" height={25} width={25} />;
      break;
    case "mystery":
      return <Detetive className="svg" height={25} width={25} />;
      break;
    case "anime":
      return <Anime className="svg" height={25} width={25} />;
      break;
    case "action":
      return <Action className="svg" height={25} width={25} />;
      break;
  }
}
const Genrefunc=()=> {
    const router=useRouter()
    const genreid=router.query.genreid
    const width = useWindowSize().width;
    const [dataset,setDataset] = useState([]);
 
    const [hover, setHover] = useState(false);
    const [bgImage, setBgImage] = useState(
      "https://png.pngtree.com/thumb_back/fw800/background/20220215/pngtree-retro-video-camera-poster-of-film-and-television-festival-image_926071.jpg"
    );
    const [titleDet, settitleDet] = useState("");
    const [descDet, setdescDet] = useState("");
    const [dirctr, setDirctr] = useState("");
    const [yearDet, setyearDet] = useState("");

    const [menu, setMenu] = useState(false);

    function selectinit(mvlst) {
      setBgImage(mvlst.hovimg);
                   settitleDet(mvlst.title);
                   setDirctr(mvlst.dirctr);
                   setdescDet(mvlst.imdb);
                   setyearDet(mvlst.year);
                   setHover(true);
}
    useEffect(() => {
        // Update the document title using the browser API
        if(genreid=='1'){
            setDataset(hrrorlst);
            selectinit(hrrorlst[0])
            console.log(hrrorlst);
        }
        else if(genreid=='2'){
            setDataset(romcomlst);
            selectinit(romcomlst[0])
        }
        else if(genreid=='3'){
            setDataset(mysterylst);
            selectinit(mysterylst[0])
        }
        else if(genreid=='4'){
            setDataset(animelst);
            selectinit(animelst[0])
        }
        else if(genreid=='5'){
            setDataset(actionlst);
            selectinit(actionlst[0])
        }
      },[genreid]);
     
    
    
  return (
    <div>
    <div
      className=" min-h-screen bg-cover duration-500 relative "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-gradient-to-t from-black     ">
        <div className="bg-gradient-to-r from-black ">
        {/* Menu-Bar */}
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="menu absolute top-0 left-0 h-[100%] w-[100%] flex flex-row backdrop-blur-md z-10 overflow-y-scroll"
          >
            <motion.div
              initial={{ left: -16 }}
              animate={{ left: 0 }}
              exit={{ left: -16 }}
              transition={{ duration: 0.5 }}
              className="sidebar bg-[#252525] flex flex-col text-lg pt-[30px] pb-[10px] rounded-tr-2xl rounded-br-2xl h-[100%] min-w-[250px] max-w-[300px] text-white overflow-y-scroll scrollbar"
            >
              <div className="logo flex flex-col h-[20%] w-[100%] bg-transparent justify-center items-center p-10">
                <img
                  src="/cinevault-hd-logo-green.png"
                  alt="logo-for-website"
                  className="logo-image h-[100px] w-[150px]"
                />
              </div>
              <div className="socials flex flex-row mt-[25px] justify-center">
                <a
                  href="https://www.facebook.com/petrichor.iitpkd"
                  target={"_blank"}
                  rel="noreferrer"
                  className="mr-[7%] hover:text-[#8685ef] transition-colors duration-300 cursor-pointer"
                >
                  <BsFacebook />
                </a>
                <a
                  href="https://instagram.com/petrichor.iitpkd?igshid=MDM4ZDc5MmU="
                  target={"_blank"}
                  rel="noreferrer"
                  className="hover:text-[#8685ef] transition-colors duration-300 cursor-pointer"
                >
                  <BsInstagram />
                </a>
              </div>
              <div className="genre-details">
                <div className="title-genre mt-[10%] h-[5%] w-[100%] pl-5 flex items-center animate glow delay-1">
                  <h1>Genre-Categories</h1>
                </div>
                <div className="genre-select flex flex-col h-[35%] w-[100%] bg-transparent justify-start items-center">
                  {genreArray.map((genre) => (
                    <div
                      className="genre-category z-[2] animate glow delay-2 pt-5 pb-5 w-[100%] items-center justify-items-center border-r-[#8685ef] hover:border-r-4 hover:bg-[#353555] transition-all duration-300 cursor-pointer"
                      key={genre.id}
                      onClick={() => {
                        router.push(genre.link);
                      }}
                    >
                      {returnSVG(genre.id)}
                      {genre.message}
                    </div>
                  ))}
                </div>
              </div>
              <div className="social-details">
                <div className="title-social h-[5%] w-[100%] pl-5 flex items-center animate glow">
                  <h1>Social</h1>
                </div>
                <div className="genre-select flex flex-col h-[35%] w-[100%] bg-transparent justify-start items-center animate glow delay-2">
                  <div
                    className="genre-category pt-5 pb-5 w-[100%] items-center justify-items-center border-r-[#8685ef] hover:border-r-4 hover:bg-[#353555] transition-all duration-300 cursor-pointer"
                    onClick={() => {
                      router.push("/errorPage");
                    }}
                  >
                    <BsPerson />
                    Friends
                  </div>
                  <div
                    className="genre-category pt-5 pb-5 w-[100%] items-center justify-items-center border-r-[#8685ef] hover:border-r-4 hover:bg-[#353555] transition-all duration-300 cursor-pointer"
                    onClick={() => {
                      router.push("/errorPage");
                    }}
                  >
                    <BsPeople />
                    Party
                  </div>
                </div>
              </div>
              <div>
                <AiFillCloseCircle
                  className="ml-[40%]"
                  onClick={() => {
                    setMenu(false);
                  }}
                  size={40}
                  color={"#00c896"}
                />
              </div>
              
            </motion.div>
            <div
              className="remaining-space-menu-mobile h-[100%] w-[100%] backdrop-blur-sm"
              onClick={() => {
                setMenu(false);
              }}
            ></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Title Bar */}
      <div className="title-bar relative flex h-[100%] w-[100%] justify-items-center items-center pt-2">
        <img
          src="/cinevault-hd-logo-green.png"
          alt="cinevault-logo"
          className="logo ml-[10%] max-h-[50px]"
        />
        <div className="search-bar-mobile relative bg-[#393939] w-[90%] h-[100%] max-h-[50px] rounded-3xl justify-center">
          <div className="user-profile rounded-3xl h-[100%] w-[100%] flex justify-center items-center bg-[#21877e]">
            <img src="/user.png" alt="profile-pic" className="profile-pic max-h-[40px] max-w-[40px] bg-[#ffffff] object-contain rounded-full justify-self-center" />
          </div>
          {
            width>=428 &&
            <input
            type="text"
            className=" outline-none bg-transparent ml-3 text-gray-400 h-[100%] text-center"
            placeholder="Search for movies"
          />}
          {
            width<428 &&
            <input
            type="text"
            className=" outline-none bg-transparent ml-3 text-gray-400 h-[100%] text-center"
            placeholder="Search"
          />}
          <BsSearch color="white" size={20} className="absolute right-[20px]" />
        </div>
        {/* Additional Menu */}
        <BiMenu
          size={30}
          color="white"
          className=" hover:scale-95 transition-all duration-300"
          onClick={() => {
            setMenu(true);
          }}
        />
      </div>
          <div className="grid grid-rows-2 h-screen grid-flow-col gap-6 ">
            <div className=" pl-5 p-15 text-left duration-500 w-full sm:w-2/4  self-center">
            <div className="flex flex-col mt-10 sm:mt-8 sm:ml-12 sm:gap-3 gap-1">
              <div className="text-3xl 2xl:text-6xl md:text-3xl lg:text-5xl xl:text-6xl   text-white font-bold font-carterfont ">
                {titleDet}
              </div>
              <div className=" sm:text-3xl text-lg 2xl:text-2xl lg:text-xl md:text-xl text-white font-normal  pt-3">
                {yearDet}
              </div>
              
              {hover && (
                <div className="flex flex-row pt-3 ">
                  <SiImdb className="text-white sm:text-6xl text-3xl 2xl:text-2xl lg:text-xl md:text-xl"  />
                <div className=" sm:text-3xl text-lg 2xl:text-2xl lg:text-xl md:text-xl text-white font-normal  ml-5">
                    {descDet}
                </div>
                </div>
              )}
              
              {hover && (
                <div className="flex flex-row pt-3 ">
                <GiDirectorChair className="text-white sm:text-6xl text-3xl 2xl:text-2xl lg:text-xl md:text-xl"/>
              <div className=" sm:text-3xl text-lg 2xl:text-2xl lg:text-xl md:text-xl text-white font-normal  ml-5">
                  {dirctr}
              </div>
              </div>
              )}
              {hover && (
                <button style={{backgroundColor: "#00C896"}} className="mt-2 bg-black hover:scale-105 text-white font-bold hover:text-white p-3 border border-black hover:border-transparent rounded-2xl sm:h-[12%] sm:w-[20%] w-[50%] 2xl:text-xl">
                  Learn More
                </button>
              )}
            </div>
            </div>

            <div className="flex flex-row overflow-x-scroll scrollbar max-w-[100%] absolute bottom-0">
              {dataset.map((mvlst) => (
                <div className=" p-3 h-[50%]" key={mvlst.id}>
                  <div
                    className={`relative transition-all duration-500 hover:scale-105 border-solid border-black `}
                    onMouseEnter={() => {
                      setBgImage(mvlst.hovimg);
                      settitleDet(mvlst.title);
                      setDirctr(mvlst.dirctr);
                      setdescDet(mvlst.imdb);
                      setyearDet(mvlst.year);
                      setHover(true);
                    }}
                    onMouseLeave={() => setHover(true)}
                  >
                    <div className=" overflow-hidden shadow-xl sm:h-[300px] sm:w-[200px] h-[200px] w-[150px]">
                      <img
                        
                        className="rounded-lg sm:rounded-xl h-[100%] object-cover "
                        src={mvlst.image}
                        alt="Card Image"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>
   </div>
  );
}

export default Genrefunc