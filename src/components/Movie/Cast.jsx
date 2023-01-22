import axios from "axios";
import { useState, useEffect } from "react";
import Avatar from "@/components/Movie/Avatar";

function CastCrew({ movie }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=85ece525863be4f3bfe54d2fc760091c`);
        setData(res.data.cast);
    }
    fetchData();
}, [movie.id])

  return (
    <section className="section-3 mx-auto px-4 w-full flex flex-col items-center overflow-x-hidden">
      <h2 className="title text-3xl font-semibold w-full text-center">
        Cast & Crew
      </h2>
      {/* FIXME : Cast section not responsive on small screens */}
      <div className="avatars mt-5 max-xl:w-full overflow-x-hidden">
        <ul className="cast flex flex-col gap-5 overflow-x-auto max-h-[360px]">
          {data.map((actor) => (
            <Avatar
              key={actor.id}
              name={actor.name}
              char={actor.character}
              img={actor.profile_path}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CastCrew;
