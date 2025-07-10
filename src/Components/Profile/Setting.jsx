import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Setting({ setOption }){
    const nav = useNavigate();
    const [toggle,setToggle] = useState(false)
    const [deactivate,setdiactivate] = useState(false)
    return(
        <div className="bg-gradient-to-br from-[#393939] to-[#121212] h-dvh w-[100vw] ">
             <button 
                    onClick={() => setOption(0)}
                    className="text-white poppins-bold -tracking-normal text-[2.5vw] max-md:text-[5vw] pl-[1vw] max-md:pl-[2vw] max-md:py-[2vw] cursor-pointer"
                >
                    <img 
                        className="h-[2vw] w-[2vw] max-md:h-[4vw] max-md:w-[4vw] inline-block invert pr-[1vw] -mt-[0.5vw]"
                        src="https://img.icons8.com/?size=100&id=40217&format=png&color=000000" 
                        alt="Chat icon" 
                    />
                    Setting
                </button>
                <div className="flex flex-col justify-start items-start text-[2vw] max-md:text-[4.5vw] px-[2vw] text-white my-[3vw] gap-y-[1vw] max-md:gap-y-[3vw]">
                    <div className="flex justify-between items-center gap-x-[68vw] max-md:gap-x-[65vw]">
                        <label htmlFor=""> Notification</label>
                        <button className="bg-[#434141] w-[4vw] h-[1.7vw] max-md:w-[8vw] max-md:h-[4vw] rounded-l-full rounded-r-full grid grid-cols-2 items-center cursor-pointer"
                        type="button"
                        onClick={()=>{setToggle(!toggle)}}>
                        {toggle?<div className="rounded-full h-[1.3vw] w-[1.3vw] mx-[0.3vw] bg-[#d6d3f9] max-md:h-[3vw]  max-md:w-[3vw]">
                        </div>:null}
                        {toggle?null:<div className="rounded-full h-[1.3vw] w-[1.3vw] mx-[0.3vw] bg-[#736ADB] col-start-2 max-md:h-[3vw]  max-md:w-[3vw]">
                        </div>}
                        </button>
                       </div>
                    <button type="button"
                    onClick={()=>setdiactivate(!deactivate)}
                    className="text-[#D62525] cursor-pointer">Deactive Account</button>
                </div>
                {deactivate?<div className="absolute left-[37%] top-[20%] max-md:scale-250 max-md:left-[50%] max-md:top-[40%]">
                            <div className="flex flex-col justify-center items-center z-100 text-white bg-gradient-to-br from-[#3d3d3d] to-[#131313] w-[60%] rounded-[2vw] py-[3vw]">
                                <button 
                                type="button" 
                                onClick={()=>setdiactivate(!deactivate)}
                                className=" ml-[20vw] -mt-[1vw] text-[2vw] text-right">X</button>
                                <img className="h-[7vw]"
                                src="https://img.icons8.com/?size=100&id=5tH5sHqq0t2q&format=png&color=000000" alt="" />
                                <h1 className="text-[2vw]">Deactive Account</h1>
                                <p className="text-[1vw] w-2/3 text-white/50 text-center">
                                    Your account will be deactive till for 3 months, If you are inactive still after 3 months your account will be deleted 
                                </p>
                                <button className="text-[1.2vw] bg-[#3d3d3d] px-[3vw] py-[0.5vw] rounded-[0.5vw] my-[2.5vw]">Deactive Account</button>
                            </div>
                </div>:null}
        </div>
    );
}
export default Setting;
