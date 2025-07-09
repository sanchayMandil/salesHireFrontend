import { div } from "motion/react-client";
import { useState } from "react";

function Wallet() {
    const [money, setMoney] = useState(50.0);

    const transtionList = [
        { date: "2025-06-01", amount: 1200, type: "credit" },
        { date: "2025-06-03", amount: 450, type: "debit" },
        { date: "2025-06-05", amount: 3000, type: "credit" },
        { date: "2025-06-07", amount: 980, type: "debit" },
        { date: "2025-06-10", amount: 500, type: "debit" },
        { date: "2025-06-12", amount: 1500, type: "credit" },
        { date: "2025-06-13", amount: 75, type: "debit" },
        { date: "2025-06-15", amount: 2000, type: "credit" },
        { date: "2025-06-17", amount: 110, type: "debit" },
        { date: "2025-06-18", amount: 800, type: "debit" },
    ];
    return (
        <div className="bg-gradient-to-br from-[#393939] to-[#121212] min-h-screen text-white">
            <div className="flex justify-center items-center">
                <div className="bg-[#736ADB] w-[40%] max-md:w-[80%] flex justify-around items-center py-[8vw] md:py-[4vw] rounded-[5vw] md:rounded-[2vw] my-[4vw] md:my-[2vw]">
                    <div className="flex flex-col justify-start">
                        <div className="flex justify-center items-center text-[7vw] md:text-[3vw] ">
                            <img
                                className="h-[7vw] md:h-[3vw] invert"
                                src="https://img.icons8.com/?size=100&id=87749&format=png&color=000000"
                                alt=""
                            />
                            <h1>{money}</h1>
                        </div>
                        <h1 className="text-[4vw] md:text-[2vw]">Available balance</h1>
                    </div>
                    <button className="text-[4vw] md:text-[2vw] bg-[#968fe4] px-[4vw] md:px-[2vw] py-[2vw] md:py-[1vw] rounded-[6vw] md:rounded-[3vw]">
                        + Add Balance
                    </button>
                </div>
            </div>

            <div className="mx-[2vw] md:mx-[1vw]">
                <h1 className="text-[4vw] md:text-[2vw] mb-[2vw]">Transaction</h1>
                <div className="flex flex-col gap-[3vw] md:gap-[1vw]">
                    {transtionList.map((list, idx) => (
                        <div
                            className="flex justify-between items-center px-[2vw] py-[2vw] md:px-0 md:py-0"
                            key={idx}
                        >
                            <div className="flex justify-start items-center">
                                <div className="bg-[#736ADB] p-[1.2vw] md:p-[0.5vw] rounded-full mr-[2vw] md:mr-[1vw]">
                                    <img
                                        className={`invert h-[4vw] md:h-[2vw] ${
                                            list.type === "credit" ? "-rotate-45" : "rotate-135"
                                        }`}
                                        src="https://img.icons8.com/?size=100&id=102473&format=png&color=000000"
                                        alt=""
                                    />
                                </div>
                                <div className="flex flex-col justify-start items-start">
                                    <h1 className="text-[4vw] md:text-[2vw]">Payout</h1>
                                    <p className="text-[2.5vw] md:text-[1vw] text-white/50">
                                        {list.date}
                                    </p>
                                </div>
                            </div>
                            <h1 className="text-[3vw] md:text-[1.5vw] text-[#84FF82] mx-[2vw] md:mx-[1vw]">
                                ₹ {list.amount}
                            </h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Wallet;