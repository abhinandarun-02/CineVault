import {
  BsSearch,
  BsFacebook,
  BsInstagram,
  BsPerson,
  BsPeople,
} from "react-icons/bs";
import { AiOutlineClose, AiFillCloseCircle } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import SlideshowMobile from "./SlideshowMobile.js";
import Card from "./Card";
import { genreArray } from "@/data/genre.js";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router.js";

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

const HomepageMobile = ({width}) => {
  const router = useRouter();
  const posterArray = [
    {
      id: "your-name",
      poster: "/your-name-vertical-poster.jpg",
      name: "Your Name (Kimi no Na wa)",
      rating: 8.4,
    },
    {
      id: "dark-knight-rises",
      poster: "/dark-knight-rises.jpg",
      name: "Batman: The Dark Knight Rises",
      rating: 8.4,
    },
    {
      id: "into-the-spiderverse",
      poster: "/spiderman-verical-spiderverse.jpg",
      name: "Spiderman: Into the Spiderverse",
      rating: 8.4,
    },
    {
      id: "inception",
      poster: "/inception-vertical-poster.jpeg",
      name: "Inception",
      rating: 8.8,
    },
    {
      id: "into-the-spiderverse-1",
      poster: "/spiderman-verical-spiderverse.jpg",
      name: "Spiderman: Into the Spiderverse",
      rating: 8.4,
    },
    {
      id: "your-name-1",
      poster: "/your-name-vertical-poster.jpg",
      name: "Your Name (Kimi no Na wa)",
      rating: 8.4,
    },
  ];
  // Menu Required States
  const [menu, setMenu] = useState(false);
  return (
    <div className="homepage-mobile h-[100vh] bg-[#252525] overflow-y-scroll">
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
              className="sidebar bg-[#252525] flex flex-col text-lg rounded-tr-2xl rounded-br-2xl h-[100%] min-w-[250px] max-w-[300px] text-white"
            >
              <div className="logo flex flex-col h-[20%] w-[100%] bg-transparent justify-center items-center p-10">
                <img
                  src="/cinevault-hd-logo-green.png"
                  alt="logo-for-website"
                  className="logo-image h-[100px] w-[150px]"
                />
              </div>
              <div className="socials flex flex-row mt-[2%] justify-center">
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
              <div className="title-genre mt-[10%] h-[5%] w-[100%] pl-5 flex items-center  animate glow delay-1">
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
              <br />
              <br />
              <div className="title-genre h-[5%] w-[100%] pl-5 flex items-center animate glow">
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
              <AiFillCloseCircle
                className="ml-[40%] mb-[10%]"
                onClick={() => {
                  setMenu(false);
                }}
                size={40}
                color={"#00c896"}
              />
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
        <div className="search-bar-mobile bg-[#393939] w-[90%] h-[60%] rounded-3xl justify-center ">
          <div className="user-profile rounded-full h-[100%] w-[100%] p-[10%]">
            <img src="/user.png" alt="profile-pic" className="profile-pic h-[100%] w-[100%] bg-[#ffffff] object-contain rounded-full justify-self-center" />
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
          <BsSearch color="white" size={20} className="mr-[5%]" />
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
      <div className="slideshow-mobile flex flex-col h-[100%] w-[100%] justify-center">
        <h1 className="title text-white pl-[5%] mt-[3%] text-lg font-bold mb-[3%]">
          Featured Movies
        </h1>
        <SlideshowMobile />
      </div>

      {/* Popular Movies */}
      <div className="popular-movies flex flex-col h-[100%] w-[100%] justify-center ">
        <h1 className="title pl-[5%] text-white text-lg font-bold">
          Most Popular Movies
        </h1>
        <div className="cards-mobile h-[100%] pl-[5%] w-[100%] pt-[2%] animate glow delay-3">
          {posterArray.map((poster) => (
            <Card
              name={poster.name}
              rating={poster.rating}
              img={poster.poster}
              key={poster.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomepageMobile;
