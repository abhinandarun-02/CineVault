import axios from "axios";
import Image from "next/image";
import { server } from "config";

import Layout from "@/components/Movie/Layout";
import Poster from "@/components/Movie/Poster";
import About from "@/components/Movie/About";
import CastCrew from "@/components/Movie/Cast";
import Details from "@/components/Movie/Details";

import { poster } from "@/data/moneyheist";
import { about } from "@/data/moneyheist";
import { cast } from "@/data/moneyheist";
import { details } from "@/data/moneyheist";

function Movie({ movie }) {
  return (
    <div className="wrapper w-full max-w-[2100px] mx-auto">
      <div className="relative w-full mx-auto app-container">
        <div style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`}} className="cover-image"></div>
        <div className="gradient absolute top-[250px] w-full h-[150px] z-10"></div>
        <Layout>
          <Poster data={movie} />
          <About data={movie} />
          <CastCrew movie={movie}/>
          <Details data={movie} />
        </Layout>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await axios(
    `${server}movie/${id}?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const movie = res.data;

  return {
    props: { movie },
  };
}

export async function getStaticPaths() {
  const res = await axios(
    `${server}movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const movies = res.data.results;

  const ids = movies.map((movie) => movie.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}

export default Movie;
