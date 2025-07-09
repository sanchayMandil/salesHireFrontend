import Logo from '../../Components/login&register/Logo/Logo'; // Fixed path
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Submited from '../../Components/login&register/Submited/Submited';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
 const navigate = useNavigate();
  const [userType, setUserType] = useState(0);
  const [name, setName] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [errors, setErrors] = useState({});
  const location = useLocation();
  const email = location.state?.email || '';

  const countryCodes = [
    { code: '+1', label: 'USA' },
    { code: '+44', label: 'UK' },
    { code: '+91', label: 'India' },
    { code: '+61', label: 'Australia' },
    { code: '+81', label: 'Japan' },
  ];

  const validateForm = () => {
    const newErrors = {};
    if (userType === 0) newErrors.type = 'Please select a user type';
    if (!name.trim()) newErrors.name = 'Please enter your name';
    if (!mobile || mobile.length !== 10) newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    if (!password || password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (!confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    if (password && confirmPassword && password !== confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';

    return newErrors;
  };

const handleSignup = async (e) => {
        e.preventDefault();
        const newErrors = validateForm();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        const userTypeString = userType === 1 ? 'client' : 'designer'; // Map userType to string
        const phone = `${countryCode}${mobile}`; // Combine country code and mobile
        console.log('Signup Data:', { name, email, mobile: phone, type: userTypeString, password });

        try {
                       setSubmit(true);
          setTimeout(() => {  
           
                         navigate(userType === 2 ? '/setupProfile' : '/profile');
          },10000)
  
           
        } catch (error) {
            console.error('Signup Error:', error);
            setErrors({ submit: error.response?.data?.message || 'Signup failed. Please try again.' });
            setSubmit(false);
        }
    };

  return (
    <>
      <div className="bg-[url(../src/assets/bg.jpg)] h-dvh bg-cover w-[100%] bg-no-repeat">
      {submit? 
      <div className='flex justify-center items-center'>
      <Submited/>
      </div>
           :<div className="flex flex-row justify-center gap-x-[25vw] h-screen items-center max-md:flex-col max-md:justify-end max-md:gap-y-15">
          <Logo />
          <form
            onSubmit={handleSignup}
            className="text-white flex flex-col px-[2vw] py-[1vw] bg-gradient-to-r from-[#393939] to-[#111111] rounded-[2vw] max-md:w-full max-md:rounded-b-[0vw] max-md:rounded-t-[5vw] max-md:pt-[4vh] max-md:pb-[2vh] max-md:gap-y-[2vw]"
          >
            <div className="my-[1vw] flex flex-col justify-start gap-y-[0.5vw] pl-[1vw]
            max-md:mb-[3vw]">
              <h1 className="poppins-bold text-[2.5vw]
              max-md:text-[8vw]">Sign Up</h1>
              <h2 className="-mt-[0.5vw] text-[0.8vw] text-white/50
              max-md:text-[3vw]">Please Fill the form.</h2>
            </div>
            <div className="flex flex-col mx-[1vw]
            max-md:gap-y-[5vw]">
              
              <div className='mb-[1vw] max-md:mb-[0.1vw]'>
              <span className='text-[0.9vw] max-md:text-[3vw]'>Sing Up as:</span>
              <div className='flex justify-between items-center text-[1vw]
              max-md:text-[4.5vw]'>
                  <label>
                   <input className='scale-400 
                                        max-2xl:scale-110
                                        max-xl:scale-80 max-lg:scale-70'
                                        required
                                        type="radio" name="choice"
                   onClick={()=>setUserType(1)} />
                   <span className='pl-[0.5vw]'>Recruiter</span></label>
                  <label>
                    <input className='scale-400 
                                        max-2xl:scale-110
                                        max-xl:scale-80 max-lg:scale-70' 
                                        required
                                        type="radio" name="choice" 
                    onClick={()=>setUserType(2)}/>
                    <span  className='pl-[0.5vw]'>Sales Manager</span></label>
              </div>
              {/* {errors.type && <label className="text-red-500 text-[0.7vw]">{errors.type}</label>} */}
              </div>
              {/* Name input */}
              <div className="relative mb-[1.5vw]">
                <label
                  className="absolute z-10 text-[0.8vw] ml-[1.5vw] bg-gradient-to-r from-[#323232] to-[#2f2f2f] px-[0.5vw] -mt-[0.6vw]
                  max-md:text-[3vw] max-md:-mt-[2vw] max-md:ml-[5vw]
                  max-md:from-[#353535] max-md:to-[#313131]"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className={`px-[4vw] relative py-[1vw] text-[1vw] rounded-[1vw] focus:outline-none w-full
                    max-md:py-[2vw] max-md:rounded-[2vw] max-md:text-[3.5vw] ${
                    errors.name ? 'border-red-500 border-1 placeholder:text-red-600' : 'border placeholder:text-gray-400'
                  }`}
                  type="text"
                  required
                  placeholder="Eg: Jhon Mathew"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {/* {errors.name && <label className="text-red-500 text-[0.7vw]">{errors.name}</label>} */}
              </div>
              {/* Mobile Number input with country code */}
              <div className="relative mb-[1.5vw]">
                <label
                   className="absolute z-10 text-[0.8vw] ml-[1.5vw] bg-gradient-to-r from-[#323232] to-[#2a2a2a] px-[0.5vw] -mt-[0.6vw]
                   max-md:text-[3vw] max-md:-mt-[2.3vw] max-md:ml-[5vw]
                  max-md:from-[#353535] max-md:to-[#2d2d2d]"
                  htmlFor="mobile"
                >
                  Mobile Number
                </label>
                <div className={`flex items-center border rounded-[1vw]
                max-md:rounded-[2vw]  max-md:py-[1vw] ${errors.mobile?"border-red-500":""}`}>
                  <select
                    className="px-[1vw] py-[1vw] text-[1vw] text-white bg-gradient-to-r from-[#393939] to-[#2f2f2f] rounded-l-[1vw] border-r-0 
                    max-md:text-[3vw]
                    focus:outline-none"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code} className="bg-[#393939] text-white">
                        {country.code}
                      </option>
                    ))}
                  </select>
                  <span className="text-white text-[1vw] mx-[0.5vw]">|</span>
                  <input
                    className={`px-[2vw] py-[1vw] text-[1vw] rounded-r-[1vw] focus:outline-none w-full 
                     max-md:text-[3.5vw] ${
                      errors.mobile ? 'placeholder:text-red-600' : ' placeholder:text-gray-400'
                    }`}
                    required
                    type="tel"
                    placeholder="000 000 0000"
                    id="mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                  />
                </div>
                {/* {errors.mobile && <label className="text-red-500 text-[0.7vw]">{errors.mobile}</label>} */}
              </div>
              {/* Password input */}
              <div className="relative mb-[1.5vw]">
                <label
                  className="absolute z-10 text-[0.8vw] ml-[1.5vw] bg-gradient-to-r from-[#323232] to-[#2f2f2f] px-[0.5vw] -mt-[0.6vw]
                   max-md:text-[3vw] max-md:-mt-[2.3vw] max-md:ml-[5vw]
                  max-md:from-[#353535] max-md:to-[#2d2d2d]
                  "
                  htmlFor="password"
                >
                  Password
                </label>
                <div
                  className={`flex justify-between items-center rounded-[1vw] 
                    max-md:py-[0.5vw] max-md:rounded-[2vw]
                    ${
                    errors.password ? 'border-red-600 border-1' : 'border'
                  }`}
                >
                  <input
                    className={`pl-[4vw] py-[1vw] text-[1vw] focus:outline-none w-full rounded-[1vw] max-md:text-[3.5vw]
                      ${
                      errors.password ? 'placeholder:text-red-600' : 'placeholder:text-gray-400'
                    }`}
                    type={togglePassword ? 'text' : 'password'}
                    required
                    placeholder="********"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setTogglePassword(!togglePassword)}
                    className="pr-[1vw]"
                  >
                    <img
                      className="invert scale-50 h-[3.5vw] w-[4vw]
                      max-md:w-[8vw] max-md:h-[8vw]"
                      src={
                        togglePassword
                          ? 'https://img.icons8.com/?size=100&id=60022&format=png&color=000000'
                          : 'https://img.icons8.com/?size=100&id=100236&format=png&color=000000'
                      }
                      alt="Toggle visibility"
                    />
                  </button>
                </div>
                {errors.password && <label className="text-red-500 text-[0.7vw]">{errors.password}</label>}
              </div>
              {/* Confirm Password input */}
              <div className="relative mb-[1.5vw]">
                <label
                  className="absolute z-10 text-[0.8vw] ml-[1.5vw] bg-gradient-to-r from-[#323232] to-[#2a2a2a] px-[0.5vw] -mt-[0.6vw]
                   max-md:text-[3vw] max-md:-mt-[2.3vw] max-md:ml-[5vw]
                  max-md:from-[#353535] max-md:to-[#2d2d2d]"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <div
                  className={`flex justify-between items-center rounded-[1vw] 
                     max-md:py-[0.5vw] max-md:rounded-[2vw]
                     ${
                    errors.confirmPassword ? 'border-red-600 border-1' : 'border'
                  }`}
                >
                  <input
                    className={`pl-[4vw] py-[1vw] text-[1vw] focus:outline-none w-full rounded-[1vw] 
                      max-md:text-[3.5vw] ${
                      errors.confirmPassword ? 'placeholder:text-red-600' : 'placeholder:text-gray-400'
                    }`}
                    type={toggleConfirmPassword ? 'text' : 'password'}
                    placeholder="********"
                    required
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setToggleConfirmPassword(!toggleConfirmPassword)}
                    className="pr-[1vw]"
                  >
                    <img
                      className="invert scale-50 h-[3.5vw] w-[4vw]
                      max-md:w-[8vw] max-md:h-[8vw]"
                      src={
                        toggleConfirmPassword
                          ? 'https://img.icons8.com/?size=100&id=60022&format=png&color=000000'
                          : 'https://img.icons8.com/?size=100&id=100236&format=png&color=000000'
                      }
                      alt="Toggle visibility"
                    />
                  </button>
                </div>
                {errors.confirmPassword && (
                  <label className="text-red-500 text-[0.7vw]">{errors.confirmPassword}</label>
                )}
              </div>
            </div>
            {/* Remember Me option */}
            <div className="flex flex-col justify-start text-[0.75vw] ml-[2.5vw]">
              <div>
                <input
                  className="mr-[0.5vw] scale-400 
                                        max-2xl:scale-110
                                        max-xl:scale-80 max-lg:scale-70"
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <label className='max-md:text-[3vw]'
                htmlFor="rememberMe">Remember Me</label>
              </div>
            </div>
            {/* Continue button */}
            <button
              type="submit"
              className="text-[1vw] uppercase bg-[#736ADB] py-[1vw] my-[0.5vw] rounded-[1vw] w-[85%] mx-auto text-center
              max-md:py-[3vw] max-md:text-[3.5vw] max-md:rounded-[3vw]"
            >
              Continue
            </button>
            {/* Footer link */}
            <span className="text-center text-[0.8vw] text-white/50
            max-md:text-[4vw]">
              Already have an account? <Link to="/">Sign In</Link>
            </span>
          </form>
        </div>}
      </div>
    </>
  );
}

export default SignUp;