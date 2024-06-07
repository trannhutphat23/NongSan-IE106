import React from "react";
import itemImg from '../../assets/image/item.png'
import { Link } from "react-router-dom";

const FarmProduct = ({ value }) => {
    return (
        <>
            {value && (
                <Link
                    to={`/cua-hang/san-pham/${value._id}`}
                    className="border border-[#3e3e3e] p-3 rounded-xl flex flex-col gap-3 pb-3 cursor-pointer shadow-black group hover:border-[#7dc642] hover:shadow-xl duration-200">
                    <div className="w-full border rounded-xl p-1">
                        <img
                            src={value.image}
                            className="w-full scale-110 group-hover:scale-125 duration-200 "
                        />
                    </div>
                    <p className="w-full truncate font-medium text-center">{value.name}</p>
                </Link>
            )}
        </>

    );
}

export default FarmProduct