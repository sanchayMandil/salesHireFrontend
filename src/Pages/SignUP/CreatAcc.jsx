import React, { useState, useRef, useEffect } from "react";
import Logo from "../../Components/login&register/Logo/Logo";
import { Link, useNavigate,} from "react-router-dom";
import axios from "axios";

// Main component for creating an account
function CreateAcc() {
    // for naviagation
    const nav = useNavigate();
    // State for email input
    const [email, setEmail] = useState("");
    // State for agreement checkbox
    const [agree, setAgree] = useState(false);
    // State to toggle OTP input rendering
    const [renderOtp, setRenderOtp] = useState(false);
    // OTP configuration
    const OTP_LENGTH = 4;
    // State for OTP digits
    const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(""));
    // Refs for OTP input fields
    const inputRefs = useRef([]);
    const [serverOTP,setServerOtp] = useState('');


    // Initialize refs for OTP inputs
    useEffect(() => {
        inputRefs.current = Array(OTP_LENGTH)
            .fill()
            .map((_, i) => inputRefs.current[i] || React.createRef());
    }, []);

    // Handle OTP input change
    const handleChange = (e, index) => {
        const value = e.target.value;
        // Only allow digits and single character
        if (!/^\d*$/.test(value) || value.length > 1) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        // Move focus to next input if value entered
        if (value && index < OTP_LENGTH - 1) {
            inputRefs.current[index + 1]?.current?.focus();
        }
    };

    // Handle backspace navigation in OTP inputs
    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.current?.focus();
        }
    };

    // Handle pasting OTP
    const handlePaste = (e) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData("text").slice(0, OTP_LENGTH);
        const newOtp = pasteData
            .split("")
            .slice(0, OTP_LENGTH)
            .map((char) => (/^\d$/.test(char) ? char : ""));
        const filledOtp = new Array(OTP_LENGTH)
            .fill("")
            .map((_, i) => newOtp[i] || "");
        setOtp(filledOtp);
        // Focus last filled input
        const lastFilledIndex = filledOtp.findIndex((char, i) => !char && i > 0) - 1;
        const focusIndex = lastFilledIndex >= 0 ? lastFilledIndex : OTP_LENGTH - 1;
        inputRefs.current[focusIndex]?.current?.focus();
    };

    // Concatenate OTP digits
    const fullOtp = otp.join("");

    // Handle form submission for email step
   async function handleNext() {
        // Validate email and agreement
        if (email && agree && /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email)) {
            try{
            setRenderOtp(true);
            //const recive_otp = await axios.post(`${import.meta.env.VITE_API_URL}otp`,{ email });
            //console.log(recive_otp.data);
            //const {otp} = recive_otp.data;
            //console.log(otp);
            //setServerOtp(otp);
            }catch(err){
            setRenderOtp(false);
            }

        } else {
            alert("Please enter a valid email and agree to terms.");
        }
    }
    async function handelCreate(e){
        e.preventDefault();
        // console.log(email,otp.join(''));
        // if(serverOTP==otp.join('')){
        //     // console.log(true);
        nav('/signup', { state: { email } });
        // }
        // else
        //     alert("invalid otp");
    }

    return (
        <div className="bg-[url(../src/assets/bg.jpg)] h-dvh bg-cover w-full bg-no-repeat">
           <div className="flex flex-row justify-center gap-x-[25vw] h-screen items-center max-md:flex-col max-md:justify-end max-md:gap-y-15">
                <Logo />
                <form   className="text-white flex flex-col px-[2vw] py-[2vw] bg-gradient-to-r from-[#393939] to-[#111111] rounded-[2vw] max-md:w-full max-md:rounded-b-[0vw] max-md:rounded-t-[5vw] max-md:pt-[4vh] max-md:pb-[2vh]">
                    <div className="my-[2vw] flex flex-col justify-center items-center max-md:scale-100 max-md:my-[5vw]">
                        {/* Heading changes based on OTP step */}
                        {renderOtp ? (
                            <h2 className="text-[2.5vw] poppins-bold mb-[2vw]
                            max-md:text-[8vw]">Verification</h2>
                        ) : (
                            <h1 className="poppins-bold text-[2.5vw] max-md:text-[6vw]">Welcome</h1>
                        )}
                        {/* Subheading changes based on OTP step */}
                        {renderOtp ? (
                            <p className="text-white/50 -mt-[1vw] text-[1vw] text-center
                            max-md:text-[3vw]">
                                We have sent OTP to your registered <br />Email
                            </p>
                        ) : (
                            <h2 className="-mt-[1vw] text-[1vw] text-center text-white/50 max-md:mt-0 max-md:mb-2 max-md:text-[3vw]">
                                Let’s get a best content Graphic <br />Designer for you.
                            </h2>
                        )}
                    </div>
                    {/* OTP input section */}
                    {renderOtp ? (
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex justify-center space-x-3" onPaste={handlePaste}>
                                {otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        maxLength="1"
                                        value={digit}
                                        onChange={(e) => handleChange(e, index)}
                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                        onFocus={(e) => e.target.select()}
                                        ref={inputRefs.current[index]}
                                        className="w-[5vw] h-[5vw] text-[1vw] text-center mb-[1vw] text-white border-2 border-white rounded-[0.5vw] outline-none transition-all duration-200 ease-in-out
                                        max-md:w-[15vw] max-md:h-[15vw]"
                                        inputMode="numeric"
                                        autoComplete="one-time-code"
                                    />
                                ))}
                            </div>
                            {/* Submit OTP button */}
                            <button
                                onClick={handelCreate}
                                disabled={fullOtp.length !== OTP_LENGTH}
                                className=" w-[85%] uppercase text-[0.7vw] bg-[#736ADB] hover:bg-blue-700 text-white py-[1vw] rounded-[0.5vw] mb-[1vw] shadow-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:opacity-50 disabled:cursor-not-allowed
                                max-md:py-[3vw] max-md:text-[4vw] max-md:my-[5vw]"
                            >
                                Create Account
                            </button>
                        </div>
                    ) : (
                        // Email and agreement section
                        <div className="flex flex-col justify-center max-md:gap-y-[4vw]">
                            <div className="mx-[1vw]">
                                <div className="relative mb-[1.5vw]">
                                    <label
                                        className="absolute z-10 text-[0.8vw] ml-[1.2vw] bg-gradient-to-r from-[#323232] to-[#2e2e2e] px-[0.5vw] -mt-[0.65vw] max-md:ml-[5vw] max-md:-mt-[1.9vw]  max-md:text-[3vw] max-md:from-[#353535] max-md:to-[#323232]"
                                        htmlFor="Email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="px-[4vw] relative py-[1vw] text-[1vw] rounded-[1vw] max-md:py-[4vw] max-md:rounded-[2vw] max-md:text-[3.5vw] focus:outline-none border w-full placeholder:text-white/50"
                                        type="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Demo@gmail.com"
                                    />
                                </div>
                            </div>
                            <div className="text-[0.75vw] ml-[2.5vw] mb-[1vw]">
                                <div>
                                    <input
                                        className="mr-[0.5vw] scale-400 
                                        max-2xl:scale-110
                                        max-xl:scale-80 max-lg:scale-70"
                                        type="checkbox"
                                        checked={agree}
                                        onChange={() => setAgree(!agree)}
                                    />
                                    <label className="max-md:text-[3.2vw]"
                                    >I Agree to Terms & Conditions and Privacy Policy</label>
                                </div>
                            </div>
                            {/* Next button to proceed to OTP */}
                            <button
                                className="text-[1vw] uppercase bg-[#736ADB] py-[1vw] mb-[1vw] rounded-[0.5vw] w-[85%] mx-auto
                                max-md:mb-[2.5vw] max-md:py-[3vw] max-md:text-[4vw]
                                max-md:rounded-[2vw]"
                                type="button"
                                onClick={handleNext}
                            >
                                Next
                            </button>
                        </div>
                    )}
                    {/* Link to sign in page */}
                    <span className="text-center text-[0.8vw] text-white/50
                    max-md:text-[3vw]">
                        I have an account? <Link to="/">Sign In</Link>
                    </span>
                </form>
            </div>
        </div>
    );
}

export default CreateAcc;