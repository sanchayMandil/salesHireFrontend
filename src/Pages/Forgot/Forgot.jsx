import React, { useState } from 'react';
import Logo from '../../Components/login&register/Logo/Logo';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Forgot = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState(['', '', '', '']);
    const [sendOtp, setSendOtp] = useState(false);
    const [error, setError] = useState('');
    const nav = useNavigate();

    const handleOtpChange = (value, index) => {
        if (!/^\d?$/.test(value)) return; // allow only single digits
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-focus next input
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (value && nextInput) {
            nextInput.focus();
        }
    };

    async function handleOtp() {
        if (email === '') return setError('Enter the email');
        setError('');
        const type = 'forgot';
        try {
            // axios.post(`${import.meta.env.VITE_API_URL}api/forgot`, { email, type })
            //     .then((res) => {
                     setSendOtp(!sendOtp);
            //         console.log(res);
            //     })
            //     .catch((err) => console.log(err));
        } catch (err) {
            console.log(err);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const enteredOtp = otp.join('');
        console.log('Email:', email);
        console.log('OTP:', enteredOtp);
        // Call your backend or validation logic here
        nav('/')
    };

    return (
        <div className="bg-[url(../src/assets/bg.jpg)] h-dvh bg-cover bg-center w-full bg-no-repeat overflow-auto">
            <div className="flex flex-row justify-center gap-x-[25vw] h-screen items-center max-md:flex-col max-md:justify-end max-md:gap-y-15">
                <Logo />
                {/* forgot container */}
                <div className="bg-gradient-to-r from-[#373737] to-[#141414] py-[4.5vw] px-[3vw] rounded-t-[2vw] rounded-b-[2vw] text-white max-md:w-full max-md:rounded-b-[0vw] max-md:py-[10vw] max-md:rounded-t-[6vw]">
                    <h2 className="text-2xl font-bold mb text-center">Forgot Password</h2>
                    <p className="text-center text-[0.9vw] text-white/50 mb-[2vw] max-md:text-[3vw] max-md:mb-[5vw]" >
                        Use the Register Email
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-y-[0.5vw]">
                        <div className="flex justify-start gap-x-[0.5vw] max-md:gap-x-[2vw] max-md:mb-[2vw]">
                            <div className="border-[0.02vw] rounded-[0.8vw] relative py-[0.5vw] px-[0.7vw] max-md:rounded-[2vw] max-md:h-[10vw]">
                                <label className="text-[1vw] absolute -top-[0.7vw] left-[1.2vw] bg-gradient-to-r from-[#313131] to-[#2c2c2c] px-[0.4vw] max-md:text-[3vw] max-md:left-[4vw] max-md:-top-[2.3vw] max-md:from-[#353535] max-md:to-[#303030] max-md:px-[1.5vw]">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Demo@gmail.com"
                                    className="w-[15vw] focus:outline-none placeholder:text-white/50 text-[0.9vw] pl-[0.5vw]
                                     max-md:w-[75vw] max-md:text-[3vw] max-md:pl-[5vw] max-md:mt-[2vw]"
                                    value={email}
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <button
                                className="bg-[#736adb] px-[0.5vw] rounded-[0.3vw] max-md:px-[2vw]"
                                type="button"
                                disabled={sendOtp}
                                onClick={handleOtp}
                            >
                                Send
                            </button>
                        </div>

                        {sendOtp ? (
                            <div className="flex flex-col gap-y-[1.5vw] max-md:gap-y-[4vw]">
                                <div className="flex justify-between mt-[1vw]">
                                    {otp.map((digit, index) => (
                                        <input
                                            key={index}
                                            id={`otp-${index}`}
                                            type="text"
                                            inputMode="numeric"
                                            maxLength="1"
                                            onChange={(e) => handleOtpChange(e.target.value, index)}
                                            className="w-[4vw] h-[4vw] text-center border border-gray-300 rounded-md focus:outline-none max-md:w-[18vw] max-md:h-[15vw]"
                                        />
                                    ))}
                                </div>
                                <div className="flex flex-col gap-y-[1.5vw] max-md:gap-y-[4vw]">
                                    <div className="flex flex-col relative border-[0.02vw] rounded-[0.8vw] py-[0.5vw] px-[0.7vw] max-md:rounded-[2vw] max-md:h-[10vw]">
                                        <label className="text-[1vw] absolute -top-[0.7vw] left-[1.2vw] bg-gradient-to-r from-[#313131] to-[#2c2c2c] px-[0.4vw] max-md:text-[3vw] max-md:left-[4vw] max-md:-top-[2.3vw] max-md:from-[#353535] max-md:to-[#303030] max-md:px-[1.5vw]">
                                            Password
                                        </label>
                                        <input
                                            className="focus:outline-none placeholder:text-white/50 text-[0.9vw] pl-[0.5vw] mt-[0.5vw] max-md:text-[3vw] max-md:pl-[5vw] max-md:mt-[2vw]"
                                            type="text"
                                            placeholder="********"
                                        />
                                    </div>
                                    <div className="flex flex-col relative border-[0.02vw] rounded-[0.8vw] py-[0.5vw] px-[0.7vw] max-md:rounded-[2vw] max-md:h-[10vw]">
                                        <label className="text-[1vw] absolute -top-[0.7vw] left-[1.2vw] bg-gradient-to-r from-[#313131] to-[#242424] px-[0.4vw] max-md:text-[3vw] max-md:left-[4vw] max-md:-top-[2.3vw] max-md:from-[#353535] max-md:to-[#303030] max-md:px-[1.5vw]">
                                            Conform Password
                                        </label>
                                        <input
                                            className="focus:outline-none placeholder:text-white/50 text-[0.9vw] pl-[0.5vw] mt-[0.5vw] max-md:text-[3vw] max-md:pl-[5vw] max-md:mt-[2vw]"
                                            type="text"
                                            placeholder="********"
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#736adb] text-white py-[0.5vw] rounded-md hover:bg-blue-700 transition-all"
                                >
                                    Submit
                                </button>
                            </div>
                        ) : null}
                        <label className="text-red-500 text-[0.9vw] max-md:text-[3vw]">{error}</label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Forgot;
