import React, { useState } from "react";

const QuantitySelectionCart = ({ quantity, updateQuantity, unit, limit }) => {

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
                    <p className="mx-3 font-bold">{quantity} {unit}</p>
                </div>
            </div>
            {isLimit && (
                <p className="italic font-medium text-[#fc0307] text-sm">Số lượng tối đa</p>
            )}
        </div>
    );
}

export default QuantitySelectionCart;