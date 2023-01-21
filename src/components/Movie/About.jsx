import Ratings from "@/components/Movie/Ratings";

function About({ data }) {
  return (
    <section className="section-2 px-4">
      <div className="about">
        <h1 className="text-5xl font-semibold title">{data.title}</h1>
        {data.alias != null && data.alias.length > 0 && (
          <p className="mt-5 text-lg alias">
            {"Original Title : " + data.alias}
          </p>
        )}
        <span className="flex flex-wrap gap-5 my-6 text-lg font-medium stats whitespace-nowrap">
          {data.type === "Series" && (
            <>
              <p>{data.type + "(" + data.year + "-" + data.end_year + ")"}</p>
              <p>{data.no_of_seasons + " Seasons"}</p>
              <p>{data.no_of_episodes + " Episodes"}</p>
            </>
          )}
          {data.type === "Movie" && (
            <>
              {/* TODO : Add more content for movie */}
              <p>{data.type + " : " + data.year}</p>
            </>
          )}
        </span>
      </div>
      <Ratings className={"about-chart lg:hidden max-sm:justify-around"} />
      <div className="flex gap-5 w-full buttons items-center max-sm:flex-col">
        <div className="watch-now flex items-center justify-center px-24 max-sm:px-4 py-4 bg-[#ff5059] rounded-[50px] text-center cursor-pointer max-sm:w-full">
          <span className="text-2xl font-medium title whitespace-nowrap">
            Watch Trailer
          </span>
          <img
            className="w-8"
            src="/movie-page/play_arrow_white_18dp.svg"
            alt="play icon"
          />
        </div>
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
            {data.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
