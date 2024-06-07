import React from "react";
import itemImage from '../../assets/image/item.png';

const RecommentBox = ({image, name, price}) => {
    const formatNumber = (number) => {
        return new Intl.NumberFormat('de-DE').format(number);
    }
    return (
        <div className="w-full p-3 flex flex-row gap-2 cursor-pointer hover:bg-[#3e3e3e] duration-100 group">
            <div className="w-1/4">
                <img
                    src={image}
                    className="group-hover:scale-125 duration-100"
                />
            </div>
            <div className="flex flex-col w-3/4 group-hover:text-white">
                <p className="truncate font-medium">{name}</p>
                <p className="group-hover:text-[#7dc642] font-normal">{formatNumber(price)}đ</p>
            </div>
        </div>
    );
}

export default RecommentBox;