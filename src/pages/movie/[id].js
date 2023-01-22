import { server } from "config";
import Error from "next/error";

import Layout from "@/components/Movie/Layout";
import Poster from "@/components/Movie/Poster";
import About from "@/components/Movie/About";
import CastCrew from "@/components/Movie/Cast";
import Details from "@/components/Movie/Details";

function Movie({ movie }) {
  if (movie.success==false) {
    return <Error statusCode={404} />;
  }

  return (
    <div className="wrapper w-full max-w-[2100px] mx-auto">
      <div className="relative w-full mx-auto app-container">
        <div
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
          }}
          className="cover-image"
        ></div>
        <div className="gradient absolute top-[250px] w-full h-[150px] z-10"></div>
        <Layout>
          <Poster data={movie} />
          <About data={movie} />
          <CastCrew movie={movie} />
          <Details data={movie} />
        </Layout>
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
