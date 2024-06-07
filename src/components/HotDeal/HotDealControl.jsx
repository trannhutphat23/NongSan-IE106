import React from "react";
import { useSwiper } from 'swiper/react';

const HotDealControl = () => {
    const swiper = useSwiper();
    return (
        <div className="w-full flex justify-end mt-5">
            <div className="w-1/3 flex flex-row justify-end gap-3">
                <button
                    onClick={() => swiper.slidePrev()}
                    className="relative flex items-center justify-end w-[70px] h-[40px] border border-white hover:border-[#7dc642] rounded-xl overflow-hidden group"
                >
                    <i class="w-full fa-solid fa-arrow-left text-center text-2xl text-white z-10"></i>
                    <div className="absolute bg-[#7dc642] w-0 h-[40px] group-hover:w-full top-0 duration-200"></div>
                </button>
                <button
                    onClick={() => swiper.slideNext()}
                    className="relative flex items-center justify-start w-[70px] h-[40px] border border-white hover:border-[#7dc642] rounded-xl overflow-hidden group"
                >
                    <i class="w-full fa-solid fa-arrow-right text-center text-2xl text-white z-10"></i>
                    <div className="absolute bg-[#7dc642] w-0 h-[40px] group-hover:w-full top-0 duration-200"></div>
                </button>
            </div>
        </div>
    );
}

export default HotDealControl;