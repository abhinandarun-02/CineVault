import Ratings from "@/components/Movie/Ratings";

function Poster({ data }) {
  return (
    <section className="section-1 relative text-center">
      <div className="movie-container xl:absolute inset-0 -top-10 w-[250px] mx-auto">
        <div className="movie-poster">
          <img
            className="w-full rounded-xl"
            src={"https://image.tmdb.org/t/p/w500/" + data.poster_path}
            alt="Movie Poster"
          />
        </div>
        <Ratings className={"single-chart"} data={data}/>
      </div>
    </section>
  );
}

export default Poster;
