import React from "react";
import DiscountBox from "./DiscountBox";
import clsx from "clsx";

const Discount = ({ position, select }) => {
    return (
        <div
            // className="w-11/12"
            className={clsx({
                "w-full lg:w-11/12": position == select,
                "hidden": position !== select,
            })}
        >
            <p className="text-4xl font-bold">Mã giảm giá</p>
            <div className="mt-5 h-[70vh] flex flex-col gap-3 ">
                <div className="w-full h-full flex flex-col gap-3 overflow-y-scroll scrollable-div">
                    <DiscountBox />
                    <DiscountBox />
                    <DiscountBox />
                    <DiscountBox />
                    <DiscountBox />
                    <DiscountBox />
                    <DiscountBox />
                    <DiscountBox />
                </div>
            </div>
        </div>
    );
}

export default Discount;