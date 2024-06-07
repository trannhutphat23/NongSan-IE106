import React from "react";
import farmImg from '../../assets/farm.png'

const FarmBox = ({ onclick, value }) => {
    return (
        <>
            {value && (
                <div
                    onClick={onclick}
                    className="border border-gray-300 rounded-xl cursor-pointer flex justify-center items-center overflow-hidden hover:shadow-xl duration-200 group"
                >
                    {value.image ? (

                        <img
                            src={value.image}
                            className="w-auto group-hover:scale-110 duration-200"
                        />
                    ) : (
                        <div className="w-full border rounded-xl bg-gray-300 animate-pulse p-10">
                            <div className="w-full h-full rounded-full bg-gray-400"></div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}

export default FarmBox;