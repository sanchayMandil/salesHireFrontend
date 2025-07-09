import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SupportHelp() {
    const nav = useNavigate();
    const [form, setForm] = useState(false);
    const [countryCode, setCountryCode] = useState('+91');
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        description: '',
    });
    const [error, setError] = useState({
        name: '',
        mobile: '',
        email: '',
        description: '',
    });

    const countryCodes = [
        { code: '+1', label: 'USA' },
        { code: '+44', label: 'UK' },
        { code: '+91', label: 'India' },
        { code: '+61', label: 'Australia' },
        { code: '+81', label: 'Japan' },
    ];

    const questionsOfSupport = [
        {
            question: "How can i Hire Someone",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Ut et massa mi. Aliquam in hendrerit urna."
        },
        {
            question: "How can i can got work",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Ut et massa mi. Aliquam in hendrerit urna."
        },
        {
            question: "How can a client communicate",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Ut et massa mi. Aliquam in hendrerit urna."
        },
        {
            question: "issue Realated to the profile",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Ut et massa mi. Aliquam in hendrerit urna."
        },
        {
            question: "How can i Hire Someone",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Ut et massa mi. Aliquam in hendrerit urna."
        },
        {
            question: "How can i can got work",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Ut et massa mi. Aliquam in hendrerit urna."
        },
        {
            question: "How can a client communicate",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Ut et massa mi. Aliquam in hendrerit urna."
        },
        {
            question: "issue Realated to the profile",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Ut et massa mi. Aliquam in hendrerit urna."
        }
    ];

    const validate = () => {
        let valid = true;
        let newError = { name: '', mobile: '', email: '', description: '' };

        if (!formData.name.trim()) {
            newError.name = 'Name is required';
            valid = false;
        }
        if (!formData.mobile.trim()) {
            newError.mobile = 'Mobile is required';
            valid = false;
        } else if (!/^\d{10,}$/.test(formData.mobile.trim())) {
            newError.mobile = 'Enter valid mobile number';
            valid = false;
        }
        if (!formData.email.trim()) {
            newError.email = 'Email is required';
            valid = false;
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email.trim())) {
            newError.email = 'Enter valid email';
            valid = false;
        }
        if (!formData.description.trim()) {
            newError.description = 'Description is required';
            valid = false;
        }
        setError(newError);
        return valid;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError({ ...error, [e.target.name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Submit logic here
            alert('Form submitted!');
            setForm(false);
            setFormData({ name: '', mobile: '', email: '', description: '' });
            setError({ name: '', mobile: '', email: '', description: '' });
        }
    };

    return (
        <div className="bg-gradient-to-br from-[#393939] to-[#121212] h-auto w-[85vw] max-md:w-[100vw] ">
            <button
                onClick={() => nav(0)}
                className="text-white poppins-bold -tracking-normal text-[2vw] max-md:text-[5vw] pl-[1vw] max-md:pl-[2vw] max-md:py-[2vw] cursor-pointer"
            >
                <img
                    className="h-[2vw] w-[2vw] max-md:h-[4vw] max-md:w-[4vw] inline-block invert pr-[1vw] -mt-[0.5vw]"
                    src="https://img.icons8.com/?size=100&id=40217&format=png&color=000000"
                    alt="Chat icon"
                />
                Support & help
            </button>
            {form ? (
                <form
                    className="flex flex-col justify-start items-center text-[1.5vw] mt-[2vw] h-screen text-white max-md:mt-[5vw] max-md:gap-y-[2vw]"
                    onSubmit={handleSubmit}
                >
                    <div className="relative px-[0.5vw] py-[0.5vw] mx-[1.5vw] my-[1vw] w-[30%] max-md:w-[70%]">
                        <label className="absolute text-[1vw] -top-[0.2vw] left-[2vw] px-[0.5vw] bg-gradient-to-r from-[#303030] to-[#2f2f2f] max-md:text-[2.5vw] max-md:-top-[1.2vw] max-md:left-[4vw] max-md:px-[1.5vw] max-md:from-[#343434] max-md:to-[#323232]">
                            Name
                            {error.name && (
                                <span className="text-red-400 text-[0.8vw] ml-[1vw]">{error.name}</span>
                            )}
                        </label>
                        <div className="border-[0.15vw] border-white rounded-[0.8vw] h-[3vw] max-md:h-[8vw] max-md:rounded-[2vw]">
                            <input
                                className="ml-[2vw] text-white/50 text-[1vw] focus:outline-none bg-transparent max-md:text-[2.5vw] max-md:mt-[2vw] max-md:ml-[4vw]"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Eg: Jhon Mathew"
                            />
                        </div>
                    </div>
                    <div className="relative px-[0.5vw] py-[0.5vw] mx-[1.5vw] my-[1vw] w-[30%] max-md:w-[70%]">
                        <label className="absolute text-[1vw] -top-[0.2vw] left-[2vw] px-[0.5vw] bg-gradient-to-r from-[#303030] to-[#2f2f2f] max-md:text-[2.5vw] max-md:-top-[1.2vw] max-md:left-[4vw] max-md:px-[1.5vw] max-md:from-[#343434] max-md:to-[#323232]">
                            Mobile
                            {error.mobile && (
                                <span className="text-red-400 text-[0.8vw] ml-[1vw]">{error.mobile}</span>
                            )}
                        </label>
                        <div className="border-[0.15vw] border-white rounded-[0.8vw] h-[3vw] flex justify-start max-md:h-[8vw] max-md:rounded-[2vw]">
                            <select
                                className="px-[1vw] py-[1vw] text-[1vw] text-white 
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
                            <input
                                className="ml-[2vw] text-white/50 text-[1.1vw] focus:outline-none bg-transparent max-md:text-[2.5vw]"
                                type="text"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                placeholder="000 000 0000"
                            />
                        </div>
                    </div>
                    <div className="relative px-[0.5vw] py-[0.5vw] mx-[1.5vw] my-[1vw] w-[30%] max-md:w-[70%]">
                        <label className="absolute text-[1vw] -top-[0.2vw] left-[2vw] px-[0.5vw] bg-gradient-to-r from-[#2b2b2b] to-[#2b2b2b] max-md:text-[2.5vw] max-md:-top-[1.2vw] max-md:left-[4vw] max-md:px-[1.5vw] max-md:from-[#343434] max-md:to-[#323232]">
                            Email
                            {error.email && (
                                <span className="text-red-400 text-[0.8vw] ml-[1vw]">{error.email}</span>
                            )}
                        </label>
                        <div className="border-[0.15vw] border-white rounded-[0.8vw] h-[3vw] max-md:h-[8vw] max-md:rounded-[2vw]">
                            <input
                                className="ml-[2vw] text-white/50 text-[1.1vw] focus:outline-none bg-transparent max-md:text-[2.5vw] max-md:mt-[2vw] max-md:ml-[4vw]"
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Example@gmail.com"
                            />
                        </div>
                    </div>
                    <div className="relative px-[0.5vw] py-[0.5vw] mx-[1.5vw] my-[1vw] h-[7vw] w-[30%] max-md:w-[70%]">
                        <label className="absolute text-[1vw] -top-[0.2vw] left-[2vw] px-[0.5vw] bg-gradient-to-r from-[#292929] to-[#282828] max-md:text-[2.5vw] max-md:-top-[1.2vw] max-md:left-[4vw] max-md:px-[1.5vw] max-md:from-[#343434] max-md:to-[#323232]">
                            Description
                            {error.description && (
                                <span className="text-red-400 text-[0.8vw] ml-[1vw]">{error.description}</span>
                            )}
                        </label>
                        <div className="border-[0.15vw] border-white rounded-[0.8vw] h-[6vw] max-md:h-[20vw] max-md:rounded-[2vw]">
                            <input
                                className="ml-[2vw] text-white/50 text-[1.1vw] focus:outline-none bg-transparent max-md:text-[2.5vw] max-md:mt-[2vw] max-md:ml-[4vw]"
                                type="text"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="write in detail"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-[#736ADB] w-[20%] py-[0.5vw] rounded-[1vw] max-md:text-[4vw] max-md:w-[50%] max-md:py-[1vw] max-md:mt-[18vw]"
                    >
                        SUBMIT
                    </button>
                </form>
            ) : (
                <div>
                    <div className="flex flex-col text-white justify-center items-center gap-y-[3vw] my-[3vw] max-md:my-[10vw] max-md:gap-y-[10vw]">
                        <h1 className="text-[4vw] poppins-bold text-center max-md:text-[10vw]">
                            We are hear to <h1 className="text-[#736adb]">solve your issue</h1>
                        </h1>
                        {/* search bar */}
                        <div className="flex justify-between items-center px-[2vw] bg-gradient-to-r from-[#4a4a4a] to-[#444444] rounded-l-full rounded-r-full py-[0.5vw] w-[50%] max-md:w-[90%] max-md:px-[4vw] max-md:h-[10vw]">
                            <div className="text-[1vw] max-md:text-[3vw]">
                                <img
                                    className="inline-block invert h-[1.5vw] max-md:h-[4vw]"
                                    src="https://img.icons8.com/?size=100&id=7695&format=png&color=000000"
                                    alt=""
                                />
                                <input
                                    className="pl-[1vw] placeholder:text-[#FFFFFF] focus:outline-none"
                                    type="text"
                                    placeholder="Search chat"
                                />
                            </div>
                            <button type="button" className="bg-blue-700 p-[0.8vw] rounded-full cursor-pointer">
                                <img
                                    className="invert h-[1.8vw]"
                                    src="https://img.icons8.com/?size=100&id=7695&format=png&color=000000"
                                    alt=""
                                />
                            </button>
                        </div>
                    </div>
                    <div className="w-[60%] flex flex-wrap justify-center items-center mx-auto text-white text-[1.5vw] max-md:text-[3.5vw] max-md:w-[80%]  max-md:gap-[2vw]">
                        <button className="px-[1.5vw] border-[0.15vw] py-[0.5vw] rounded-[2vw] m-[0.5vw]">
                            Content Writer
                        </button>
                        <button className="px-[1.5vw] border-[0.15vw] py-[0.5vw] rounded-[2vw] m-[0.5vw]">
                            Report
                        </button>
                        <button className="px-[1.5vw] border-[0.15vw] py-[0.5vw] rounded-[2vw] m-[0.5vw]">
                            Work sample
                        </button>
                        <button className="px-[1.5vw] border-[0.15vw] py-[0.5vw] rounded-[2vw] m-[0.5vw]">
                            Payment
                        </button>
                        <button className="px-[1.5vw] border-[0.15vw] py-[0.5vw] rounded-[2vw] m-[0.5vw]">
                            Wallet
                        </button>
                        <button className="px-[1.5vw] border-[0.15vw] py-[0.5vw] rounded-[2vw] m-[0.5vw]">
                            Hiring
                        </button>
                        <button className="px-[1.5vw] border-[0.15vw] py-[0.5vw] rounded-[2vw] m-[0.5vw]">
                            Downloads
                        </button>
                    </div>
                    <div className="grid grid-cols-2 gap-[2vw] w-[100%] px-[2vw] my-[2vw] max-md:grid-cols-1 max-md:mt-[8vw]">
                        {questionsOfSupport.map((list, idx) => (
                            <div key={idx} className="flex flex-col justify-start items-start text-white gap-y-[0.5vw] max-md:gap-y-[1.5vw]">
                                <button className="text-[1.5vw] hover:underline cursor-pointer max-md:text-[3vw]">Q. {list.question}</button>
                                <p className="text-[1vw] text-white/50 max-md:text-[2vw]">{list.answer}</p>
                            </div>
                        ))}
                    </div>
                    <button
                        type="button"
                        onClick={() => setForm(true)}
                        className="text-[2vw] py-[1vw] text-white w-full bg-[#736adb] max-md:text-[4vw]"
                    >
                        Contact support
                    </button>
                </div>
            )}
        </div>
    );
}
export default SupportHelp;