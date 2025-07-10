import { useNavigate } from "react-router-dom";

function MyOrder(){
    const nav = useNavigate();

    const orders=[
        {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaljF7oMm73Y0QrJLnB2cRENGGyPlKadeGZA&s",
            orderId:"# 536767267",
            time:"12:40 PM",
            name:"Ram Sharma",
            status:true
        },
           {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrSISWg5677MbU5K41wN8gaGK4W24d8ixfnK_EWpdyKUnrnFxBMGQlQjNarijIWtQl32Y&usqp=CAU",
            orderId:"# 536767267",
            time:"1:40 PM",
            name:"Vikas Kumar",
            status:false
        },
           {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPOoSyT5n-WoO4K0-Mn9jWYTc2aR91C0xHWg&s",
            orderId:"# 536767267",
            time:"10:40 PM",
            name:"Ayush Gupta",
            status:true
        }
    ]

    return(
        <>
        <div className="bg-gradient-to-br from-[#393939] to-[#121212] h-dvh w-[85vw] max-md:w-[100vw]">
             <button 
                    onClick={() => nav("/profile")} 
                    className="text-white poppins-bold -tracking-normal text-[2.5vw] max-md:text-[5vw] pl-[1vw] max-md:pl-[2vw] max-md:py-[2vw] cursor-pointer"
                >
                    <img 
                        className="h-[2vw] w-[2vw] max-md:h-[4vw] max-md:w-[4vw] inline-block invert pr-[1vw] -mt-[0.5vw]"
                        src="https://img.icons8.com/?size=100&id=40217&format=png&color=000000" 
                        alt="Chat icon" 
                    />
                    Works
                </button>
                <div className="flex flex-col justify-start text-white gap-y-[2vw] max-md:gap-y-[4vw]">
                    {orders.map(list=>(
                        <div className="flex justify-between items-center">
                        <div className="flex justify-start items-center">
                            <img className="h-[5vw] rounded-full mx-[1vw] max-md:h-[15vw]"
                            src={list.image} alt="" />
                            <div className="flex flex-col justify-start items-start">
                                <h1 className="text-[1.5vw] max-md:text-[3vw]">{list.name}</h1>
                                <h2 className="text-[1vw] max-md:text-[2vw]">OrderID {list.orderId} </h2>
                                <h4 className="text-[0.8vw] text-white/50 max-md:text-[1.5vw]">{list.time}</h4>
                            </div>
                        </div>
                        <button className={`text-[1.5vw] px-[1vw] py-[0.5vw] rounded-[2vw] mr-[1vw] ${list.status ? "bg-[#1A981F]" : "bg-[#F21212BA]"} max-md:mr-[2vw] max-md:text-[3.5vw]`}>
                            {list.status?"Complete":"Cancled"}
                        </button>
                    </div>
                    ))
                    }
                </div>
        </div>
        </>
    );
}
export default MyOrder;
