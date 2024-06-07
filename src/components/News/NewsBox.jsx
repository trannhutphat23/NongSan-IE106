import React from "react";
import news from '../../assets/image/new.jpg';

const NewsBox = ({ title, date, author, preText }) => {
    return (
        <div className="w-full flex flex-col items-center gap-10 cursor-pointer border border-gray-500 hover:border-black p-3 rounded-xl group">
            <img
                src={news}
                alt="new"
                className="rounded-xl group-hover:scale-105 duration-200"
            />
            <div className="w-full flex flex-col gap-3">
                <p className="text-3xl font-bold truncate pb-2">{title}</p>
                <div className="max-w-full flex items-center italic text-[15px]">
                    <i class="fa-solid fa-calendar-days mr-1"></i>
                    <p>{date}</p>
                    <p className="mx-2">|</p>
                    <p className="hover:text-[#7dc642]">{author}</p>
                </div>
                <p className="h-20 overflow-hidden group-hover:text-[#7dc642]">{preText}</p>
            </div>
        </div>
    );
}

export default NewsBox;