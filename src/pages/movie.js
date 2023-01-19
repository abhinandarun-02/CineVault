import Image from "next/image";

function Movie() {
  return (
    <div className="wrapper w-full max-w-[2100px] mx-auto">
      <div className="w-full mx-auto app-container">
        <div className="cover-image"></div>
        <main className="movie-details z-20 w-full">
          <div className="section-1 text-center">
            <div className="movie-container w-[250px] mx-auto">
              <div className="movie-poster">
                <img
                  className="w-full rounded-xl"
                  src={"/movie-page/MH_S5_Promotional.webp"}
                  alt="Movie Poster"
                />
              </div>
              <div className="single-chart">
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path
                    className="circle-bg"
                    d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="circle"
                    strokeDasharray="82, 100"
                    d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <text
                    x="18"
                    y="18"
                    dominantBaseline="middle"
                    className="percentage"
                  >
                    8.2
                  </text>
                </svg>
                <div className="ratings font-medium text-left text-lg flex flex-col justify-around">
                  <p>158,675 Ratings</p>
                  <p>84 Reviews</p>
                </div>
              </div>
            </div>
          </div>
          <div className="section-2">
            <div className="about">
              <h1 className="text-5xl font-semibold title">Money Heist</h1>
              <p className="mt-5 text-lg alias">
                Original Title : La Casa De Papel
              </p>
              <span className="flex gap-5 my-6 text-lg font-medium stats">
                <p>Series (2017-2021)</p>
                <p>5 Seasons</p>
                <p>48 Episodes</p>
              </span>
            </div>
            <div className="flex gap-5 buttons">
              <div className="watch-now flex items-center justify-center h-[60px] w-[250px] bg-[#ff5059] rounded-[50px] text-center cursor-pointer">
                <span className="text-xl font-medium title">Watch Trailer</span>
                <img
                  className="w-8"
                  src="/movie-page/play_arrow_white_18dp.svg"
                  alt="play icon"
                />
              </div>
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
            <div className="description">
              <div className="d-container">
                <p className="my-8 pr-[50px] text-[#b6b8b9] font-medium text-lg">
                  A criminal mastermind who goes by "The Professor" has a plan
                  to pull off the biggest heist in recorded history -- to print
                  billions of euros in the Royal Mint of Spain. To help him
                  carry out the ambitious plan, he recruits eight people with
                  certain abilities and who have nothing to lose. The group of
                  thieves take hostages to aid in their negotiations with the
                  authorities, who strategize to come up with a way to capture
                  The Professor.
                </p>
              </div>
            </div>
          </div>
          <div className="section-3 mx-auto w-full flex flex-col items-center">
            <h2 className="title text-3xl font-semibold w-full text-center">
              Cast & Crew
            </h2>
            <div className="avatars mt-5">
              <ul className="cast flex flex-col gap-5">
                <li className="avatar flex items-center gap-5">
                  <img
                    className="w-[75px] h-[75px] rounded-full"
                    src="/movie-page/avatar-professor.jpg"
                    alt="avatar"
                  />
                  <div className="cast-details">
                    <h4 className="font-semibold text-lg">Álvaro Morte</h4>
                    <p className="font-normal">The Professor</p>
                  </div>
                </li>
                <li className="avatar flex items-center gap-5">
                  <img
                    className="w-[75px] h-[75px] rounded-full"
                    src="/movie-page/avatar-tokyo.jpg"
                    alt="avatar"
                  />
                  <div className="cast-details">
                    <h4 className="font-semibold text-lg">Úrsula Corberó</h4>
                    <p className="font-normal">Tokyo</p>
                  </div>
                </li>
                <li className="avatar flex items-center gap-5">
                  <img
                    className="w-[75px] h-[75px] rounded-full"
                    src="/movie-page/avatar-berlin.jpg"
                    alt="avatar"
                  />
                  <div className="cast-details">
                    <h4 className="font-semibold text-lg">Pedro Alonso</h4>
                    <p className="font-normal">Berlin</p>
                  </div>
                </li>
                <li className="avatar flex items-center gap-5">
                  <img
                    className="w-[75px] h-[75px] rounded-full"
                    src="/movie-page/avatar-nairobi.webp"
                    alt="avatar"
                  />
                  <div className="cast-details">
                    <h4 className="font-semibold text-lg">Alba Flores</h4>
                    <p className="font-normal">Nairobi</p>
                  </div>
                </li>
              </ul>
              <div className="expand flex mt-4 cursor-pointer">
                <h4 className="text-[#ff5059] text-xl font-medium">Show All</h4>
                <img
                  className="pl-3 w-10"
                  src="/movie-page/expand_circle_down_white_18dp.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="section-4">
            <div className="details">
              <h3 className="text-3xl font-semibold mt-8 mb-5">Details</h3>
              <div className="genre flex pb-4 border-b border-solid border-[#454e50]">
                <span className="text-[#e1e2e3] text-lg font-medium flex-grow-0 basis-[200px]">
                  Genres
                </span>
                <div className="genres grow">
                  <ul className="tags flex flex-wrap gap-4 w-full">
                    <li className="tag text-base bg-[#454e50] text-white h-7 px-5 py-1 rounded-[40px] flex items-center justify-center">
                      Action
                    </li>
                    <li className="tag text-base bg-[#454e50] text-white h-7 px-5 py-1 rounded-[40px] flex items-center justify-center">
                      Crime
                    </li>
                    <li className="tag text-base bg-[#454e50] text-white h-7 px-5 py-1 rounded-[40px] flex items-center justify-center">
                      Drama
                    </li>
                    <li className="tag text-base bg-[#454e50] text-white h-7 px-5 py-1 rounded-[40px] flex items-center justify-center">
                      Thriller
                    </li>
                  </ul>
                </div>
              </div>
              <div className="origin flex items-center border-b border-solid border-[#454e50]">
                <span className="text-[#e1e2e3] text-lg font-medium flex-grow-0 basis-[200px]">
                  Country of Origin
                </span>
                <div className="ans grow">
                  <p className="country w-full text-lg m-4 text-[#b6b8b9]">
                    Spain
                  </p>
                </div>
              </div>
              <div className="runtime flex items-center">
                <span className="text-[#e1e2e3] text-lg font-medium flex-grow-0 basis-[200px]">
                  Runtime
                </span>
                <div className="ans grow">
                  <p className="length w-full text-lg m-4 text-[#b6b8b9]">
                    50min
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Movie;
