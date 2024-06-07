import React from "react";

const UseDiscount = () => {
    return (
        <div className="w-full flex flex-col items-center justify-between p-3 border border-[#7dc642] rounded-xl bg-gray-50 cursor-pointer">
            <div className="w-full h-full flex flex-row justify-between">
                <p className="text-xl font-bold text-[#7dc642]">Giảm 50%</p>
                <p className="text-xl font-bold text-[#7dc642]">#abcxyz</p>
            </div>
            <p className="font-medium w-full text-left">Cho hoá đơn trên 100.000đ</p>
        </div>
    );
}

export default UseDiscount;