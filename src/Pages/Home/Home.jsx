import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [showMore, setShowMore] = useState(false);
    const [serch, setSearch] = useState('');
    const [currentOption, setCurrentOption] = useState(1);
    const [roleType, setOccpation] = useState('');
    const nav = useNavigate();

    const typeOfSalesRoles = [
        "Contract",
        "Permanent",
        "Part Time",
        "Target Based",
        "Freelance",
    ];

   const SalseManagers = [
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLk-zOT6LhOK5DfCt-_-khEFvCeZ1voYF-Q&s",
            name: "Arjun Mehta",
            roleType: "Contract, Permanent",
            rating: "4.8",
            bio: "Arjun is a dynamic sales manager with a proven track record in building high-performing teams and exceeding sales targets across multiple industries.",
            skills: ["Team Leadership", "Sales Strategy", "Client Acquisition"],
            currentPosition: "Senior Sales Manager at TechCorp"
        },
        {
            image: "https://i.pinimg.com/736x/56/7a/d2/567ad26c22b991cb9f52b999f70b855d.jpg",
            name: "Sneha Sharma",
            roleType: "Contract, Part Time",
            rating: "4.5",
            bio: "Sneha specializes in client relationship management and strategic sales planning, consistently driving revenue growth for her clients.",
            skills: ["Client Relations", "Strategic Planning", "Revenue Growth"],
            currentPosition: "Client Success Manager at GrowEasy"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTCDv0YcATzcm5qoopZz9I8V0Ox5hWhl5ILw&s",
            name: "Rohan Patel",
            roleType: "Part Time, Freelance",
            rating: "4.7",
            bio: "Rohan is known for his expertise in B2B sales and his ability to close complex deals, making him a valuable asset to any sales team.",
            skills: ["B2B Sales", "Deal Closing", "Negotiation"],
            currentPosition: "Freelance Sales Consultant"
        },
        {
            image: "https://i.pinimg.com/736x/65/7c/be/657cbe674b977b14c121199fc7d4be41.jpg",
            name: "Priya Nair",
            roleType: "Freelance, Contract",
            rating: "4.9",
            bio: "Priya excels at developing sales strategies and mentoring junior sales staff, helping organizations achieve sustainable growth.",
            skills: ["Sales Strategy", "Mentoring", "Business Development"],
            currentPosition: "Sales Strategy Consultant at Innovate Solutions"
        },
        {
            image: "https://res.cloudinary.com/dq83xons7/image/upload/f_auto,w_786,c_fill/v1709488135/assets/adult-man-passport-size-photo-sample5-before.jpg",
            name: "Vikram Singh",
            roleType: "Part Time, Freelance",
            rating: "4.6",
            bio: "Vikram brings over a decade of experience in sales management, with a focus on expanding market share and customer retention.",
            skills: ["Market Expansion", "Customer Retention", "Sales Management"],
            currentPosition: "Part-Time Sales Director at MarketMovers"
        },
        {
            image: "https://i.pinimg.com/736x/8c/6a/78/8c6a785483ee3e92d8163f2fac2cc567.jpg",
            name: "Meera Iyer",
            roleType: "Contract, Freelance",
            rating: "4.8",
            bio: "Meera is a results-driven sales manager who leverages data analytics to optimize sales processes and maximize profitability.",
            skills: ["Data Analytics", "Process Optimization", "Profit Maximization"],
            currentPosition: "Analytics-Driven Sales Lead at DataCorp"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiBObuIn9iXWBvcrvW0k17G_bCHimI819Rzw&s",
            name: "Aniket Joshi",
            roleType: "Vector Designer",
            rating: "4.4",
            bio: "Aniket has a strong background in sales operations and is adept at building long-term partnerships with key clients.",
            skills: ["Sales Operations", "Client Partnerships", "Account Management"],
            currentPosition: "Sales Operations Specialist at DesignWorks"
        },
        {
            image: "https://i.pinimg.com/736x/8c/11/dd/8c11dd4a7110a437722370c4663f80ec.jpg",
            name: "Tanvi Rao",
            roleType: "Target Based",
            rating: "4.7",
            bio: "Tanvi is recognized for her innovative sales campaigns and her ability to motivate teams to achieve ambitious sales goals.",
            skills: ["Sales Campaigns", "Team Motivation", "Goal Setting"],
            currentPosition: "Campaign Manager at SalesBoost"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTuIeAH6NLv3GWB8eqoDhaHMOKLJzP1mHqZzvL8vUysq19z2Bb6Mn-bgahNRDLy3S-xCU&usqp=CAU",
            name: "Kabir Das",
            roleType: "Part Time",
            rating: "4.5",
            bio: "Kabir is a skilled negotiator and sales strategist, known for his customer-centric approach and consistent sales performance.",
            skills: ["Negotiation", "Customer-Centric Sales", "Sales Strategy"],
            currentPosition: "Part-Time Sales Strategist at CustomerFirst"
        },
        {
            image: "https://t3.ftcdn.net/jpg/04/18/93/88/360_F_418938894_iUWWkyqUsQ8oDZObqDRYqEUs4Oq5TJg1.jpg",
            name: "Aditi Kapoor",
            roleType: "Part Time, Freelance",
            rating: "4.8",
            bio: "Aditi has extensive experience in sales enablement and training, empowering teams to deliver exceptional results.",
            skills: ["Sales Enablement", "Team Training", "Performance Coaching"],
            currentPosition: "Freelance Sales Trainer"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRethFWrvV8VRn2WWe4Vw5PsnLJNko8QURT4OjYFtaCzKBdYk8mi0O2hR37Z3B35Q_puv8&usqp=CAU",
            name: "Rajeev Gupta",
            roleType: "Part Time, Freelance",
            rating: "4.6",
            bio: "Rajeev is an expert in sales forecasting and pipeline management, helping businesses achieve predictable growth.",
            skills: ["Sales Forecasting", "Pipeline Management", "Strategic Planning"],
            currentPosition: "Freelance Pipeline Manager at GrowthPredict"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9OjEsy_kxyY0dBTnAhVDrSoMMYx3MYzZegQ&s",
            name: "Divya Menon",
            roleType: "Target Based, Part Time",
            rating: "4.7",
            bio: "Divya is passionate about building strong client relationships and delivering tailored sales solutions.",
            skills: ["Client Relationships", "Solution Selling", "Customer Engagement"],
            currentPosition: "Relationship Manager at ClientConnect"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8pTiTvbkgoJKKyCJnqCL_1NyaHABw-CcXmAzgNh5KzYbkwZ18K1NQrRDcC0JCKaU05ok&usqp=CAU",
            name: "Neha Bansal",
            roleType: "Permanent",
            rating: "4.9",
            bio: "Neha is a seasoned sales manager with expertise in market expansion and team leadership.",
            skills: ["Market Expansion", "Team Leadership", "Business Growth"],
            currentPosition: "Head of Sales at ExpandNow"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRITaklCPL8iGBhamjnE4bKejC5qLFAE4yOjw&s",
            name: "Saurabh Desai",
            roleType: "Permanent",
            rating: "4.6",
            bio: "Saurabh is known for his strategic thinking and ability to drive sales growth in competitive markets.",
            skills: ["Strategic Thinking", "Sales Growth", "Competitive Analysis"],
            currentPosition: "Strategic Sales Lead at CompeteCorp"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNF-Y52PsIxtI4Yz2FCeBSO2wZPTyXQjKGOA&s",
            name: "Ritika Jain",
            roleType: "Part Time, Freelance",
            rating: "4.7",
            bio: "Ritika has a talent for identifying new business opportunities and nurturing client accounts.",
            skills: ["Business Development", "Client Nurturing", "Opportunity Identification"],
            currentPosition: "Freelance Business Developer"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9us0MxB35Wv3z03TJFrxhub-WyxqpBKAsjQ&s",
            name: "Manoj Reddy",
            roleType: "Part Time",
            rating: "4.5",
            bio: "Manoj is a proactive sales manager who excels at building and leading high-energy sales teams.",
            skills: ["Team Building", "Leadership", "Sales Motivation"],
            currentPosition: "Part-Time Team Lead at EnergySales"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDpw1amrqbPXz0BV-xxGZ_RiqhXlmkNItWrg&s",
            name: "Pooja Jain",
            roleType: "freeLance",
            rating: "4.8",
            bio: "Pooja is dedicated to delivering outstanding sales results through innovative strategies and strong client engagement.",
            skills: ["Innovative Strategies", "Client Engagement", "Sales Performance"],
            currentPosition: "Freelance Sales Specialist"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHUKHc-U2iz8PU-iAI2ZI7mAHbQw_5P0MqOl5hzBYbZKTxwt4H2Itdt6lHznKxn8xm2ho&usqp=CAU",
            name: "Varun Khanna",
            roleType: "Permanent",
            rating: "4.6",
            bio: "Varun is an accomplished sales manager with a focus on driving revenue and expanding business networks.",
            skills: ["Revenue Growth", "Network Expansion", "Sales Management"],
            currentPosition: "Sales Director at NetworkExpand"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd29uIrQEiSYxjz61UFN8M_E1JxEO87v0OxfgCamNxCoxjSuga9pK154pkNV1xTA8W7H4&usqp=CAU",
            name: "Simran Kaur",
            roleType: "Permanent, Part Time",
            rating: "4.9",
            bio: "Simran is skilled in sales analytics and uses insights to guide her team to consistent success.",
            skills: ["Sales Analytics", "Team Guidance", "Data-Driven Decisions"],
            currentPosition: "Analytics Lead at DataSales"
        },
    ];

    return (
        <div className="w-full bg-gradient-to-b from-[#393939] to-[#2b2b2b] text-white py-[0.01vw] h-auto">
            {/* Header */}
            <div className="fixed z-20 w-full bg-gradient-to-b from-[#393939] to-[#383838] ">
                <div className="flex justify-between items-center mx-[1vw] max-md:m-[2vw]">
                    <div className="flex justify-start items-end gap-x-[1vw] my-[0.5vw] max-md:gap-x-[2vw]">
                        <button>
                            <img
                                className="invert h-[2.5vw] max-md:h-[8vw]"
                                src="https://img.icons8.com/?size=100&id=83326&format=png&color=000000"
                                alt=""
                            />
                        </button>
                        <h1 className="text-[1.5vw] max-md:text-[4vw]">Sales Managers</h1>
                    </div>
                    <div className="flex justify-start items-center gap-x-[1vw] max-md:gap-x-[2vw]">
                        <button>
                            <img
                                className="invert h-[2vw] max-md:h-[6vw]"
                                src="https://img.icons8.com/?size=100&id=11642&format=png&color=000000"
                                alt=""
                            />
                        </button>
                        <button>
                            <img
                                className="w-full h-[2.5vw] max-md:h-[6vw] max-md:w-[6vw]"
                                src="https://img.icons8.com/?size=100&id=tZuAOUGm9AuS&format=png&color=000000"
                                alt=""
                            />
                        </button>
                    </div>
                </div>

                {/* Search bar and options */}
                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-y-[1vw] mx-[1vw] mb-[1vw] max-md:gap-y-[5vw] max-md:mb-[2vw]">
                    {/* Search Bar */}
                    <div className="flex justify-between items-center px-[1vw] bg-gradient-to-r from-[#4a4a4a] to-[#444444] rounded-full py'[0.2vw] h-[3vw] max-md:h-[10vw] max-md:px-[3vw]">
                        <div className="text-[1vw] max-md:text-[3vw] flex justify-center">
                            {serch === '' ? <img
                                className="inline-block invert h-[2vw] max-md:h-[5vw]"
                                src="https://img.icons8.com/?size=100&id=7695&format=png&color=000000"
                                alt="search-icon"
                            /> : null}
                            <input
                                onChange={(e) => setSearch(e.target.value)}
                                className="pl-[1vw] placeholder:text-[#FFFFFF] focus:outline-none bg-transparent "
                                type="text"
                                placeholder="Search here"
                            />
                        </div>
                        <button
                            type="button"
                            className="bg-blue-700 p-[0.5vw] max-md:p-[1.2vw] rounded-full cursor-pointer"
                        >
                            <img
                                className="invert h-[1.5vw] max-md:h-[6vw]"
                                src="https://img.icons8.com/?size=100&id=7695&format=png&color=000000"
                                alt="search-button"
                            />
                        </button>
                    </div>

                    {/* Type of role Dropdown */}
                    <div className="flex justify-start items-center gap-x-[1vw] max-md:gap-x-[2vw]">
                        <select
                            value={roleType}
                            onChange={(e) => setOccpation(e.target.value)}
                            className="text-[1vw] max-md:text-[3vw] bg-[#4a4a4a] text-white border-[0.15vw] border-white/50 rounded-[2vw] px-[1vw] py-[0.3vw] focus:outline-none max-md:px-[2vw] max-md:py-[1vw]"
                        >
                            <option value="">Select Role Type</option>
                            {typeOfSalesRoles.map((value, key) => (
                                <option key={key} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                        {roleType !== '' && (
                            <button
                                type="button"
                                onClick={() => setOccpation('')}
                                className="text-[1vw] bg-[#736adb] px-[1vw] py-[0.3vw] rounded-[2vw] whitespace-nowrap max-md:text-[3vw] max-md:px-[2vw] max-md:py-[1vw]"
                            >
                                Clear
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* List of sales managers */}
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-[2vw] m-[1.5vw] mt-[8vw] max-md:mt-[37vw] max-md:gap-y-[8vw]">
                {
                    (() => {
                        const filteredDesigners = SalseManagers.filter(list =>
                            list.name.toLowerCase().includes(serch.toLowerCase()) &&
                            (roleType === '' || list.roleType.toLowerCase().includes(roleType.toLowerCase()))
                        );
                        if (filteredDesigners.length === 0) {
                            return (
                                <div className="flex flex-col justify-center items-center text-[3vw] text-white/50 h-[16.5vw] max-md:h-screen">
                                    <h1 className="">No result is found</h1>
                                </div>
                            );
                        }
                        return filteredDesigners.map((list) => (
                            <div key={list.name}
                                className=" flex justify-start items-start gap-x-[2vw] max-md:flex-col">
                                <div
                                    className="w-[40%] max-md:w-full relative h-[30vw] max-md:h-[100vw] rounded-[2vw] overflow-hidden bg-center max-md:rounded-[5vw]"
                                    style={{
                                        backgroundImage: `url(${list.image})`,
                                        backgroundSize: "cover",
                                    }}
                                >
                                    <div className="absolute top-[1vw] left-[1vw] z-10 max-md:top-[3vw] max-md:left-[3vw]">
                                        <div className="absolute top-[0vw] left-[0vw] rounded-[2vw] bg-gray-200/30 backdrop-brightness-120 w-[9.5vw] h-[2.5vw] blur-[15px] -z-5 max-md:w-[23vw] max-md:h-[6vw] max-md:-top-[0.5vw]">
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => nav('/home/visit')}
                                            className="cursor-pointer bottom-[4vw] right-[3vw] text-[1vw] flex justify-end items-center gap-x-[1vw] px-[0.3vw] z-5 max-md:text-[3vw]">
                                            <img
                                                className="h-[2.5vw] max-md:h-[5vw]"
                                                src="https://img.icons8.com/?size=100&id=tZuAOUGm9AuS&format=png&color=000000"
                                                alt=""
                                            />
                                            <label className="hover:underline hover:text-gray-500" htmlFor="">
                                                View profile
                                            </label>
                                        </button>
                                    </div>
                                </div>
                                <div className="relative flex flex-col justify-start items-start w-[50%] max-md:w-full">
                                    <div className="max-md:-mt-[32vw] z-10 max-md:ml-[4vw]">
                                        <div className="mb-[1vw] flex flex-col justify-start items-start">
                                            <div className="flex justify-start gap-x-[1vw] max-md:gap-x-[10vw]">
                                                <h1 className="text-[3vw] font-bold max-md:text-[6vw]">{list.name}</h1>
                                                <div className=" mt-[1vw]">
                                                    {/* Container div */}
                                                    <div className="absolute rounded-[2vw] w-[5.5vw] h-[2.3vw] overflow-hidden z-10 max-md:w-[14vw] max-md:h-[6vw] max-md:right-[5vw]">
                                                        {/* Blur div */}
                                                        <div className="absolute bg-gray-100/10 backdrop-brightness-150 blur-[10px] w-full h-full z-5"></div>
                                                    </div>
                                                    {/* Main label of rating */}
                                                    <label className="absolute text-white text-[1.5vw] px-[0.8vw] py-[0.5vw] z-20 flex justify-center items-center -mt-[0.25vw] max-md:ml-[0.8vw] max-md:text-[4vw] max-md:right-[6vw]">
                                                        <img
                                                            className=" h-[1.5vw] -mt-[0.4vw] max-md:h-[5vw]"
                                                            src="https://img.icons8.com/?size=100&id=qdQpy48X3Rjv&format=png&color=000000"
                                                            alt=""
                                                        />
                                                        {list.rating}
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <h3 className="text-[1.5vw] text-white/50 max-md:text-[3vw]">{list.roleType}</h3>
                                         <p className="text-[1vw] text-white/60 max-md:text-[3.5vw] mt-[0.5vw]">
                                            {list.currentPosition}
                                        </p>
                                        <p className="text-[1.2vw] text-white/50 max-md:text-[3.5vw] mt-[0.5vw]">
                                            Skills: {list.skills.join(", ")}
                                        </p>
                                        <p className="max-md:hidden text-[1vw] text-white/20 mt-[0.5vw]">{list.bio}</p>
                                    </div>
                                </div>
                            </div>
                        ));
                    })()
                }
            </div>

            {/* fixed footer for the mobile */}
            <div className="fixed max-md:bottom-[4vw] md:top-[0.5vw] z-20 w-full flex justify-center items-center">
                <div className="flex justify-between items-center text-white text-[1vw] gap-x-[5vw] max-md:bg-gray-500/25 brightness-130 px-[2vw] max-md:py-[0.5vw] max-md:gap-x-[10vw] max-md:w-[90%] max-md:rounded-[4vw] max-md:text-[2vw]">
                    <button type="button"
                        onClick={() => setCurrentOption(1)}
                        className={`flex max-md:flex-col items-center gap-x-[1vw] ${currentOption === 1 ? "underline rounded-[2vw] bg-white/20 px-[1vw] py-[0.5vw]" : ""}`}>
                        <img className='max-md:h-[10vw] invert h-[1.5vw]'
                            src="https://img.icons8.com/?size=100&id=TZ2lKyH3LVjx&format=png&color=000000" alt="" />
                        Home
                    </button>
                    <button type="button"
                        onClick={() => nav('/chats')}
                        className={`flex max-md:flex-col items-center gap-x-[1vw] ${currentOption === 3 ? "underline rounded-[2vw] bg-white/20 px-[1vw] py-[0.5vw]" : ""}`}>
                        <img className="max-md:h-[10vw] invert h-[1.5vw]"
                            src="https://img.icons8.com/?size=100&id=qRjURAKhyJ2n&format=png&color=000000" alt="" />
                        Chats
                    </button>
                    <button type="button"
                        onClick={() => nav('/profile')}
                        className={`flex max-md:flex-col items-center gap-x-[1vw] ${currentOption === 4 ? "underline rounded-[2vw] bg-white/20 px-[1vw] py-[0.5vw]" : ""}`}>
                        <img className="max-md:h-[10vw] invert h-[1.5vw]"
                            src="https://img.icons8.com/?size=100&id=15263&format=png&color=000000" alt="" />
                        Profile
                    </button>
                </div>
            </div>

            {/* Footer */}
            <footer className="w-full bg-gradient-to-br from-gray-900 to-blue-900 border-t-[0.1vw] border-white/50 text-white mt-[1vw] max-md:hidden">
                <div className="flex flex-col md:flex-row justify-around items-center">
                    <div className="flex flex-col jsutify-start items-start -mt-[10vw]">
                        <h1 className="text-[3.5vw] font-bold">Sales Managers</h1>
                        <h1 className="text-[1vw] text-gray-400">
                            © {new Date().getFullYear()} All rights reserved.
                        </h1>
                    </div>
                    <div className="flex flex-col justify-center h-[20vw] gap-y-[0.4vw] text-[1vw]">
                        <a href="#privacy" className="hover:text-blue-500">Support & help</a>
                        <a href="#terms" className="hover:text-blue-500">Terms</a>
                        <h1 className="hover:text-white">Contact:</h1>
                        <div className="flex justify-between items-center invert gap-x-[1vw]">
                            <button><img className="h-[2vw]"
                                src="https://img.icons8.com/?size=100&id=435&format=png&color=000000" alt="" /></button>
                            <button><img className="h-[2vw]" src="https://img.icons8.com/?size=100&id=32292&format=png&color=000000" alt="" /></button>
                            <button><img className="h-[2vw]" src="https://img.icons8.com/?size=100&id=fJp7hepMryiw&format=png&color=000000" alt="" /></button>
                            <button><img className="h-[2vw]" src="https://img.icons8.com/?size=100&id=53388&format=png&color=000000" alt="" /></button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
