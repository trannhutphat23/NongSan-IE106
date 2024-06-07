import React from "react";

const DiscountBox = () => {
    return (
        <div className="w-full h-auto md:h-[120px] flex flex-row items-center justify-between p-3 border border-[#7dc642] rounded-xl bg-gray-50 cursor-pointer">
            <div className="w-3/5 h-full flex flex-col justify-between">
                <div>
                    <p className="text-2xl font-bold text-[#7dc642]">Giảm 50%</p>
                    <p className="font-medium">Cho hoá đơn trên 100.000đ</p>
                </div>
                <p className="font-medium ">Thời hạn hết ngày: <span className="font-medium text-[#ff4949]">15/03/2021</span></p>
                <div className="w-full sm:hidden flex flex-row items-center gap-2 mt-5">
                    <button className="border px-3 py-2 rounded-xl border-[#3e3e3e]  hover:bg-[#7dc642] hover:border-[#7dc642] duration-150 group">
                        <p className="font-bold  group-hover:text-white">Sao chép</p>
                    </button>
                    <button className="border px-3 py-2 rounded-xl border-[#3e3e3e] bg-[#3e3e3e] hover:bg-[#7dc642] hover:border-[#7dc642] duration-150">
                        <p className="font-bold text-white">Sử dụng</p>
                    </button>
                </div>
            </div>
            <div className="w-2/5 h-full flex flex-col justify-between items-end">
                <p className="text-2xl font-bold text-[#7dc642]">#abcxyz</p>
                <div className="w-full hidden sm:flex flex-row justify-end items-center gap-2">
                    <button className="border px-3 py-2 rounded-xl border-[#3e3e3e]  hover:bg-[#7dc642] hover:border-[#7dc642] duration-150 group">
                        <p className="font-bold  group-hover:text-white">Sao chép</p>
                    </button>
                    <button className="border px-3 py-2 rounded-xl border-[#3e3e3e] bg-[#3e3e3e] hover:bg-[#7dc642] hover:border-[#7dc642] duration-150">
                        <p className="font-bold text-white">Sử dụng</p>
                    </button>
                </div>
            </div>

        </div>
    );
}

export default DiscountBox;