import React, { useState } from "react";
import Ratings from "@/components/Movie/Ratings";
import TrailerModal from "../TrailerModal";

function About({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  const index = data.videos.results.findIndex(
    (element) => element.type === "Trailer"
  );

  const languageNames = new Intl.DisplayNames(["en"], {
    type: "language",
  });

  return (
    <section className="section-2 px-4">
      <div className="about">
        <h1 className="text-5xl font-semibold title">{data.title}</h1>
        {data.original_title !== data.title && (
          <p className="mt-5 text-lg alias">
            {"Original Title : " + data.original_title}
          </p>
        )}
        <span className="flex flex-wrap gap-5 my-6 text-lg font-medium stats whitespace-nowrap">
          <p>{data.release_date.substring(0, 4)}</p>
          {<p>{languageNames.of(data.original_language)}</p>}
          <p>{data.production_companies[0].name}</p>
        </span>
      </div>
      <Ratings
        className={"about-chart lg:hidden max-sm:justify-around"}
        data={data}
      />
      <div className="flex gap-5 w-full buttons items-center max-sm:flex-col">
        <button
          onClick={() => setIsOpen(true)}
          className="watch-now flex items-center justify-center px-24 max-sm:px-4 py-4 bg-[#ff5059] rounded-[50px] text-center cursor-pointer max-sm:w-full"
        >
          <span className="text-2xl font-medium title whitespace-nowrap">
            Watch Trailer
          </span>
          <img
            className="w-8"
            src="/movie-page/play_arrow_white_18dp.svg"
            alt="play icon"
          />
          <TrailerModal isOpen={isOpen} setIsOpen={setIsOpen} trailerKey={`https://www.youtube.com/watch?v=${data.videos?.results[index]?.key}`} />
        </button>
        <div className="flex gap-5">
          <div className="bookmark border-2 border-solid border-white h-[60px] w-[60px] rounded-full flex justify-center items-center cursor-pointer">
            <img
              className="w-[60%] text-white"
              src="/movie-page/bookmark_border_black_24dp.svg"
              alt="bookmark icon"
            />
          </div>
          <div className="share border-2 border-solid border-white h-[60px] w-[60px] rounded-full flex justify-center items-center cursor-pointer">
            <img
              className="w-[60%] text-white"
              src="/movie-page/share_black_24dp.svg"
              alt="share icon"
            />
          </div>
        </div>
      </div>
      <div className="description">
        <div className="d-container">
          <p className="my-8 text-[#b6b8b9] font-medium text-lg">
            {data.overview}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
