import React from "react";


const SmallRouterButton = ({ onClick, children, btnColor, path }) => {
    return (
        <div to={path}>
            <button
                type="button"
                onClick={onClick}
                className="relative bg-[#3e3e3e] rounded-[50px] text-base font-bold text-white cursor-pointer group"
            >
                <div className={`absolute w-3/4 h-full bg-${btnColor} rounded-[50px]  group-hover:w-full duration-200`}></div>
                <div className="py-3 px-4  flex flex-row items-center justify-center gap-5 z-20 relative">
                    {children}
                </div>
            </button>
        </div>
    );
};

export default SmallRouterButton;