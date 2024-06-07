import React from "react";

const RollToTopButton = () => {
    function RollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <div
            onClick={RollToTop}
            className="z-40 w-[40px] h-[40px] flex items-center justify-center bg-[#7dc642] rounded-md animate-bounce fixed right-5 bottom-5 cursor-pointer"
        >
            <div className="flex flex-col h-3/4 w-3/4 items-center justify-center">
                <i class="fa-solid mb-1 fa-caret-down rotate-180 text-xl text-white animate-pulse"></i>
                <i class="fa-solid h-1/4 fa-caret-down rotate-180 text-xl text-white animate-pulse"></i>
            </div>
        </div>
    );
}

export default RollToTopButton;