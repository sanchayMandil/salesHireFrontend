import Logo from "../../Components/login&register/Logo/Logo";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const nav = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState(false);
    const [toogle, setToogle] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if (email === "" || password === "") {
            setError(true);
            return;
        }
        console.log(email, password);
        setError(false);
        nav('/home');
    }

    return (
        <div className="bg-[url(../src/assets/bg.jpg)] h-dvh bg-cover bg-center w-full bg-no-repeat overflow-auto ">
            <div className="flex flex-row justify-center gap-x-[25vw] h-screen items-center max-md:flex-col max-md:justify-end max-md:gap-y-15">
                <Logo />
                <form
                    onSubmit={handleSubmit}
                    className="text-white flex flex-col px-[2vw] py-[2vw] bg-gradient-to-r from-[#393939] to-[#111111] rounded-[2vw] max-md:w-full max-md:rounded-b-[0vw] max-md:rounded-t-[5vw] max-md:pt-[4vh] max-md:pb-[2vh]"
                >
                    <div className="my-[2vw] flex flex-col justify-center items-center max-md:scale-100 max-md:my-[5vw]">
                        <h1 className="poppins-bold text-[2.5vw] max-md:text-[6vw]">Welcome</h1>
                        <h2 className="-mt-[1vw] text-[1vw] text-center text-white/50 max-md:mt-0 max-md:mb-2 max-md:text-[3vw]">
                            Let’s get a best Sales <br />Manager for you.
                        </h2>
                    </div>
                    {/* Input fields */}
                    <div className="mx-[1vw] flex flex-col justify-around gap-y-[1.5vw] max-md:gap-y-[0.5vw]">
                        <div>
                            {/* Email input */}
                            <div className="relative mb-5">
                                <label
                                    className="absolute z-10 text-[0.8vw] ml-[1.2vw] bg-gradient-to-r from-[#323232] to-[#2e2e2e] px-[0.5vw] -mt-[0.65vw] max-md:ml-[5vw] max-md:-mt-[1.9vw]  max-md:text-[3vw] max-md:from-[#353535] max-md:to-[#323232]"
                                    htmlFor="Email"
                                >
                                    Email
                                </label>
                                <input
                                    className={`px-[4vw] relative py-[1vw] text-[1vw] rounded-[1vw] max-md:py-[2vw] max-md:rounded-[2vw] max-md:text-[3.5vw] ${
                                        email === "" && error
                                            ? "border-red-600 border-1 placeholder:text-red-600"
                                            : "border placeholder:text-gray-400"
                                    } focus:outline-none w-full`}
                                    type="email"
                                    required
                                    placeholder="Demo@gmail.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            {/* Password input with toggle visibility */}
                            <div className="relative">
                                <label
                                    className="absolute z-10 text-[0.8vw] ml-[1.2vw] bg-gradient-to-r from-[#323232] to-[#2e2e2e] px-[0.5vw] -mt-[0.65vw] max-md:ml-[5vw] max-md:-mt-[1.96vw]  max-md:text-[3vw]  max-md:from-[#353535] max-md:to-[#323232]"
                                    htmlFor="Password"
                                >
                                    Password
                                </label>
                                <div
                                    className={`${
                                        password === "" && error
                                            ? "border-red-600 border-1"
                                            : "border"
                                    } rounded-[1vw] mb-5 max-md:rounded-[2vw] flex 
                                    max-md:py-[1.2vw] justify-between items-center`}
                                >
                                    <input
                                        className={`pl-[4vw] py-[1vw] text-[1vw] focus:outline-none w-full rounded-[1vw] max-md:text-[3.5vw] ${
                                            password === "" && error
                                                ? "placeholder:text-red-600"
                                                : "placeholder:text-gray-400"
                                        }`}
                                        type={toogle ? "text" : "password"}
                                        placeholder="********"
                                        required
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setToogle(!toogle)}
                                        className="pr-[1vw]"
                                    >
                                        <img
                                            className="invert scale-50 h-[3vw] w-[4vw] max-md:h-[7vw] max-md:w-[8vw]"
                                            src={
                                                toogle
                                                    ? "https://img.icons8.com/?size=100&id=60022&format=png&color=000000"
                                                    : "https://img.icons8.com/?size=100&id=100236&format=png&color=000000"
                                            }
                                            alt="Toggle visibility"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Remember Me checkbox */}
                    <div className="flex justify-between items-center text-[0.75vw] ml-[2.5vw] my-[1vh] max-md:my-0">
                        <div>
                            <input
                                className="mr-[0.5vw] scale-350 max-2xl:scale-120
                                max-md:scale-90"
                                type="checkbox"
                                checked={remember}
                                onChange={() => setRemember(!remember)}
                            />
                            <label className="max-md:text-[4vw]" htmlFor="remember">
                                Remember Me
                            </label>
                        </div>
                        <Link className="mr-[2vw] text-white/50 hover:underline hover:text-white max-md:text-[3vw]"
                         to="/forgot" >Forgot Password?</Link>
                    </div>
                    {/* Login button */}
                    <button
                        className="text-[1vw] uppercase bg-[#736ADB] py-[1vw] my-[1vw] rounded-[0.5vw] w-[85%] mx-auto hover:bg-blue-800 cursor-auto max-md:text-[3vw] max-md:rounded-[2vw] max-md:py-[3.5vw] max-md:my-[5vw]"
                        type="submit"
                    >
                        Login
                    </button>
                    {/* Link to registration */}
                    <span className="text-center text-[0.8vw] text-white/50 max-md:text-[2.5vw]">
                        I don’t have an account? <Link to="/verify">Create Account</Link>
                    </span>
                </form>
            </div>
        </div>
    );
}

export default Login;
