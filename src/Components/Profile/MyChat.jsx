import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import ChatBox from "./ChatBox";
function MyChat(props){
    const type = props.type;
    const nav = useNavigate()
    const [open, setOpen] = useState(false);
    const [userId,setUserId] = useState('');
    const [name, setNAme] = useState('');
    const [pic, setPic] = useState('');
    const [show, setShow] = useState(false)
    const route = type? `/${type}`:`/profile`;

 const listOfChat = [
    {
        image: "https://images.contactout.com/profiles/6e2d274937bb90013ecf179c2886fbb3",
        name: "Rohan Patel",
        lastMessage: "Do you have Anything is your mind?",
        time: "12:30 pm",
        id:"p1"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZtTaO6AbKq7WTqMZNqpi_Y8WD-Axib7KVzMOvPu_23lCinMcDC-IW_ZaOfw3I6bH-9A0&usqp=CAU",
        name: "Aisha Sharma",
        lastMessage: "Hey, can we discuss the project?",
        time: "1:15 pm",
         id:"p2"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOX-W9h7yXsWq7JIkwd1OANDzTZTql9w-DJQ&s",
        name: "Vikram Singh",
        lastMessage: "I'll send the files soon.",
        time: "10:45 am", id:"p3"
    },
    {
        image: "https://media.licdn.com/dms/image/v2/D5603AQFrpPY_TwIN-Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727434802659?e=2147483647&v=beta&t=ClaS3cO0rseqiMLJjeJxzH_bsbY-ThyifdEDJ6yKaQA",
        name: "Priya Nair",
        lastMessage: "Lunch plans for tomorrow?",
        time: "3:20 pm", id:"p4"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXmz4ZDEYKP9F9m_vdiM7ozuU2nRCwKbmH9Q&s",
        name: "Arjun Mehta",
        lastMessage: "Check out this new design!",
        time: "9:30 am" ,id:"p5"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdYiei9LhBUt0_UJabTfZNMViGjcVr7Up4Jv83h17Dcm5-qX0aK868eZCe5ivDuXY7c0Y&usqp=CAU",
        name: "Sneha Gupta",
        lastMessage: "Meeting rescheduled to 4 PM.",
        time: "2:10 pm"
        , id:"p6"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoB7I_V9_mzvSTjDpv65No39RgVz4EB6NR5Z8t-44QWNVFWUiUPziG2uRVHqlbYxC45sE&usqp=CAU",
        name: "Karan Desai",
        lastMessage: "Can you review my code?",
        time: "11:50 am",
         id:"p7"
    }
];

    const Nav = useNavigate();
    return(
        <div className={`relative bg-gradient-to-br from-[#393939] to-[#121212] ${type?"w-[100vw]":"w-[85vw]"} h-[100vh] grid grid-cols-2 max-md:grid-cols-1 max-md:w-[100vw] `}>
            <div className={`border-r-[0.2vw] border-gray-700 overflow-y-auto max-md:${show?"hidden":"block"}`}>
                 {/* Chat title */}
            <div className="w-full flex justify-between items-center">
                {type?<button 
                    onClick={() => nav(route)} 
                    className="text-white text-[2.5vw] pl-[1vw] cursor-pointer max-md:text-[5vw]"
                >
                    <img 
                        className="h-[2vw] w-[2vw] inline-block invert pr-[1vw] -mt-[0.5vw] max-md:h-[4vw] max-md:w-[4vw]"
                        src="https://img.icons8.com/?size=100&id=40217&format=png&color=000000" 
                        alt="Chat icon" 
                    />
                    Chat
                </button>:
                <button 
                    onClick={() => nav(0)} 
                    className="text-white text-[2.5vw] pl-[1vw] cursor-pointer"
                >
                    <img 
                        className="h-[2vw] w-[2vw] inline-block invert pr-[1vw] -mt-[0.5vw]"
                        src="https://img.icons8.com/?size=100&id=40217&format=png&color=000000" 
                        alt="Chat icon" 
                    />
                    Chat
                </button>}
                <div className="relative">
                    <button 
                        className="p-2 rounded-full"
                        onClick={() => setOpen(!open)}
                    >
                        <img 
                            className="h-[2.2vw] invert max-md:h-[4vw]"
                            src="https://img.icons8.com/?size=100&id=21622&format=png&color=000000" 
                            alt="Menu icon"
                        />
                    </button>
                    {open && (
                        <div className="fixed top-1/2 left-[45vw] transform -translate-x-1/2 -translate-y-1/2 w-[25vw] bg-[#444444] shadow-md rounded-[2vw] z-50 text-[2vw] overflow-hidden text-white px-[1vw]">
                            <ul className="py-2">
                                <li className="px-4 py-2 cursor-pointer">
                                    Support & Help
                                </li>
                                <li className="px-4 py-2 cursor-pointer">
                                    Manage Block Contact
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            {/* Search bar */}
            <div className="flex justify-between items-center pl-[2vw] pr-[1vw] bg-gradient-to-r from-[#4a4a4a] to-[#444444] rounded-l-full rounded-r-full py-[0.5vw] mx-[1vw] h-[3.5vw] max-md:h-[10vw] max-md:pl-[5vw] max-md:pr-[3vw]">
                <div className="text-[1vw] max-md:text-[3vw]">
                    <img className="inline-block invert h-[1.5vw] max-md:h-[4vw]"
                    src="https://img.icons8.com/?size=100&id=7695&format=png&color=000000" alt="" />
                     <input className="pl-[1vw] focus:outline-none placeholder:text-white/50"
                     type="text" placeholder="Search chat" />
                </div>
               <button type="button"className="bg-blue-700 p-[0.7vw] rounded-full cursor-pointer">
                <img className="invert h-[1.5vw] max-md:h-[6vw]" src="https://img.icons8.com/?size=100&id=7695&format=png&color=000000" alt="" />
               </button>
            </div>
            {/* chat list */}
            <div className="flex flex-col justify-start max-md:mt-[2vw]">
                {listOfChat.map((values)=>(
                    <button key={values.id}
                    onClick={()=>{console.log(values.id)
                        setUserId(values.id)
                        setNAme(values.name)
                        setPic(values.image)
                        setShow(true)
                        console.log(pic)
                    }}
                    type="button"
                    className="flex justify-start items-center p-[1vw] cursor-pointer
                     hover:bg-gray-800">
                        <img className="rounded-full h-[5vw] object-center max-md:h-[15vw]" 
                        src={values.image} alt="" />
                        <div className="flex flex-col justify-start items-start text-white pl-[1vw]">
                            <h1 className="text-[1.3vw] max-md:text-[5vw]">{values.name}</h1>
                            <p className="text-[0.8vw] text-white/50 max-md:text-[2vw]">{values.lastMessage}</p>
                            <span className="text-[0.7vw] text-white/50 max-md:text-[1.5vw]">{values.time}</span>
                        </div>
                    </button>
                ))}
            </div>
            </div>
            {/* col 2 */}
           <ChatBox id={userId} name={name} img={pic}/>
        </div>
    );
}
export default MyChat;