const HomepageMobile = () => {
    return ( 
        <div className="homepage-mobile h-[100vh] bg-[#252525] ">
            <div className="title-bar flex bg-red-300 h-[100%] w-[100%] justify-center items-center"> searchbar </div>
            <div className="slideshow-mobile flex bg-blue-300 h-[100%] w-[100%] justify-center items-center"> Slideshow </div>
            <div className="popular-movies flex bg-orange-300 h-[100%] w-[100%] justify-center items-center">Popular  Movies</div>
            <div className="floating-menu bg-slate-500 flex fixed w-[95%] h-[10%] bottom-[5%] left-[2%] rounded-full justify-center items-center"> Menu</div>
        </div>
     );
}
 
export default HomepageMobile;