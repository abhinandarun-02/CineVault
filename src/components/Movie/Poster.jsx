function Poster({data}) {
  return (
    <section className="section-1 relative text-center">
      <div className="movie-container absolute inset-0 -top-10 w-[250px] mx-auto">
        <div className="movie-poster">
          <img
            className="w-full rounded-xl"
            src={data.src}
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
              strokeDasharray={(data.rating*10).toString() + ", 100"}
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
              {data.rating}
            </text>
          </svg>
          <div className="ratings font-medium text-left text-lg flex flex-col justify-around">
            <p>{data.no_of_ratings} Ratings</p>
            <p>{data.no_of_reviews} Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Poster;
