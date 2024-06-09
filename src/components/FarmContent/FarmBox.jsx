import React from "react";
import { Link } from "react-router-dom";

const FarmBox = ({ value, onclick }) => {
    return (
        <>
            {value && (
                <Link
                    to={`/trang-trai/${value._id}`}
                    onClick={onclick}
                    className="w-full cursor-pointer group overflow"
                >
                    <div className="overflow-hidden border rounded-xl ">
                        <img
                            src={value.image}
                            alt="image"
                            className="w-full group-hover:scale-110 duration-200"
                        />
                    </div>
                    <div className="w-full flex flex-col items-center">
                        <p className="w-full text-lg font-medium text-center">{value.name}</p>
                        {/* <div className="my-2 w-1/3 border border-[#3e3e3e]"></div>
                        <p className="group-hover:text-green-600 ">{value.info.substring(0, 70)}. . .</p> */}
                    </div>
                </Link>
            )}
        </>

    );
}

export default FarmBox;