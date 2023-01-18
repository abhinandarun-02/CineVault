import { AiFillStar } from "react-icons/ai";

const Cards = ({name,rating,img,id}) => {
    return ( 
        <div className="card-parent h-[95%] max-h-[400px] w-[17%] min-w-[250px] rounded-2xl">
            <img src={img} alt={id+" poster"} className="poster overflow-hidden rounded-2xl h-[100%] w-[100%] object-fill" />
            <br />
            <div className="movie-details pl-[2%] text-white font-bold flex flex-col">
                <h1 className="name">{name}</h1>
                <div className="rating flex flex-row items-center">
                    <AiFillStar color="#00c896"/>
                    <p className="ml-[4%]">{rating}</p>
                </div>
            </div>
        </div>
     );
}
 
export default Cards;