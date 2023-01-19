import { BsSearch } from "react-icons/bs";
import SlideshowMobile from "./SlideshowMobile.js";
import Card from "./Card";
const HomepageMobile = () => {

    const posterArray = [
        {
          id:"your-name",
          poster:"/your-name-vertical-poster.jpg",
          name:"Your Name (Kimi no Na wa)",
          rating: 8.4
        },
        {
          id: "dark-knight-rises",
          poster:"/dark-knight-rises.jpg",
          name:"Batman: The Dark Knight Rises",
          rating: 8.4
        },
        {
          id: 'into-the-spiderverse',
          poster:"/spiderman-verical-spiderverse.jpg",
          name:"Spiderman: Into the Spiderverse",
          rating: 8.4
        },
        {
          id:"inception",
          poster:"/inception-vertical-poster.jpeg",
          name:"Inception",
          rating: 8.8
        },
        {
          id: 'into-the-spiderverse-1',
          poster:"/spiderman-verical-spiderverse.jpg",
          name:"Spiderman: Into the Spiderverse",
          rating: 8.4
        },
        {
            id:"your-name-1",
            poster:"/your-name-vertical-poster.jpg",
            name:"Your Name (Kimi no Na wa)",
            rating: 8.4
          },
      ]

    return ( 
        <div className="homepage-mobile h-[100vh] bg-[#252525] overflow-y-scroll">
            {/* Search Bar */}
            <div className="title-bar relative flex h-[100%] w-[100%] justify-center items-center"> 
                <img src="/cinevault-hd-logo-green.png" alt="cinevault-logo" className="logo ml-[10%] max-h-[50px]" />
                <div className="search-bar-mobile absolute right-[2%] bg-[#393939] w-[60%] h-[60%] pl-5 rounded-3xl" >
                    <input type="text" className=' outline-none bg-transparent text-gray-400 h-[100%] w-[80%]' placeholder='Search for movies' />
                    <BsSearch color="white" size={20} className="absolute right-[10%]"/>
                </div>
            </div>
            {/* Slideshow */}
            <div className="slideshow-mobile flex flex-col h-[100%] w-[100%] justify-center"> 
                <h1 className="title text-white pl-[5%] mt-[3%] text-lg font-bold mb-[3%]">Featured Movies</h1>
                <SlideshowMobile />
            </div>
            {/* Popular Movies */}
            <div className="popular-movies flex flex-col h-[100%] w-[100%] justify-center ">
                <h1 className="title pl-[5%] text-white text-lg font-bold">Most Popular Movies</h1>
                <div className="cards-mobile h-[100%] pl-[5%] w-[100%] pt-[2%] animate glow delay-3">
                {
                posterArray.map((poster)=>(
                    <Card name={poster.name} rating={poster.rating} img={poster.poster} key={poster.id} />
                ))
                }
            </div>
            </div>
            <div className="floating-menu bg-slate-500 flex fixed w-[100%] h-[7%] bottom-[0%] left-[0%]  justify-center items-center"> Menu</div>
        </div>
     );
}
 
export default HomepageMobile;