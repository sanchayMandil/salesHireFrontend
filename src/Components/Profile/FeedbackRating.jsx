import { useNavigate } from "react-router-dom";
import {useDtaet, useState} from 'react'
import { img } from "motion/react-client";

function Feedbackrating({ setOption }){
    const nav = useNavigate();
    const [option, setoption]  = useState(1);
    //https://img.icons8.com/?size=100&id=2AuMnRFVB9b1&format=png&color=000000
    //https://img.icons8.com/?size=100&id=zWBbi62CYIKH&format=png&color=000000
    const myFeedback=[
            {
        name: "Aarav Mehta",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaljF7oMm73Y0QrJLnB2cRENGGyPlKadeGZA&s",
        occupation: "Graphic Designer",
        rating: 4.8,
        feedback: "Aarav's designs are top-notch! His ability to blend colors and typography is truly impressive. Our brand now stands out visually, thanks to his expertise.",
        verified:true
    },
    {
        name: "Sneha Sharma",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrSISWg5677MbU5K41wN8gaGK4W24d8ixfnK_EWpdyKUnrnFxBMGQlQjNarijIWtQl32Y&usqp=CAU",
        occupation: "Graphic Designer",
        rating: 4.5,
        feedback: "Sneha's creativity brought our website to life! Her UI design feels modern and engaging, and the use of motion graphics made a huge difference in user interaction.",
        verified:true
    },
    {
        name: "Rohan Iyer",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPOoSyT5n-WoO4K0-Mn9jWYTc2aR91C0xHWg&s",
        occupation: "Graphic Designer",
        rating: 4.9,
        feedback: "Rohan is a branding genius! His designs are visually stunning and strategically crafted to boost engagement. We've seen a huge impact on our marketing success!",
        verified:false
    }

    ]

    return(
        <>
        <div className="bg-[#202020] h-dvh overflow-auto w-[98vw] max-md:w-[100vw]">
             <button 
                    onClick={() => setOption(0)}
                    className="text-white poppins-bold -tracking-normal text-[2vw] max-md:text-[5vw] pl-[1vw] max-md:pl-[2vw] max-md:py-[2vw] cursor-pointer"
                >
                    <img 
                        className="h-[2vw] w-[2vw] max-md:h-[4vw] max-md:w-[4vw] inline-block invert pr-[1vw] -mt-[0.5vw]"
                        src="https://img.icons8.com/?size=100&id=40217&format=png&color=000000" 
                        alt="Chat icon" 
                    />
                    Feedback & Rating
                </button>
                {/* feedback container */}
                <div className="flex flex-col justify-start text-white">
                {/* feedback option section */}
                    <div className="flex justify-start ml-[2vw] items-start text-[1vw] gap-x-[1vw] max-md:text-[3vw] max-md:ml-[3vw]">
                        <button type="button"
                        onClick={()=>setoption(1)}
                        className={`rounded-[2vw] ${option === 1 ? "bg-[#3C3C3C] " : "hover:bg-[#3C3C3C]"} px-[2.5vw] py-[1vw]`}>My Feedback</button>
                        <button type="button"
                        onClick={()=>setoption(2)}
                        className={`rounded-[2vw] ${option === 2 ? "bg-[#3C3C3C] " : "hover:bg-[#3C3C3C]"} px-[2.5vw] py-[1vw]`}>Customer Feedback</button>
                    </div>
                    {/* rFeedback */}
                    <div className=" grid grid-cols-2 justify-start p-[1.2vw] gap-y-[1vw] max-md:grid-cols-1">
                         {myFeedback.map((list, idx)=>(
                            <div key={idx} className="flex flex-col justify-start items-start my-4 p-4 max-md:w-[90vw] max-md:my-[0vw]">
                                {/* Star rating */}
                                <div className="flex items-center mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <img 
                                            key={i}
                                            src={
                                                i < Math.floor(list.rating)
                                                    ? "https://img.icons8.com/?size=100&id=XBMnwwJYQvfN&format=png&color=000000"
                                                    : "https://img.icons8.com/?size=100&id=zWBbi62CYIKH&format=png&color=CCCCCC"
                                            }
                                            alt={i < Math.floor(list.rating) ? "Filled star" : "Empty star"}
                                            className=" mr-[0.5vw] h-[2vw] max-md:h-[5vw]"
                                        />
                                    ))}
                                    <span className="ml-2 text-white font-semibold text-[2vw] max-md:text-[4vw]">{list.rating}</span>
                                </div>
                                <div className="text-base w-1/2 text-[1.2vw] max-md:text-[3vw] max-md:w-2/3">{list.feedback}</div>
                                <div className="flex items-center mb-2">
                                    <img src={list.profileImage} alt={list.name} className="rounded-full mr-3 w-[5vw] h-[5vw] max-md:w-[15vw] max-md:h-[15vw]" />
                                    <div>
                                        <div className="font-bold text-[2vw] flex justify-center items-center max-md:text-[4vw]"><h1>{list.name}</h1>
                                        {list.verified?<img className="w-[2vw] h-[2vw] max-md:h-[5vw] max-md:w-[5vw]"
                                        src="https://img.icons8.com/?size=100&id=2AuMnRFVB9b1&format=png&color=000000"/>:null}
                                        </div>
                                        
                                        <div className="text-[1.3vw] text-gray-400 max-md:text-[3vw]">{list.occupation}</div>
                                    </div>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </div>
        </div>
        </>
    );
}
export default Feedbackrating;
