import React from "react";
import blog from '../../assets/blog.jpg'

const MediumBlog = ({ preText }) => {
    return (
        <div className="w-full h-full flex flex-row gap-3 cursor-pointer p-3 hover:shadow-2xl  rounded-xl duration-200 border border-transparent hover:border-gray-200">
            <div className="relative h-full w-2/5 md:w-1/2 lg:w-2/5 overflow-hidden rounded-xl group flex justify-start items-start">
                <div className="absolute w-full h-full rounded-xl duration-300 scale-105 group-hover:scale-90 border-2 border-white z-10"></div>
                <img
                    src={blog}
                    className="w-full h-[150px] group-hover:scale-110 rounded-xl duration-300 group-hover:brightness-[95%]"
                />
            </div>

            <div className="w-3/5 md:w-1/2 lg:w-3/5 h-full">
                <p className="text-sm lg:text-base font-bold mb-1">MẬT ONG NUÔI CÓ ĐƯỢC GỌI LÀ MẬT NGUYÊN CHẤT KHÔNG?</p>
                <div className=" lg:flex items-center italic text-sm mb-2 md:hidden flex">
                    <i class="fa-solid fa-calendar-days mr-1"></i>
                    <p>11/12/2023</p>
                    <p className="mx-2">|</p>
                    <p className="hover:text-[#7dc642] cursor-pointer">Phạm Ngọc Qúi</p>
                </div>
                <p className="text-sm block md:hidden lg:block">{preText.substring(0, 100)}...</p>
                <p className="text-sm hidden md:block lg:hidden">{preText.substring(0, 30)}...</p>
            </div>
        </div>
    );
}

export default MediumBlog;