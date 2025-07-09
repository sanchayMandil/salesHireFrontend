import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const nav = useNavigate();
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);
  const [toggleCurrentPassword, SettoggleCurrentPassword] = useState(false);

  // Simpler state for each field
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Handle input changes
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError("");
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setError("");
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    setError("");
    // Submit logic here
  };

  return (
    <div className="bg-gradient-to-br from-[#393939] to-[#121212] h-auto w-[100vw] ">
      <button
        onClick={() => nav(0)}
        className="text-white poppins-bold -tracking-normal text-[2vw] max-md:text-[5vw] pl-[1vw] max-md:pl-[2vw] max-md:py-[2vw] cursor-pointer"
      >
        <img
          className="h-[2vw] w-[2vw] max-md:h-[4vw] max-md:w-[4vw] inline-block invert pr-[1vw] -mt-[0.5vw]"
          src="https://img.icons8.com/?size=100&id=40217&format=png&color=000000"
          alt="Chat icon"
        />
        Change password
      </button>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-start items-center text-[1.5vw] mt-[2vw] h-screen mr-[10vw] text-white gap-y-[1vw] max-md:gap-y-[3vw]"
      >
        <div className="relative px-[0.5vw] py-[0.5vw] mx-[1.5vw] w-[30%] max-md:w-[70%]">
          <label className="absolute text-[1vw] -top-[0.2vw] left-[2vw] px-[0.5vw] bg-gradient-to-r from-[#303030] to-[#2f2f2f] max-md:text-[2vw] max-md:from-[#343434] max-md:to-[#333333] max-md:-top-[1vw] max-md:left-[4vw] max-md:px-[1.5vw]">
            Email
          </label>
          <div className="border-[0.15vw] border-white rounded-[0.8vw] h-[3vw] max-md:h-[7vw] max-md:rounded-[2vw]">
            <input
              className="ml-[2vw] text-white/50 text-[1vw] focus:outline-none max-md:text-[2vw] max-md:mt-[1.5vw] max-md:ml-[5vw]"
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Demo@gmail.com"
              required
            />
          </div>
        </div>
        <div className="relative px-[0.5vw] py-[0.5vw] mx-[1.5vw] w-[30%] max-md:w-[70%]">
          <label className="absolute text-[1vw] -top-[0.2vw] left-[2vw] px-[0.5vw] bg-gradient-to-r from-[#2b2b2b] to-[#2b2b2b] max-md:text-[2vw] max-md:from-[#343434] max-md:to-[#333333] max-md:-top-[1vw] max-md:left-[4vw] max-md:px-[1.5vw]">
            Current Password
          </label>
          <div className="border-[0.15vw] border-white rounded-[0.8vw] h-[3vw] flex justify-between items-center max-md:h-[7vw] max-md:rounded-[2vw]">
            <input
              className="ml-[2vw] text-white/50 text-[1.1vw] focus:outline-none max-md:text-[2vw] max-md:mt-[1.5vw] max-md:ml-[5vw]"
              type={toggleCurrentPassword ? "text" : "password"}
              name="password"
              onChange={(e)=>{setCurrentPassword(e.target.value)}}
              placeholder="********"
              required
            />
            <button
              type="button"
              onClick={() => SettoggleCurrentPassword(!toggleCurrentPassword)}
              className="pr-[1vw]"
              tabIndex={-1}
            >
              <img
                className="invert scale-50 h-[3.5vw] w-[3vw] max-md:w-[8vw] max-md:h-[8vw]"
                src={
                  toggleCurrentPassword
                    ? "https://img.icons8.com/?size=100&id=60022&format=png&color=000000"
                    : "https://img.icons8.com/?size=100&id=100236&format=png&color=000000"
                }
                alt="Toggle visibility"
              />
            </button>
          </div>
        </div>
        <div className="relative px-[0.5vw] py-[0.5vw] mx-[1.5vw] w-[30%] max-md:w-[70%]">
          <label className="absolute text-[1vw] -top-[0.2vw] left-[2vw] px-[0.5vw] bg-gradient-to-r from-[#2b2b2b] to-[#2b2b2b] max-md:text-[2vw] max-md:from-[#343434] max-md:to-[#333333] max-md:-top-[1vw] max-md:left-[4vw] max-md:px-[1.5vw]">
            New Password
          </label>
          <div className="border-[0.15vw] border-white rounded-[0.8vw] h-[3vw] flex justify-between items-center max-md:h-[7vw] max-md:rounded-[2vw]">
            <input
              className="ml-[2vw] text-white/50 text-[1.1vw] focus:outline-none max-md:text-[2vw] max-md:mt-[1.5vw] max-md:ml-[5vw]"
              type={togglePassword ? "text" : "password"}
              name="password"
              onChange={handlePasswordChange}
              placeholder="********"
              required
            />
            <button
              type="button"
              onClick={() => setTogglePassword(!togglePassword)}
              className="pr-[1vw]"
              tabIndex={-1}
            >
              <img
                className="invert scale-50 h-[3.5vw] w-[3vw] max-md:w-[8vw] max-md:h-[8vw]"
                src={
                  togglePassword
                    ? "https://img.icons8.com/?size=100&id=60022&format=png&color=000000"
                    : "https://img.icons8.com/?size=100&id=100236&format=png&color=000000"
                }
                alt="Toggle visibility"
              />
            </button>
          </div>
        </div>
        <div className="relative px-[0.5vw] py-[0.5vw] mx-[1.5vw] w-[30%] max-md:w-[70%]">
          <label className="absolute text-[1vw] -top-[0.2vw] left-[2vw] px-[0.5vw] bg-gradient-to-r from-[#2b2b2b] to-[#2b2b2b] max-md:text-[2vw] max-md:from-[#343434] max-md:to-[#333333] max-md:-top-[1vw] max-md:left-[4vw] max-md:px-[1.5vw]">
           New Confirm Password
          </label>
          <div className={`border-[0.15vw] rounded-[0.8vw] h-[3vw] flex justify-between items-center ${error==''?"border-white":"border-red-500"} max-md:h-[7vw] max-md:rounded-[2vw]`}>
            <input
              className="ml-[2vw] text-white/50 text-[1.1vw] focus:outline-none max-md:text-[2vw] max-md:mt-[1.5vw] max-md:ml-[5vw]"
              type={toggleConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              onChange={handleConfirmPasswordChange}
              placeholder="********"
              required
            />
            <button
              type="button"
              onClick={() => setToggleConfirmPassword(!toggleConfirmPassword)}
              className="pr-[1vw]"
              tabIndex={-1}
            >
              <img
                className="invert scale-50 h-[3.5vw] w-[3vw] max-md:w-[8vw] max-md:h-[8vw]"
                src={
                  toggleConfirmPassword
                    ? "https://img.icons8.com/?size=100&id=60022&format=png&color=000000"
                    : "https://img.icons8.com/?size=100&id=100236&format=png&color=000000"
                }
                alt="Toggle visibility"
              />
            </button>
          </div>
           {error && <label className="text-red-500 text-[0.5vw]">{error}</label>}
        </div>
        <button
          type="submit"
          className="text-white bg-[#736ADB] w-[20%] py-[0.5vw] rounded-[1vw] max-md:w-[30%] max-md:text-[4vw]"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default ChangePassword;