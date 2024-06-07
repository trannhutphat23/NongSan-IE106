import logo from '../../assets/logo.png'
import React from "react";

const WebCard = () => {
    return (
        <>
            <div className="w-full h-full flex flex-col items-center gap-5 border rounded-xl p-5">
                <img
                    src={logo}
                    className="w-1/2 "
                />
                <div className="border-b border-[#bbbbbb] w-3/4"></div>
                <p className="w-full text-white font-bold text-xl mt-5">THÔNG TIN LIÊN HỆ</p>
                <div className="w-full flex flex-row items-center gap-2 sm:gap-3">
                    <div className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] bg-[#7dc642] flex justify-center items-center rounded-full">
                        <i class="fa-solid fa-envelope text-lg lg:text-xl text-white"></i>
                    </div>
                    <div className="h-[40px] lg:h-[50px] flex flex-col justify-between">
                        <p className="text-[15px] font-medium text-white">Email</p>
                        <p className="text-[16px] font-bold text-[#7dc642]">fudee.contact@gmail.com</p>
                    </div>
                </div>
                <div className="w-full flex flex-row items-center gap-2 sm:gap-3">
                    <div className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] bg-[#7dc642] flex justify-center items-center rounded-full">
                        <i class="fa-solid fa-phone text-lg lg:text-xl text-white"></i>
                    </div>
                    <div className="h-[40px] lg:h-[50px] flex flex-col justify-between">
                        <p className="text-[15px] font-medium text-white">Số điện thoại</p>
                        <p className="text-[16px] font-bold text-[#7dc642]">0912725561</p>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center gap-1">
                    <div className="w-full flex flex-row items-center gap-2 sm:gap-3">
                        <div className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] bg-[#7dc642] flex justify-center items-center rounded-full">
                            <i class="fa-solid fa-location-dot text-lg lg:text-xl text-white"></i>
                        </div>
                        <div className="h-[40px] lg:h-[50px] flex flex-col justify-between">
                            <p className="text-[15px] font-medium text-white">Địa chỉ</p>
                            <p className="text-[16px] font-bold text-[#7dc642]">Trường Đại học Công Nghệ Thông Tin</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-row items-center gap-3">
                        <div className="w-[50px]"></div>
                        <a href="https://maps.app.goo.gl/TNkRmH6uTDPtwyL6A" target="_blank"
                            className="text-sm text-white hover:underline italic"
                        >
                            Đường dẫn Google Maps
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WebCard;