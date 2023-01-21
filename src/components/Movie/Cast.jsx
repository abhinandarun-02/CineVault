import Avatar from "@/components/Movie/Avatar";

function CastCrew({data}) {
  return (
    <section className="section-3 mx-auto px-4 w-full flex flex-col items-center">
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
                    img={actor.image}
                />
            ))}
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
    </section>
  );
}

export default CastCrew;
