import axios from "axios";
import HomepageDesktop from '@/components/Homepage-dekstop'
import HomepageMobile from '@/components/Homepage-mobile';
import useWindowSize from '@/Hooks/useWindowSize'
import { server } from "config";


export default function Home({popularMovies, latestMovies,topMovies, upcomingMovies}) {
  const size = useWindowSize();
  return (
    <div className='bg-[#252525]'>
      {size.width>=1000 && <HomepageDesktop popularMovies={popularMovies} latestMovies={latestMovies} topMovies={topMovies} upcomingMovies={upcomingMovies}/>}
      {size.width<1000 && <HomepageMobile width={size.width} popularMovies={popularMovies} latestMovies={latestMovies} topMovies={topMovies} upcomingMovies={upcomingMovies}/>}
    </div>
  );
}

export async function getStaticProps() {
  const [popularMovies, latestMovies, topMovies, upcomingMovies] = await Promise.all([
    axios(`${server}movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`),
    axios(`${server}movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`),
    axios(`${server}movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`),
    axios(`${server}movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`),
  ]);

  return {
    props: { popularMovies: popularMovies.data, latestMovies: latestMovies.data, topMovies:topMovies.data, upcomingMovies:upcomingMovies.data  }
  }
}
