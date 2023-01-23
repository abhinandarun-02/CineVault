import {
  BsSearch,
  BsFacebook,
  BsInstagram,
  BsPerson,
  BsPeople,
  BsGithub
} from "react-icons/bs";
import { AiOutlineClose, AiFillCloseCircle } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import SlideshowMobile from "./SlideshowMobile.js";
import Card from "./Card";
import { genreArray } from "@/data/genre.js";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router.js";
import Loading from "./Loading.js";

import Dracula from "../svg-assets/dracula-svgrepo-com.svg";
import Love from "../svg-assets/valentines-valentines-day-svgrepo-com.svg";
import Anime from "../svg-assets/anime-and-manga-svgrepo-com.svg";
import Detetive from "../svg-assets/detective-face-svgrepo-com.svg";
import Action from "../svg-assets/criminal-heist-svgrepo-com.svg";

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

const HomepageMobile = ({width, popularMovies, latestMovies, topMovies, upcomingMovies}) => {
  const router = useRouter();
  const [loading,setLoading] = useState(false)

  // Menu Required States
  const [menu, setMenu] = useState(false);
  return (
    <div className="homepage-mobile box-borders h-[100vh] bg-[#252525] overflow-y-scroll scrollbar">
      {/*Loading  */}
      {
        loading && <Loading/>
      }
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
                <a
                  href="https://github.com/abhinandarun-02/CineVault"
                  target={"_blank"}
                  rel="noreferrer"
                  className="ml-[7%] hover:text-[#8685ef] transition-colors duration-300 cursor-pointer"
                >
                  <BsGithub />
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
                        setLoading(true)
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
                      setLoading(true)
                    }}
                  >
                    <BsPerson />
                    Friends
                  </div>
                  <div
                    className="genre-category pt-5 pb-5 w-[100%] items-center justify-items-center border-r-[#8685ef] hover:border-r-4 hover:bg-[#353555] transition-all duration-300 cursor-pointer"
                    onClick={() => {
                      router.push("/errorPage");
                      setLoading(true)
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
      <div className="title-bar relative flex h-[100%] w-[100%] justify-items-center items-center">
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

      {/* Slideshow */}
      <div className=" slideshow-mobile flex flex-col h-[100%] shrink-0 w-[100%] justify-center">
        <h1 className="title text-white pl-[5%] mt-[3%] text-lg font-bold mb-[3%]">
          Featured Movies
        </h1>
        <SlideshowMobile onClick={()=>{setLoading(true)}}/>
      </div>

      {/* Top Rated Movies */}
      <div className="popular-movies flex flex-col h-[100%] w-[100%] shrink-0 justify-center">
        <h1 className="title pl-[5%] text-white text-lg font-bold">
          Top Rated Movies
        </h1>
        <div className="cards-mobile h-[100%] pl-[5%] w-[100%] pt-[2%] animate glow delay-3 scrollbar-thin">
          {topMovies.results.map((movie) => (
            <Card
              name={movie.title} 
              rating={movie.vote_average} 
              img={"https://image.tmdb.org/t/p/w500/"+movie.poster_path} 
              key={movie.id} 
              id={movie.id}
              onClick={()=>{setLoading(true)}}
            />
          ))}
        </div>
      </div>
      {/* Most Popular Movies */}
      <div className="popular-movies my-5 flex flex-col h-[100%] w-[100%] shrink-0 justify-center pt-5">
        <h1 className="title pl-[5%] text-white text-lg font-bold">
          Most Popular Movies
        </h1>
        <div className="cards-mobile h-[100%] pl-[5%] w-[100%] pt-[2%] animate glow delay-3 scrollbar-thin">
          {popularMovies.results.map((movie) => (
            <Card
              name={movie.title} 
              rating={movie.vote_average} 
              img={"https://image.tmdb.org/t/p/w500/"+movie.poster_path} 
              key={movie.id} 
              id={movie.id}
              onClick={()=>{setLoading(true)}}
            />
          ))}
        </div>
      </div>
      {/* Latest Movies */}
      <div className="popular-movies my-5 flex flex-col h-[100%] w-[100%] shrink-0 justify-center pt-5">
        <h1 className="title pl-[5%] text-white text-lg font-bold">
          Latest Movies
        </h1>
        <div className="cards-mobile h-[100%] pl-[5%] w-[100%] pt-[2%] animate glow delay-3 scrollbar-thin">
          {latestMovies.results.slice(3).reverse().map((movie) => (
            <Card
              name={movie.title} 
              rating={movie.vote_average} 
              img={"https://image.tmdb.org/t/p/w500/"+movie.poster_path} 
              key={movie.id} 
              id={movie.id}
              onClick={()=>{setLoading(true)}}
            />
          ))}
        </div>
      </div>
        {/* Upcoming Movies */}
      <div className="popular-movies my-5 flex flex-col h-[100%] w-[100%] shrink-0 justify-center pt-5">
        <h1 className="title pl-[5%] text-white text-lg font-bold">
          Upcoming Movies
        </h1>
        <div className="cards-mobile h-[100%] pl-[5%] w-[100%] pt-[2%] animate glow delay-3 scrollbar-thin">
          {upcomingMovies.results.map((movie) => (
            <Card
              name={movie.title} 
              rating={movie.vote_average} 
              img={"https://image.tmdb.org/t/p/w500/"+movie.poster_path} 
              key={movie.id} 
              id={movie.id}
              onClick={()=>{setLoading(true)}}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomepageMobile;
