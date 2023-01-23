import Image from "next/image";

const Loading = () => {
    return ( 
        <div className="loading-screen h-full w-[100%] absolute top-0 left-0 z-50 backdrop-blur-md flex flex-col justify-center items-center">
            <Image 
                src="/cinevault-hd-logo-green.png"
                height={400}
                width={400}
                alt={"Cinevault Logo"}
            />
            <div className="loader animate-spin"></div>
        </div>
     );
}
 
export default Loading;