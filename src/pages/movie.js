import Layout from "@/components/Movie/Layout";
import Poster from "@/components/Movie/Poster";
import About from "@/components/Movie/About";
import CastCrew from "@/components/Movie/Cast";
import Details from "@/components/Movie/Details";

import { poster } from "@/data/moneyheist";
import { about } from "@/data/moneyheist";
import { cast } from "@/data/moneyheist";
import { details } from "@/data/moneyheist";

function Movie() {
  return (
    <div className="wrapper w-full max-w-[2100px] mx-auto">
      <div className="relative w-full mx-auto app-container">
        <div className="cover-image"></div>
        <div className="gradient absolute top-[400px] w-full h-[200px] z-10"></div>
        <Layout>
          <Poster data={poster} />
          <About data={about} />
          <CastCrew data={cast} />
          <Details data={details} />
        </Layout>
      </div>
    </div>
  );
}

export default Movie;
