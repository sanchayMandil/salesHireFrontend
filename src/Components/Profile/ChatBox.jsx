import emoji from '../../assets/emoji.png'
function ChatBox(props){


    // 1 stand for sender 2 for the reciver
    const chatConversation=[
        {
            id:"p1",
            ocupation:"Graphic Designer",
            meaasageSeq:[{message:"hey",user:1},
                {message:"hello",user:2},
                {message:"i want a Poaster design",user:1},
                {message:"for my music band Show",user:1},
                {message:"Do you have anything in your mind",user:2},
            ]
        },

    ]
    return(
        <>
        {props.id==''?<div className={`flex justify-center items-center max-md:hidden`}>
                    <h1 className="text-[2vw] text-gray-700"> No chat has bwwn open</h1>
           </div>:<div className="realtive flex flex-col text-white">
            {/* name chat tittle */}
            <div className="bg-[#3e3e3e] w-[50%] absolute top-0 flex justify-between py-[0.5vw] px-[1vw] max-md:w-[100%]">
                <div className="flex justify-start items-center">
                    {/* for image */}
                    <img className="rounded-full mr-[1vw] h-[4vw] max-md:h-[12vw] max-md:mx-[3vw] max-md:my-[1vw]"
                    src={props.img} alt="" />
                    <div className="flex flex-col justify-start items-start">
                           <h1 className="text-[1.8vw] max-md:text-[5vw]">{props.name}</h1>
                           {chatConversation.filter(list=>list.id==props.id).map(list=>(
                            <h1 className="text-[1vw] text-white/50 max-md:text-[3vw]">{list.ocupation}</h1>
                           ))
                           }
                    </div>
                </div>
                
            </div>
            {/* for chat convertsation */}
            <div className="flex flex-col mt-[5vw] text-white text-[2vw] px-[1vw] py-[0.5vw] h-[35vw] overflow-y-auto
            gap-y-[0.8vw] max-md:mt-[15vw] max-md:text-[5vw] max-md:h-full max-md:gap-y-[2.5vw]">
                {chatConversation.filter(list=>list.id==props.id).map(list=>(
                    list.meaasageSeq.map(meass=>(
                        <>
                    {/* // for the sender */}
                    {meass.user==1?
                    <div className="flex justify-end">
                    <div className="flex flex-col justify-start items-start bg-[#736ADB] px-[0.5vw]
                    rounded-t-[0.5vw] rounded-l-[0.5vw] max-md:px-[2vw] max-md:rounded-t-[2vw] max-md:rounded-l-[2vw]">
                        <h1>{meass.message}</h1>
                    </div>
                </div>
                    :null}
                {meass.user==2?
                <div className="flex justify-start">
                    <div className="flex flex-col justify-start items-start bg-[#484848] px-[0.5vw]
                    rounded-t-[0.5vw] rounded-r-[0.5vw]">
                        <h1>{meass.message}</h1>
                    </div>
                </div>:null}
                    </>
                    ))
                ))
                }
            </div>
            {/* sending message bar */}
             <div className="flex flex-col w-[50%] absolute bottom-0 max-md:w-[100%] max-md:gap-y-[1.5vw]">
                    <div className='flex justify-start text-[0.7vw] m-[1vw] gap-x-[1vw] max-md:text-[2.5vw] max-md:gap-x-[2vw]'>
                        <button className='border-[0.1vw] py-[0.5vw] px-[0.4vw] rounded-[1vw] max-md:px-[2.5vw] max-md:py-[1vw]'>Share portfolio link</button>
                        <button className='border-[0.1vw] py-[0.5vw] px-[0.4vw] rounded-[1vw] max-md:px-[2.5vw] max-md:py-[1vw]'>Send payment info</button>
                    </div>
                <div className="flex justify-between bg-[#333333] text-[1.2vw] py-[1.3vw]
                rounded-[1vw] mx-[0.5vw] max-md:text-[3vw] max-md:py-[4vw] max-md:rounded-[3vw] max-md:mx-[1vw]">
                    <input className="ml-[1vw] placeholder:text-white/50 max-md:ml-[3vw]"
                    type="text" placeholder="Type spmething.." />
                    <div className="flex justify-start items-center gap-x-[0.5vw] mr-[1vw] max-md:gap-x-[2vw] max-md:mr-[3vw]">
                    <button><img className='h-[2vw] max-md:h-[5vw]'
                    src={emoji} alt="" /></button>
                    <button><img className='h-[2vw] max-md:h-[5vw]'
                    src="https://img.icons8.com/?size=100&id=CYKLk4DosdHW&format=png&color=000000" alt="" /></button>
                    <button className='w-[2.5vw] h-[2.5vw] rounded-full bg-[#736ADB] p-[0.4vw] max-md:h-[7vw] max-md:w-[7vw] max-md:p-[2vw]'><img className='invert max-md:h-[5vw]'
                    src="https://img.icons8.com/?size=100&id=39778&format=png&color=000000" alt="" /></button>
                    </div>
                </div>
             </div>
            </div>}
        </>
    );
}
export default ChatBox;