import React from "react";
import { Link } from "react-router-dom";

const BigRouterButton = ({ onClick, children, path }) => {
    return (
        <Link to={path}>
            <button
                type="button"
                onClick={onClick}
                className="relative w-2/5 bg-[#7dc642] rounded-[50px] text-xl font-bold text-white cursor-pointer group"
            >
                <div className="absolute w-3/4 h-full bg-orange-500 rounded-[50px]  group-hover:w-full duration-200 "></div>
                <div className="py-5 px-4  flex flex-row items-center justify-center gap-5 z-20 relative">
                    {children}
                    <i class="fa-solid fa-arrow-right text-white"></i>
                </div>
            </button>
        </Link>
    );
};

export default BigRouterButton;