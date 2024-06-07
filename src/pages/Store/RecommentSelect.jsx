import React, { useContext } from "react";
import RecommentBox from "./RecommentBox";
import { AppContext } from "../../Context/AppContext";

const RecommentSelect = () => {
    const {items} = useContext(AppContext)
    return (
        <div className="w-full flex flex-col border border-gray-300 rounded-t-xl overflow-hidden">
            <p className="w-full bg-[#7dc642] py-3 text-base font-bold text-white text-center">SẢN PHẨM</p>
            <div className="w-full">
            {items.map((ele, index) => {
                if (index <= 5) {
                    return (
                        <RecommentBox 
                            image={ele.image}
                            name={ele.name}
                            price={ele.price}
                        />
                    )
                }
            })}
            </div>
        </div>
    );
}

export default RecommentSelect;