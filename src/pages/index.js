import { genreArray } from '@/data/genre'
import { useRouter } from 'next/router'
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
              <div className="genre-category pt-5 pb-5 w-[100%] items-center justify-items-center border-r-[#8685ef] hover:border-r-4 hover:bg-[#353555] transition-colors duration-300 cursor-pointer" key={genre.id}
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
        <div className="top-bar flex justify-center items-center h-[10%] w-[100%] bg-green-300">
          Top Search bar here
        </div>
        <div className="slide-show flex justify-center items-center h-[40%] w-[100%] bg-orange-300">
          Slide show here
        </div>
        <div className="popular-movies flex justify-center items-center h-[50%] w-[100%] bg-violet-300">
          Popular movies Content here
        </div>
      </div>
   </div>
  )
}