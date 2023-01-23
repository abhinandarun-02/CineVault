import { genreArray } from '@/data/genre'
import { useRouter } from 'next/router'
import { BsSearch, BsPeople, BsPerson, BsInstagram, BsFacebook,BsGithub } from "react-icons/bs"
import { useState } from 'react'
import Slideshow from '@/components/Slideshow'
import Card from '@/components/Card'
import Loading from './Loading'

import Dracula  from '../svg-assets/dracula-svgrepo-com.svg'
import Love from '../svg-assets/valentines-valentines-day-svgrepo-com.svg'
import Anime from '../svg-assets/anime-and-manga-svgrepo-com.svg'
import Detetive from '../svg-assets/detective-face-svgrepo-com.svg' 
import Action from '../svg-assets/criminal-heist-svgrepo-com.svg'

function returnSVG(id){
    switch(id){
      case 'horror': return (<Dracula className="svg" height={25} width={25} />); break;
      case 'romcom': return (<Love className="svg" height={25} width={25}  />); break;
      case 'mystery': return (<Detetive className="svg" height={25} width={25} />); break;
      case 'anime': return (<Anime className="svg" height={25} width={25} />); break;
      case 'action': return (<Action className="svg" height={25} width={25} />); break;
  
    }
  }

const HomepageDesktop = ({popularMovies, latestMovies, topMovies, upcomingMovies}) => {
      const router  = useRouter()
      const [loading,setLoading] = useState(false)
return ( 
    <div className='parent-homepage  h-[100vh] w-[100%] grid-row-1 text-[#686262] bg-[#252525] '>
{/* Loading screen */}
        {
            loading && <Loading />
        }
  {/* Sidebar */}
        <div className="sidebar bg-[#111111] pt-[30px] pb-[10px] col-span-1 flex flex-col text-lg h-[100%] min-w-[40%] overflow-y-scroll scrollbar-thin">
            <div className="logo flex flex-col h-[20%] w-[100%] bg-transparent justify-center items-center p-10">
                <img src="/cinevault-hd-logo-green.png" alt="logo-for-website" className="logo-image h-[125px] w-[200px]" />
            </div>
            <div className="socials flex flex-row mt-[25px] justify-center">
            <a href='https://www.facebook.com/petrichor.iitpkd' target={"_blank"} rel="noreferrer" className='mr-[7%] hover:text-[#8685ef] transition-colors duration-300 cursor-pointer'>
                <BsFacebook  />
            </a>
            <a href="https://instagram.com/petrichor.iitpkd?igshid=MDM4ZDc5MmU=" target={"_blank"} rel="noreferrer" className='hover:text-[#8685ef] transition-colors duration-300 cursor-pointer'>
                <BsInstagram />
            </a>
            <a href="https://github.com/abhinandarun-02/CineVault" target={"_blank"} rel="noreferrer" className='ml-[7%] hover:text-[#8685ef] transition-colors duration-300 cursor-pointer'>
                <BsGithub />
            </a>
            </div>
            <div className="genre-details">
                <div className="title-genre mt-[30%] h-[5%] w-[100%] pl-5 flex items-center  animate glow delay-1">
                    <h1>Genre-Categories</h1>
                </div>
                <div className="genre-select flex flex-col h-[35%] w-[100%] bg-transparent justify-start items-center ">
                {
                    genreArray.map((genre) => (
                    <div className="genre-category animate glow delay-2 pt-5 pb-5 w-[100%] z-[2] items-center justify-items-center border-r-[#8685ef] hover:border-r-4 hover:bg-[#353555] transition-all duration-300 cursor-pointer" key={genre.id}
                        onClick = {()=>{
                            router.push(genre.link)
                            setLoading(true)
                        }}
                    >
                        {returnSVG(genre.id)}
                        {genre.message}
                    </div>
                    ))
                }
                </div>
            </div>
            <div className="social-details">
                <div className="title-genre h-[5%] w-[100%] mt-[10px] mb-[10px] pl-5 flex items-center animate glow">
                    <h1>Social</h1>
                </div>
                <div className="genre-select flex flex-col h-[35%] w-[100%] bg-transparent justify-start items-center animate glow delay-2">
                    <div className="genre-category pt-5 pb-5 w-[100%] items-center justify-items-center border-r-[#8685ef] hover:border-r-4 hover:bg-[#353555] transition-all duration-300 cursor-pointer"  onClick = {()=>{
                        router.push("/errorPage")
                        setLoading(true)
                    }
                    }>
                        <BsPerson />
                        Friends
                    </div>
                    <div className="genre-category pt-5 pb-5 w-[100%] items-center justify-items-center border-r-[#8685ef] hover:border-r-4 hover:bg-[#353555] transition-all duration-300 cursor-pointer" onClick = {()=>{
                        router.push("/errorPage")
                        setLoading(true)
                    }
                    }>
                        <BsPeople />
                        Party
                    </div>
                </div>
            </div>
               
        </div>
{/* Main Content */}
        <div className="main-content h-full bg-[#252525] col-start-2 col-span-4 overflow-y-scroll scrollbar">
        {/* Top-bar */}
            <div className="top-bar justify-center items-center h-[7%] min-h-[70px] w-[100%]">
                <div className="search-bar bg-[#393939] w-[75%] h-[80%] ml-[7%] pl-5 rounded-3xl border-solid border-[3px] border-[#21877e]" >
                    <BsSearch />
                    <input type="text" className=' outline-none bg-transparent text-gray-400 h-[100%]' placeholder='Search for movies' />
                </div>
                <img src="/user.png" alt="profile-pic" className="profile-pic h-[3rem] justify-self-end border-solid border-[3px] border-[#21877e] bg-[#ffffff] object-contain rounded-full" />
                <div className="username bg-[#393939] w-[75%] h-[80%] ml-10 rounded-3xl border-solid border-[3px] border-[#21877e]">
                    <div className="user-profile-name text-white h-[100%] flex justify-center items-center">A Demo User</div>
                </div>
            </div>
    {/* Slideshow */}
            <h1 className="title text-white pl-[5%] mt-[3%] text-lg font-bold">Featured Movies</h1>
            <div className="slide-show flex justify-center items-center h-[40%] min-h-[400px] w-[100%] animate glow delay-2">
                <Slideshow onClick={()=>{setLoading(true)}}/>
            </div>
            <br></br>
    {/* Top Rated Movies */}
            <div className="movie-row flex flex-col h-[65%] min-h-[500px] max-h-[520px] w-[100%] shrink-0 justify-center">
                <h1 className="title pl-[5%] text-white text-lg font-bold">Top Rated Movies</h1>
                <div className="cards h-[100%] pl-[5%] w-[100%] pt-[2%] animate glow delay-3 overflow-x-scroll scrollbar-thin">
                    {
                    topMovies.results.map((movie)=>(
                        <Card name={movie.title} rating={movie.vote_average} img={"https://image.tmdb.org/t/p/w500/"+movie.poster_path} key={movie.id} id={movie.id} onClick={()=>{setLoading(true)}}/>
                    ))
                    }
                </div>
            </div>
    {/* Most Popular Movies */}
            <div className="movie-row mt-10 flex flex-col h-[65%] min-h-[500px] max-h-[520px] w-[100%] shrink-0 justify-center">
                <h1 className="title pl-[5%] text-white text-lg font-bold">Most Popular Movies</h1>

                <div className="cards h-[100%] pl-[5%] w-[100%] pt-[2%] animate glow delay-3 overflow-x-scroll scrollbar-thin">
                    {
                    popularMovies.results.map((movie)=>(
                        <Card name={movie.title} rating={movie.vote_average} img={"https://image.tmdb.org/t/p/w500/"+movie.poster_path} key={movie.id} id={movie.id} onClick={()=>{setLoading(true)}}/>
                    ))
                    }
                </div>
            </div>
    {/* Latest Movies */}
            <div className="movie-row mt-10 flex flex-col h-[65%] min-h-[500px] max-h-[520px] w-[100%] shrink-0 justify-center">
                <h1 className="title pl-[5%] text-white text-lg font-bold">Latest Movies</h1>
                <div className="cards h-[100%] pl-[5%] w-[100%] pt-[2%] animate glow delay-3 overflow-x-scroll scrollbar-thin">
                    {
                    latestMovies.results.slice(3).reverse().map((movie)=>(
                        <Card name={movie.title} rating={movie.vote_average} img={"https://image.tmdb.org/t/p/w500/"+movie.poster_path} key={movie.id} id={movie.id} onClick={()=>{setLoading(true)}}/>
                    ))
                    }
                </div>
            </div>
    {/* Upcoming Movies */}
            <div className="movie-row mt-10 flex flex-col h-[65%] min-h-[500px] max-h-[520px] w-[100%] shrink-0 justify-center">
                <h1 className="title pl-[5%] text-white text-lg font-bold">Upcoming Movies</h1>
                <div className="cards h-[100%] pl-[5%] w-[100%] pt-[2%] animate glow delay-3 overflow-x-scroll scrollbar-thin">
                    {
                    upcomingMovies.results.map((movie)=>(
                        <Card name={movie.title} rating={movie.vote_average} img={"https://image.tmdb.org/t/p/w500/"+movie.poster_path} key={movie.id} id={movie.id} onClick={()=>{setLoading(true)}}/>
                    ))
                    }
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default HomepageDesktop;