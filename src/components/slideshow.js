import { RxChevronLeft } from "react-icons/rx";
import { RxChevronRight } from "react-icons/rx";
import { RxDividerVertical } from "react-icons/rx";


const Slideshow = () => {
    return ( 
        <div className="slideshow relative h-[90%] w-[90%] bg-black rounded-2xl">
            <span className="controls absolute flex flex-row items-center justify-center h-[10%] w-[10%] right-10 bottom-10 ">
                <button className="prev active:scale-75 transition-all duration-200"><RxChevronLeft size={20} color={"white"}/></button>
                <div className="line"><RxDividerVertical size={32} color={"white"}/></div>
                <button className="next active:scale-75 transition-all duration-200"><RxChevronRight size={20} color={"white"}/></button>
            </span>
            <div className="info flex justify-center items-center text-white h-[100%] w-[40%] rounded-tl-2xl rounded-bl-2xl rounded-br-md rounded-tr-md">
                Random info about a movie
            </div>
        </div>
     );
}
 
export default Slideshow;