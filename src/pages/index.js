import { genreArray } from '@/data/genre'
import { useRouter } from 'next/router'
import { BsSearch } from "react-icons/bs"
import Slideshow from '@/components/slideshow'
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

export default function Home() {

  const router  = useRouter()

  return (
   <div className='parent-homepage h-[100vh] w-[100%] grid-row-1 text-[#686262]'>
      
      <div className="sidebar bg-[#111111] col-span-1 flex flex-col text-lg">
        <div className="logo flex h-[20%] w-[100%] bg-transparent justify-center items-center p-10">
            <img src="/cinevault-hd-logo-green.png" alt="logo-for-website" className="logo-image h-[125px] w-[200px]" />
        </div>
        <div className="title-genre mt-[40%] h-[5%] w-[100%] pl-5 flex items-center">
          <h1>Genre-Categories</h1>
        </div>
        <div className="genre-select flex flex-col h-[35%] w-[100%] bg-transparent justify-start items-center">
          {
            genreArray.map((genre) => (
              <div className="genre-category pt-5 pb-5 w-[100%] items-center justify-items-center border-r-[#8685ef] hover:border-r-4 hover:bg-[#353555] transition-all duration-300 cursor-pointer" key={genre.id}
                onClick = {()=>{router.push(genre.link)}}
              >
                {returnSVG(genre.id)}
                {genre.message}
              </div>
            ))
          }
        </div>
      </div>

      <div className="main-content bg-[#252525] col-start-2 col-span-4 ">
        <div className="top-bar justify-center items-center h-[10%] w-[100%]">
          <div className="search-bar bg-[#393939] w-[75%] h-[60%] ml-10 pl-5 rounded-3xl" >
              <BsSearch />
              <input type="text" className=' outline-none bg-transparent text-gray-400 h-[100%]' placeholder='Search For Movies' />
          </div>
          <div className="username bg-[#393939] w-[75%] h-[60%] ml-10 rounded-3xl">
            <img src="/cinevault-logo-img.png" alt="profile-pic" className="profile-pic h-[75%] w-[75%] bg-[#252525] object-scale-down rounded-full justify-self-center" />
            <div className="user-profile-name text-white">CineVault User</div>
          </div>
        </div>
        <div className="slide-show flex justify-center items-center h-[40%] w-[100%]">
          <Slideshow />
        </div>
        <div className="popular-movies flex justify-center items-center h-[50%] w-[100%] bg-violet-300">
          Popular movies Content here
        </div>
      </div>
   </div>
  )
}