import React from "react";

const CommitBox = ({ icon, icon1, context }) => {
    return (
        <div className="w-full py-5 rounded-lg bg-[#3e3e3e] flex flex-col items-center cursor-pointer gap-5 shadow-2xl">
            <div className="w-1/2">
                <img
                    src={icon1}
                />
            </div>
            <p className="font-medium px-1 md:px-3 text-white text-center text-sm md:text-[17px] mt-5">
                {context}
            </p>
        </div>
    )
}

export default CommitBox;