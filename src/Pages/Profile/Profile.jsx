import { useState } from "react";
import ProfileContainer from "../../Components/Profile/ProfifeContainer";
import MyChat from "../../Components/Profile/MyChat";
import Setting from "../../Components/Profile/Setting";
import MyOrder from "../../Components/Profile/MyOrder";
import Feedbackrating from "../../Components/Profile/FeedbackRating";
import SupportHelp from "../../Components/Profile/SupportHelp";
import ChangePassword from "../../Components/Profile/ChangePassword";

function Profile() {
    const [isOpen, setIsOpen] = useState(false);
    const [option, setOption] = useState(0);

    return (
        <div className="relative flex flex-row ">
            {/* profile container */}
            {(() => {
                    switch (option) {
                     case 0:
                         return <ProfileContainer/>;
                    case 1:
                         return <h1><MyChat/></h1>;
                    case 3:
                        return <h1><MyOrder/></h1>;
                    case 4:
                        return <Feedbackrating/>
                    case 5:
                        return <ChangePassword/>
                        case 6:
                        return <SupportHelp/>
                        case 7:
                        return <h1><Setting/></h1>
                    default:
                        return <h1>404 Not Found</h1>;
        }
      })()}
        <div className={`max-md:absolute w-[15%] z-100 h-screen bg-gradient-to-br from-[#383838] to-[#111111] border-x-[0.1vw] border-gray-600 fixed right-0 px-[0.5vw] max-md:w-auto max-md:bg-none max-md:border-0 ${option!=0 ? "max-md:hidden" : "max-md:block"}`}>
                {/* options */}
                <div className="relative">
                    {/* Three-dot menu button (visible on max-md) */}
                    <button type="button"
                        className="md:hidden flex items-center justify-center w-[3vw] h-[3vw] rounded-full max-md:scale-300 max-md:mt-[5vw] max-md:mr-[2vw]"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="text-white text-[2vw]">⋮</span>
                    </button>

                    <div
                        className={`absolute max-md:top-[4.5vw] max-md:right-[1vw] max-md:w-[35vw] rounded-md shadow-lg max-md:bg-gradient-to-br from-[#383838] to-[#111111]  ${
                            isOpen ? "block" : "hidden"
                        } md:flex md:flex-col md:justify-start md:items-start text-white py-[1vw] text-[1vw] max-md:text-[2.5vw]`}
                    >
                        <button type="button" onClick={()=>setOption(1)} 
                         className="py-[1vw] hover:bg-gray-700 w-full flex px-[0.5vw]">
                            <img
                                className="invert w-[2vw] inline-block pl-[0.5vw] transform scale-x-[-1] -mt-[0.2vw] max-md:w-[5.5vw]"
                                src="https://img.icons8.com/?size=100&id=59999&format=png&color=000000"
                                alt=""
                            />
                            <label htmlFor="">My Chat</label>
                        </button>
                        <button type="button" onClick={()=>setOption(3)}
                         className="py-[1vw] hover:bg-gray-700 w-full flex px-[0.5vw]">
                            <img
                                className="invert w-[2vw] inline-block pl-[0.5vw] transform scale-x-[-1] -mt-[0.2vw] max-md:w-[5.5vw]"
                                src="https://img.icons8.com/?size=100&id=7Mc0qnzxDnRO&format=png&color=000000"
                                alt=""
                            />
                            My Worke
                        </button>
                        <button type="button" onClick={()=>setOption(4)} 
                         className="py-[1vw] hover:bg-gray-700 w-full flex px-[0.5vw]">
                            <img
                                className="invert  w-[2vw] inline-block pl-[0.5vw] transform scale-x-[-1] -mt-[0.2vw] max-md:w-[5.5vw]"
                                src="https://img.icons8.com/?size=100&id=667idArLy8ci&format=png&color=000000"
                                alt=""
                            />
                            Feedback & Rating
                        </button>
                        <button type="button" onClick={()=>setOption(5)}
                        className="py-[1vw] hover:bg-gray-700 w-full flex px-[0.5vw]">
                            <img
                                className="invert w-[2vw] inline-block pb-[0.5vw] -rotate-90 -mt-[0.2vw] max-md:w-[5.5vw]"
                                src="https://img.icons8.com/?size=100&id=PZ3ZYbpUacd9&format=png&color=000000"
                                alt=""
                            />
                            <label className="max-md:mt-[0.8vw]"
                            htmlFor="">CHANGE PASSWORD</label>
                        </button>
                        <button type="button" onClick={()=>setOption(6)}
                         className="py-[1vw] hover:bg-gray-700 w-full flex px-[0.5vw]">
                            <img
                                className="invert  w-[2vw] inline-block pl-[0.5vw] transform scale-x-[-1] -mt-[0.2vw] max-md:w-[5.5vw]"
                                src="https://img.icons8.com/?size=100&id=46LgER0wUAG0&format=png&color=000000"
                                alt=""
                            />
                            SUPPORT & HELP
                        </button>
                        <button type="button" onClick={()=>setOption(7)}
                         className="py-[1vw] hover:bg-gray-700 w-full flex px-[0.5vw]">
                            <img
                                className="invert  w-[2vw] inline-block pl-[0.5vw] transform scale-x-[-1] -mt-[0.2vw] max-md:w-[5.5vw]"
                                src="https://img.icons8.com/?size=100&id=Zydyx4gBcOrY&format=png&color=000000"
                                alt=""
                            />
                            SETTING
                        </button>
                        <button type="button" 
                         className="py-[1vw] hover:bg-gray-700 w-full flex px-[0.5vw]">
                            <img
                                className="invert  w-[2vw] inline-block pl-[0.5vw] transform scale-x-[-1] -mt-[0.2vw] max-md:w-[5.5vw]"
                                src="https://img.icons8.com/?size=100&id=BdksXmxLaK8r&format=png&color=000000"
                                alt=""
                            />
                            LOG OUT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;