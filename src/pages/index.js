import styles from '@/styles/Home.module.css'
import { genreArray } from '@/data/genre'

export default function Home() {
  return (
   <div className='h-[100vh] w-[100%] grid grid-col-5 grid-row-1'>
      <div className="sidebar bg-[#111111] col-span-1 flex flex-col">
        <div className="logo flex h-[20%] w-[100%] bg-red-300 justify-center items-center">
          <div className="test">
            Logo Here
          </div>
        </div>
        <div className="genre-select flex h-[80%] w-[100%] bg-blue-300 justify-center items-center">
          Genres Buttons Here
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