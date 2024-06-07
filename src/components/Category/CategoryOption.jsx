import React from "react";

const CategoryOption = ({ img1, img2, content, onClick }) => {
    return (
        <div onClick={onClick} className="w-full h-auto py-2 sm:py-5 md:px-0 flex flex-col items-center cursor-pointer rounded-lg group hover:bg-[#3e3e3e] sm:mt-15 duration-200">
            <div className="md:w-1/2 sm:w-3/4 relative m-5">
                <img
                    src={img1}
                    className="w-full absolute"
                />
                <img
                    src={img2}
                    className="w-full opacity-0 group-hover:opacity-100 duration-200"
                />
            </div>
            <div className="relative w-5/6 md:w-2/3 duration-200 text-black group-hover:text-white cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-white before:origin-center before:h-[2px] before:w-0 group-hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-white after:origin-center after:h-[2px] after:w-0 group-hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                <p className=" sm:text-base md:text-xl text-center font-medium mt-5 pb-3">{content}</p>
            </div>
        </div>
    );
}

export default CategoryOption;