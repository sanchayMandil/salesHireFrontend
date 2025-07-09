import Upload from '../../assets/upload.png';
import Logo from "../../Components/login&register/Logo/Logo";
import Submited from '../../Components/login&register/Submited/Submited';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SetUpProfile() {
    // State variables for form fields
    const [submited, setSubmited] = useState(false);
    const [roleTypes, setRoleTypes] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [currency, setCurrency] = useState('Rupees');
    const [occupation, setOccupation] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [skills, setSkills] = useState('');
    const [portfolioLink, setPortfolioLink] = useState('');
    const [currentSalary, setCurrentSalary] = useState('');
    const [cvFile, setCvFile] = useState(null);

    const dropdownRef = useRef(null);

    // Options for design types and currency
    const roleOptions = [
        "Contract",
        "Permanent",
        "Part Time",
        "Target Based",
        "Freelance",
    ];

    const currencyOptions = [
        { label: 'Rs', value: 'Rupees' },
        { label: '$', value: 'Dollar' }
    ];

    // Handle selecting a role type
    const handleSelectOption = (option) => {
        if (!roleTypes.includes(option)) {
            setRoleTypes([...roleTypes, option]);
        }
        setIsDropdownOpen(false);
    };

    // Remove a selected role type
    const handleRemoveOption = (option) => {
        setRoleTypes(roleTypes.filter((item) => item !== option));
    };

    // Toggle dropdown for role types
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Handle currency change
    const handleCurrencyChange = (e) => {
        setCurrency(e.target.value);
    };

    // Handle file upload
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setCvFile(selectedFile);
    };

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmited(true);
        console.log({
            occupation,
            address,
            roleTypes,
            description,
            skills,
            portfolioLink,
            currentSalary: `${currency}${currentSalary}`,
            cvFile
        })
        // Here you can handle the form data submission (e.g., API call)
    };

    return (
        <>
            <div className="bg-[url(../src/assets/bg.jpg)] h-dvh bg-cover w-[100%] bg-no-repeat">
                {submited ? (
                    <div className='flex justify-center items-center'>
                    <Submited type={2} />
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-row justify-center gap-x-[15vw] h-screen items-center max-md:flex-col max-md:justify-end max-md:gap-y-15 max-md:h-auto">
                            <Logo />
                            <div className="text-white flex flex-col px-[2vw] pt-[2vw] bg-gradient-to-r from-[#393939] to-[#111111] rounded-[2vw] max-md:w-full max-md:rounded-b-[0vw] max-md:rounded-t-[5vw] max-md:pt-[4vh] max-md:pb-[1vw] max-md:gap-y-[8vw]">
                                <div className="mb-[1.5vw] max-md:ml-[2vw]">
                                    <h1 className="poppins-bold text-[2.5vw]
                                    max-md:text-[9vw] max-md:mb-[2vw]">Setup profile</h1>
                                    <p className="text-[0.7vw] text-white/50
                                    max-md:text-[3vw]">
                                        Just a small info to verify your, Please fill all the <br />required fields.
                                    </p>
                                </div>
                                <div className="flex justify-around gap-x-[1vw]
                                max-md:flex-col max-md:gap-y-[4vw]">
                                    {/* right side */}
                                    <div className="flex flex-col justify-center
                                    max-md:gap-y-[4vw]">
                                        {/* Occupation input */}
                                        <div className="relative mb-[1.5vw]">
                                            <label className="absolute z-10 text-[0.8vw] ml-[1.5vw] bg-gradient-to-r from-[#393939] to-[#343434] px-[0.5vw] -mt-[0.6vw]
                                             max-md:text-[3vw] max-md:ml-[4vw] max-md:-mt-[2vw] max-md:px-[2vw]" 
                                            htmlFor="Occupation">
                                                Occupation
                                            </label>
                                            <input
                                                className="px-[4vw] relative py-[1vw] text-[1vw] rounded-[1vw] placeholder:text-gray-400 focus:outline-none border w-full
                                                max-md:py-[4.5vw] max-md:text-[3vw] max-md:rounded-[2vw]"
                                                type="text"
                                                id="Occupation"
                                                required
                                                placeholder="Enter your occupation"
                                                value={occupation}
                                                onChange={e => setOccupation(e.target.value)}
                                            />
                                        </div>
                                        {/* Address input */}
                                        <div className="relative mb-[1.5vw]">
                                            <label className="absolute z-10 text-[0.8vw] ml-[1.5vw] bg-gradient-to-r from-[#393939] to-[#343434] px-[0.5vw] -mt-[0.6vw]
                                            max-md:text-[3vw] max-md:ml-[4vw] max-md:-mt-[2vw] max-md:px-[2vw]" 
                                            htmlFor="Address">
                                                Address
                                            </label>
                                            <input
                                                className="px-[4vw] relative py-[1vw] text-[1vw] rounded-[1vw] placeholder:text-gray-400 focus:outline-none border w-full
                                                max-md:py-[4.5vw] max-md:text-[3vw] max-md:rounded-[2vw]"
                                                type="text"
                                                id="Address"
                                                required
                                                placeholder="Enter your location"
                                                value={address}
                                                onChange={e => setAddress(e.target.value)}
                                            />
                                        </div>
                                        {/* Role types dropdown */}
                                        <div className="relative mb-[1.5vw]" ref={dropdownRef}>
                                            <label className="absolute z-10 text-[0.8vw] ml-[1.5vw] bg-gradient-to-r from-[#393939] to-[#343434] px-[0.5vw] -mt-[0.6vw]
                                            max-md:text-[3vw] max-md:ml-[4vw] max-md:-mt-[2vw] max-md:px-[2vw]" htmlFor="RoleTypes">
                                                Type of Roles
                                            </label>
                                            <div
                                                className="px-[4vw] relative py-[1vw] text-[1vw] rounded-[1vw] text-white focus:outline-none border  cursor-pointer flex flex-wrap gap-[1vw] items-center min-h-[2.5vw] h-[3.6vw] 
                                                max-md:py-[4.5vw] max-md:text-[3vw] max-md:rounded-[2vw] max-md:h-[13vw]"
                                                onClick={toggleDropdown}
                                            >
                                                {roleTypes.length === 0 ? (
                                                    <span className="text-gray-400">Select type</span>
                                                ) : (
                                                    roleTypes.map((type) => (
                                                        <div
                                                            key={type}
                                                            className="flex items-center text-white rounded-[0.5vw] px-[1vw] py-[0.25vw] text-[0.8vw]
                                                            max-md:text-[3vw]"
                                                        >
                                                            {type}
                                                            <span
                                                                className="ml-[0.5vw] cursor-pointer text-[1vw] max-md:text-[3.5vw]"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    handleRemoveOption(type);
                                                                }}
                                                            >
                                                                ×
                                                            </span>
                                                        </div>
                                                    ))
                                                )}
                                            </div>
                                            {isDropdownOpen && (
                                                <div className="absolute z-20 w-full mt-[0.5vw] bg-[#1e1e1e] border rounded-[1vw] max-h-[10vw] overflow-y-auto max-md:max-h-[20vw]">
                                                    {roleOptions.map((option) => (
                                                        <div
                                                            key={option}
                                                            className={`px-[4vw] py-[0.5vw] text-[1vw] text-white hover:bg-[#736ADB] cursor-pointer ${roleTypes.includes(option) ? 'bg-[#736ADB]' : ''} max-md:text-[3vw]`}
                                                            onClick={() => handleSelectOption(option)}
                                                        >
                                                            {option}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        {/* Description input */}
                                        <div className="relative mb-[1.5vw] border rounded-[1vw]
                                        max-md:py-[4.5vw] max-md:rounded-[2vw]">
                                            <label className="absolute z-10 text-[0.8vw] ml-[1.5vw] bg-gradient-to-r from-[#393939] to-[#343434] px-[0.5vw] -mt-[0.6vw]
                                            max-md:text-[3vw] max-md:ml-[4vw] max-md:-mt-[6.5vw] max-md:px-[2vw]" htmlFor="Description">
                                                Description
                                            </label>
                                            <textarea
                                                className="w-[90%] ml-[1vw] relative h-[6vw] pt-[1vw] text-[1vw] placeholder:text-gray-400 focus:outline-none 
                                                max-md:text-[3vw]  max-md:ml-[3vw] max-md:w-[95%] max-md:h-[15vw] max-md:-mt-[1vw]"
                                                id="Description"
                                                placeholder="Write something"
                                                onChange={e => setDescription(e.target.value)}
                                                maxLength={30}
                                            />
                                            <h1 className="text-[1vw] text-right mr-[1vw]
                                            max-md:text-[3vw] max-md:mr-[2vw]">{description.trim() ? description.trim().split(/\s+/).length : 0}/30</h1>
                                        </div>
                                    </div>
                                    {/* Left side of the form */}
                                    <div className="flex flex-col justify-start
                                    max-md:gap-y-[4vw]">
                                        {/* Skills input */}
                                        <div className="relative mb-[1.5vw]">
                                            <label className="absolute z-10 text-[0.8vw] ml-[1.5vw] bg-gradient-to-r from-[#222222] to-[#1e1e1e] px-[0.5vw] -mt-[0.6vw]
                                            max-md:text-[3vw] max-md:ml-[4vw] max-md:-mt-[2vw] max-md:from-[#393939] max-md:to-[#343434] max-md:px-[2vw]" htmlFor="Skills">
                                                Skills
                                            </label>
                                            <input
                                                className="px-[4vw] relative py-[1vw] text-[1vw] rounded-[1vw] placeholder:text-gray-400 focus:outline-none border w-full
                                                 max-md:py-[4.5vw] max-md:text-[3vw] max-md:rounded-[2vw]"
                                                type="text"
                                                id="Skills"
                                                required
                                                placeholder="Add your skills"
                                                value={skills}
                                                onChange={e => setSkills(e.target.value)}
                                            />
                                        </div>
                                        {/* Portfolio link input */}
                                        <div className="relative mb-[1.5vw]">
                                            <label className="absolute z-10 text-[0.8vw] ml-[1.5vw] bg-gradient-to-r from-[#222222] to-[#1e1e1e] px-[0.5vw] -mt-[0.6vw]
                                            max-md:text-[3vw] max-md:ml-[4vw] max-md:-mt-[2vw] max-md:from-[#393939] max-md:to-[#343434] max-md:px-[2vw]" htmlFor="PortfolioLink">
                                                Portfolio link
                                            </label>
                                            <input
                                                className="px-[4vw] relative py-[1vw] text-[1vw] rounded-[1vw] placeholder:text-gray-400 focus:outline-none border w-full
                                                 max-md:py-[4.5vw] max-md:text-[3vw] max-md:rounded-[2vw]"
                                                type="text"
                                                id="PortfolioLink"
                                                placeholder="Add Link"
                                                value={portfolioLink}
                                                onChange={e => setPortfolioLink(e.target.value)}
                                            />
                                        </div>
                                        {/* Current Salary input with currency selector */}
                                        <div className="relative mb-[1.5vw]">
                                            <label className="absolute z-10 text-[0.8vw] ml-[1.5vw] bg-gradient-to-r from-[#222222] to-[#1e1e1e] px-[0.5vw] -mt-[0.6vw]
                                            max-md:text-[3vw] max-md:ml-[4vw] max-md:-mt-[2vw] max-md:from-[#393939] max-md:to-[#343434] max-md:px-[2vw]" htmlFor="CurrentSalary">
                                                Current Salary
                                            </label>
                                            <div className="flex items-center w-full">
                                                <div className="relative flex items-center border rounded-[1vw] w-full
                                                 max-md:py-[4.5vw] max-md:rounded-[2vw]">
                                                    <select
                                                        className="px-[1vw] relative py-[1vw] text-[1vw] text-white focus:outline-none
                                                        max-md:text-[2.5vw]"
                                                        id="Currency"
                                                        value={currency}
                                                        onChange={handleCurrencyChange}
                                                    >
                                                        {currencyOptions.map((option) => (
                                                            <option key={option.value} value={option.value} className="bg-black">
                                                                {option.label}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <input
                                                        className="pl-[1vw] relative py-[1vw] text-[1vw] placeholder:text-gray-400 focus:outline-none
                                                        max-md:text-[3vw]"
                                                        type="text"
                                                        id="CurrentSalary"
                                                        required
                                                        placeholder="Enter Salary"
                                                        value={currentSalary}
                                                        onChange={e => setCurrentSalary(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* File upload section */}
                                <div className='flex justify-center cursor-pointer border-2 border-white/50 border-dashed py-[2vw] rounded-[1vw]
                                 max-md:py-[7vw] max-md:rounded-[2vw]'>
                                    <label className="text-[0.8vw] text-center
                                    max-md:text-[3vw]" htmlFor="fileInput">
                                        <img className='w-[1vw] h-[1vw] inline-block
                                        max-md:w-[3vw] max-md:h-[3vw]' src={Upload} alt="" />
                                              {cvFile ? cvFile.name : 'Upload CV'}
                                    </label>
                                    <input
                                        type="file"
                                        id="fileInput"
                                        required
                                        className="hidden"
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleFileChange}
                                    />
                                </div>
                                <p className='text-center text-[0.7vw] mt-[1vw] text-white/50
                                max-md:text-[2vw] max-md:mb-[5vw] max-md:-mt-[1.5vw]'>
                                    Upload size must be less than 10MB
                                </p>
                                {/* Submit button */}
                                <button
                                    type="submit"
                                    className="text-[1vw] uppercase bg-[#736ADB] py-[1vw] my-[0.5vw] rounded-[0.5vw] w-[60%] mx-auto
                                    max-md:text-[3vw] max-md:rounded-[2vw] max-md:py-[4.5vw] max-md:mb-[10vw]"
                                >
                                    Verify & Continue
                                </button>
                            </div>
                        </div>
                    </form>
                )}
            </div>
        </>
    );
}

export default SetUpProfile;
