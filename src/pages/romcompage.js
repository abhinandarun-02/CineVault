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
    <div>
    <div>romcompage</div>
    {
        romcomlst.map((mvlst) =>(
          <div className='pl-3 pb-5' key={mvlst.id}>
            <a href="/testpg" target="_blank"><p className=' pt-5 pb-5'>{mvlst.title}</p>
                <img width="250px" height="250px" className="card-img-top pb-5 " src={mvlst.image} alt={mvlst.alt} />
            </a>
            <p>{mvlst.desc}</p>
          </div>
))}
        </div>
        
  );
        
}

export default romcompage;
