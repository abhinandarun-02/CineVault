import Link from "next/link";

import { AiFillStar } from "react-icons/ai";

const Cards = ({name,rating,img,id,onClick}) => {
    return ( 
        <Link href={`/movie/${id}`} className="card-parent lg:mr-[2%] mr-[20px] h-[95%] lg:max-h-[400px] max-h-[325px] w-[17%] lg:min-w-[250px] min-w-[200px] rounded-2xl" onClick={onClick}>
            <img src={img} alt={id+" poster"} className="poster overflow-hidden rounded-2xl h-[100%] w-[100%] object-fill" />
            <br />
            <div className="movie-details-homepage pl-[2%] text-white font-bold flex flex-col">
                <h1 className="name">{name}</h1>
                <div className="rating flex flex-row items-center">
                    <AiFillStar color="#00c896"/>
                    <p className="ml-[4%]">{rating}</p>
                </div>
            </div>
        </Link>
     );
}
 
export default Cards;