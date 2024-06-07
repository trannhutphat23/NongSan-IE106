import React from "react";

const OrderBox = ({orderId, orderDate, price, status}) => {
    const formatNumber = (number) => {
        return new Intl.NumberFormat('de-DE').format(number);
    };
    const formatDate = (datetime) => {
        const date = new Date(datetime)
        const day = date.getUTCDate()
        const month = date.getUTCMonth() + 1
        const year = date.getUTCFullYear()
        const formattedDay = day < 10 ? '0' + day : day
        const formattedMonth = month < 10 ? '0' + month : month
        const formattedDate = `${formattedDay}/${formattedMonth}/${year}`

        return formattedDate
    }
    return (
        <div
            className="w-full grid grid-cols-4 py-3 px-2 rounded-xl border  hover:border-[#3e3e3e] cursor-pointer hover:bg-gray-200"

        >
            <p className="text-[15px] sm:text-base font-medium text-[#3e3e3e] justify-self-start">#{orderId}</p>
            <p className="text-[15px] sm:text-base font-medium text-[#3e3e3e] justify-self-center">{formatDate(orderDate)}</p>
            <p className="text-[15px] sm:text-base font-medium text-[#3e3e3e] justify-self-center">{formatNumber(price)} đ</p>
            <p className="text-[15px] sm:text-base font-bold text-[#63ff4f] justify-self-end">{status}</p>
        </div>
    );
}

export default OrderBox;