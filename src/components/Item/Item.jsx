import React, { useContext, useState } from "react";
import item from '../../assets/image/item.png'
import StatusTag from "../Tag/StatusTag";
import ItemTag from "../Tag/ItemTag";
import RouterButton from "../ButtonComponent/RouterButton";
import { Link, useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

const Item = ({ itemColor, value }) => {
    const { setBreadcrumb } = useContext(AppContext)
    const navigate = useNavigate()

    function handleBreadcrumb() {
        const temp = {
            main: "Cửa hàng",
            child: 3
        }

        setBreadcrumb(temp)

        navigate(`/cua-hang/san-pham/${value._id}`)
    }
    const formatNumber = (number) => {
        return new Intl.NumberFormat('de-DE').format(number);
    };
    return (
        <>
            {value && (
                <div
                    onClick={handleBreadcrumb}
                >
                    <div className={`w-ful border border-gray-400 bg-white rounded-lg p-3 hover:bg-${itemColor} group hover:border-none duration-200 cursor-pointer`}>
                        <div className="relative w-full flex items-center justify-center border border-gray-300 rounded-lg mb-5 p-5">
                            {value.image ? (
                                <img
                                    src={value.image}
                                    alt="item"
                                    className="w-full scale-125 group-hover:scale-150 group-hover:brightness-110 duration-300"
                                />
                            ) : (
                                <div className="w-[500px] h-[500px] bg-gray-300 animate-pulse"></div>
                            )}

                        </div>
                        <div className="w-full">
                            <p className="text-lg text-[#3e3e3e] text-left font-bold group-hover:text-white truncate">{value.name}</p>
                            <div className="flex flex-row my-1 gap-2">
                                {value.tag != 0 && (
                                    <ItemTag>
                                        <p className="text-white text-sm font-medium group-hover:text-[#3e3e3e] group-hover:font-semibold">{value.tag}</p>
                                    </ItemTag>
                                )}

                            </div>
                            <div className="flex flex-row items-center justify-between">
                                <div className="flex flex-row items-end gap-1">
                                    <p className="text-xl font-bold text-[#3e3e3e] group-hover:text-white duration-100">{formatNumber(value.price - value.price * value.tag)}đ / {value.unit}</p>
                                    {value.tag != 0 && (
                                        <p className="line-through text-gray-400 text-base font-medium group-hover:text-white">{formatNumber(value.price)}đ/ / {value.unit}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>

    );
}

export default Item;