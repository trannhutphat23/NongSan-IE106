import React, { useState } from "react";

const QuantitySelectionCart = ({ quantity, updateQuantity, limit }) => {

    const [isLimit, setIsLimit] = useState(false)

    function AddQuantity() {
        if (quantity < limit) updateQuantity(quantity + 1)
        if (quantity == limit) setIsLimit(true)
    }

    function MinusQuantity() {
        setIsLimit(false)
        if (quantity > 1) updateQuantity(quantity - 1)
    }

    return (
        <div>
            <div className="w-full flex flex-row items-center gap-3">
                <div className="flex flex-row items-center">
                    <div className="border border-[#3e3e3e] rounded-full p-1 cursor-pointer " onClick={MinusQuantity}>
                        <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" ></path>
                        </svg>
                    </div>
                    <p className="mx-3 font-bold">{quantity}</p>
                    <div className="border border-[#3e3e3e] rounded-full p-1 cursor-pointer " onClick={AddQuantity}>
                        <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>
                    </div>
                </div>
            </div>
            {isLimit && (
                <p className="italic font-medium text-[#fc0307] text-sm">Số lượng tối đa</p>
            )}
        </div>
    );
}

export default QuantitySelectionCart;