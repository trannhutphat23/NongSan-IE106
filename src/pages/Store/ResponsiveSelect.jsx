import React from "react";
import '../../hiddenScroll.css'
import CategorySelect from "./CategorySelect";
import FarmSelect from "./FarmSelect";


const ResponsiveSelect = ({ onclick }) => {
    return (
        <div className="sm:hidden fixed top-0 left-0 z-[90] w-full h-full overflow-hidden overflow-y-scroll scrollable-div">
            <div className="sticky h-auto w-2/3 bg-[#3e3e3e] z-30 p-3 flex flex-row-reverse gap-5 shadow-xl pb-10">
                <div >
                    <i
                        onClick={onclick}
                        class="fa-solid fa-square-xmark h-auto text-4xl text-white  cursor-pointer hover:text-[#ff0000] duration-200"
                    ></i>
                </div>
                <div className="w-full h-full flex flex-col items-start gap-5">
                    <CategorySelect />
                    <FarmSelect />
                </div>
            </div>
        </div>
    );
}

export default ResponsiveSelect;