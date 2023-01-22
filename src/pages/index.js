import axios from "axios";
import HomepageDesktop from '@/components/Homepage-dekstop'
import HomepageMobile from '@/components/Homepage-mobile';
import useWindowSize from '@/Hooks/useWindowSize'
import { useEffect,useState } from 'react';
import Movie from "@/pages/movie";
import { server } from "config";


export default function Home({movies}) {
  const size = useWindowSize();

  return (
    <div className='bg-[#252525]'>
      {size.width>=1000 && <HomepageDesktop movies={movies}/>}
      {size.width<1000 && <HomepageMobile width={size.width}/>}
    </div>
    // For Displaying Movie Page
    // <Movie/> 
  );
}

export async function getStaticProps() {
  const res = await axios(`${server}movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const movies = res.data;

  return {
    props: { movies }
  }
}