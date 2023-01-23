import { server } from "config";
import Error from "next/error";
import Head from "next/head";

import Layout from "@/components/Movie/Layout";
import Poster from "@/components/Movie/Poster";
import About from "@/components/Movie/About";
import CastCrew from "@/components/Movie/Cast";
import Details from "@/components/Movie/Details";
import {useRouter} from 'next/router'
import React, { useState,useEffect } from "react";
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

const Movie=({ movie })=>{
  const [menu, setMenu] = useState(false);
  const width = useWindowSize().width;
  const router=useRouter()
  if (movie.success==false) {
    return <Error statusCode={404} />;
  }

  
  return (
    <div className="">
      <Head>
        <title>{`${(movie.title || movie.original_name)} (${movie.release_date.substring(0, 4)}) | CineVault : Watch Movies Online`}</title>
        <link rel="icon" href="/vault.png" />
      </Head>
      {/* Menu-Bar */}
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="menu absolute top-0 left-0 h-[100%] w-[100%] flex flex-row backdrop-blur-md z-30"
          >
            <motion.div
              initial={{ left: -16 }}
              animate={{ left: 0 }}
              exit={{ left: -16 }}
              transition={{ duration: 0.5 }}
              className="sidebar bg-[#252525] flex flex-col text-lg pt-[30px] pb-[10px] rounded-tr-2xl rounded-br-2xl h-[100%] min-w-[250px] max-w-[300px] text-white overflow-y-scroll scrollbar"
            >
              <div className="logo flex flex-col h-[20%] w-[100%] bg-transparent justify-center items-center p-10 cursor-pointer">
                <img
                  src="/cinevault-hd-logo-green.png"
                  alt="logo-for-website"
                  className="logo-image h-[100px] w-[150px]"
                  onClick = {()=>{router.push("/")}}
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
      <div className="title-bar relative flex h-[100%] w-[100%] justify-items-center items-center pt-2 bg-transparent pb-2 backdrop-blur-sm">
        <img
          src="/cinevault-hd-logo-green.png"
          alt="cinevault-logo"
          className="logo ml-[10%] max-h-[50px] cursor-pointer"
          onClick = {()=>{router.push("/")}}
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
          className=" hover:scale-95 transition-all duration-300 cursor-pointer"
          onClick={() => {
            setMenu(true);
          }}
        />
      </div>
<div className={menu===true?"wrapper w-full max-w-[2100px] mx-auto h-[100%] overflow-hidden":"wrapper w-full max-w-[2100px] mx-auto h-[100%]"}
  
>
      
      <div className="relative w-full mx-auto app-container">
        <div
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
          }}
          className="cover-image"
        >
        </div>
        <div className="gradient absolute top-[250px] w-full h-[150px] z-10"></div>
        <Layout>
          <Poster data={movie} />
          <About data={movie} />
          <CastCrew movie={movie} />
          <Details data={movie} />
        </Layout>
      </div>
    </div>
    </div>
    
  );
}

export default Movie;

export async function getServerSideProps(context) {
  const { id } = context.query;
  let movie;
  try {
    const request = await fetch(
      `${server}/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`
    ).then((response) => response.json());
    movie = request;
  } catch (err) {
    console.log(err);
    return {
      props: {
        movie: null,
      },
    };
  }

  return {
    props: {
      movie,
    },
  };
}
