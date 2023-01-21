import  BrokenPiggy  from "../svg-assets/piggybank-broken-svgrepo-com.svg"
import { router } from "next/router"

export default function errorPage(){

    return(
        <div className="error-page-parent bg-[#252525] min-h-screen min-w-full flex flex-col justify-center items-center text-center font-[Questrial] text-white">
            <BrokenPiggy height={"250px"} width={"250px"} fill="#00c896"/>
            <br></br>
            <p className="error-message font-bold text-3xl pt-[3%]">Error 404: Resource Not Found</p>
            <p className="error-message text-[#00c8968e] pt-[2%] text-xl">
                The Resource/Feature you&apos;re looking for has not been found.
                <br></br>
                Don&apos;t worry, new features will be brought forth in later updates
            </p>
            <br></br>
            <button className="h-[40%] bg-[#8685ef] p-2 rounded-2xl active:scale-95 transition-all duration-500" onClick={()=>{router.push("/")}}>
                Go Back
            </button>
        </div>
    )
}