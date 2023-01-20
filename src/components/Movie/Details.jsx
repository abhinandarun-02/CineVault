import Tag from "./GenreTag";

function Details({ data }) {
  return (
    <section className="section-4">
      <div className="details">
        <h3 className="text-3xl font-semibold mt-8 mb-5">Details</h3>

        <div className="genre flex pb-4 border-b border-solid border-[#454e50]">
          <span className="text-[#e1e2e3] text-lg font-medium flex-grow-0 basis-[200px]">
            Genres
          </span>
          <div className="genres grow">
            <ul className="tags flex flex-wrap gap-4 w-full">
              <Tag name="Action" />
              <Tag name="Crime" />
              <Tag name="Drama" />
              <Tag name="Thriller" />
            </ul>
          </div>
        </div>
        <div className="origin py-4 flex items-center border-b border-solid border-[#454e50]">
          <span className="text-[#e1e2e3] text-lg font-medium flex-grow-0 basis-[200px]">
            Country of Origin
          </span>
          <div className="ans grow">
            <p className="country w-full text-lg text-[#b6b8b9]">{data.country_of_origin}</p>
          </div>
        </div>
        <div className="runtime flex items-center pt-4">
          <span className="text-[#e1e2e3] text-lg font-medium flex-grow-0 basis-[200px]">
            Runtime
          </span>
          <div className="ans grow">
            <p className="length w-full text-lg text-[#b6b8b9]">{data.runtime + " min"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
