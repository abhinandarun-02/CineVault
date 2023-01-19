import React, { useState } from "react";
import { romcomlst } from "@/data/romcommvs";
import { SiImdb } from "react-icons/si";

function romcompage() {
  const [hover, setHover] = useState(false);
  const [bgImage, setBgImage] = useState(
    "https://png.pngtree.com/thumb_back/fw800/background/20220215/pngtree-retro-video-camera-poster-of-film-and-television-festival-image_926071.jpg"
  );
  const [titleDet, settitleDet] = useState("");
  const [descDet, setdescDet] = useState("");
  const [dirctr, setDirctr] = useState("");
  const [yearDet, setyearDet] = useState("");
  return (
    /*<div className="h-[100vh] bg-sky-500 ">*/
    <div
      className=" min-h-screen bg-cover duration-500 relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="genredes bg-gradient-to-t from-black     ">
        <div className="genredes bg-gradient-to-t from-black pl-5">
          <div className="grid grid-rows-2 min-h-screen grid-flow-col">
            <div className=" pl-5 p-15 absolute text-left duration-500 w-2/4">
              <div className="text-9xl text-white font-bold font-carterfont">
                {titleDet}
              </div>
              <div className=" text-3xl text-white font-normal  pt-3">
                {yearDet}
              </div>
              {hover && (
                <div className=" text-3xl text-white font-normal  pt-3 ">
                  <SiImdb /> {descDet}
                </div>
              )}
              {hover && (
                <div className=" text-3xl text-white font-normal pb-3 ">
                  Director: {dirctr}
                </div>
              )}
              {hover && (
                <button class=" bg-black hover:scale-105 text-white font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
                  Learn More
                </button>
              )}
            </div>

            <div>
            <div className="flex flex-row overflow-scroll flex-shrink-0">
              {romcomlst.map((mvlst) => (
                <div className=" p-2 ">
                  <div
                    className={`relative hover:scale-110 border-solid border-black `}
                    onMouseEnter={() => {
                      setBgImage(mvlst.hovimg);
                      settitleDet(mvlst.title);
                      setDirctr(mvlst.dirctr);
                      setdescDet(mvlst.imdb);
                      setyearDet(mvlst.year);
                      setHover(true);
                    }}
                    onMouseLeave={() => setHover(true)}
                  >
                    <div className=" overflow-hidden shadow-xl min-h-[200px] min-w-[200px] ">
                      <img
                        
                        className="rounded-2xl object-cover "
                        src={mvlst.image}
                        alt="Card Image"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default romcompage;
