function Logo() {
  return (
    <>
      <div className="inset-shadow-blue-900 h-auto w-[25%] overflow-hidden flex justify-center items-center relative max-md:w-full">
        <div className="blur-[15px] backdrop-brightness-140 bg-black/20 absolute h-full w-full"></div>
        <div className="z-10 relative text-center text-white flex flex-col pt-[8vh] pb-[2vh] max-md:scale-100 max-md:pt-[5vh] max-md:pb-4">
          <h1 className="text-[3vw] poppins-bold tracking-[0.2vw] max-md:text-[9vw]">Sales</h1>
          <h2 className="text-[1.85vw] poppins-thin tracking-[0.95vw] max-md:text-[8vw]">Managers</h2>
        </div>
      </div>
    </>
  );
}

export default Logo;