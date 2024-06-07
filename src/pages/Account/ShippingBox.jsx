import React from "react";
import itemImg from '../../assets/image/item.png'

const ShippingBox = ({orderId, orderStatus, name, phone, address, total, items}) => {
    const formatNumber = (number) => {
        return new Intl.NumberFormat('de-DE').format(number);
    }
    return (
        <div className="w-full h-auto border border-gray-500 bg-gray-50 rounded-md p-5">
            {/* mã đơn hàng / thông tin (địa chỉ, tên, đt,..), hình thức thanh toán, trang thái thanh toán,
                trạng thái đơn hàng, danh sách sản phẩm, dự kiến giao hàng,
             */}
            <p className="w-full flex justify-between text-lg font-medium">Mã đơn hàng: <span>{orderId}</span></p>
            <p className="w-full flex justify-between text-lg font-medium">Hình thức thanh toán: <span>Tiền mặt</span></p>
            <p className="w-full flex justify-between text-lg font-medium">Trạng thái đơn hàng: <span>{orderStatus}</span></p>
            <div className="bg-gray-200 p-3 rounded-md my-3">
                <p className="text-xl font-bold">Thông tin đặt hàng</p>
                <p className="w-full flex justify-between font-medium">Họ tên: <span>{name}</span></p>
                <p className="w-full flex justify-between font-medium">Số điện thoại: <span>{phone}</span></p>
                <p className="w-full flex justify-between font-medium">Địa chỉ: <span>{address}</span></p>
            </div>
            <div className="bg-gray-200 p-3 rounded-md">
                <div className="flex flex-row items-center justify-between mb-5">
                    <p className="text-xl font-bold">Thông tin giỏ hàng</p>
                    <p className="text-xl font-bold text-[#69a737]"><i class="fa-solid fa-money-bill"></i> {formatNumber(total)}đ</p>
                </div>
                {items.map((ele, index) => {
                    return (
                        <div key={index} className="flex flex-row gap-3 mb-5">
                            <img
                                src={ele.item.image}
                                className="w-[80px] border border-[#3e3e3e] p-2 rounded-md"
                            />
                            <div className="w-full flex flex-row items-start justify-between">
                                <div>
                                    <p className="text-lg font-bold">{ele.item.name}</p>
                                    <p>Số lượng: {ele.amount}</p>
                                </div>
                                <p className="text-lg font-bold">{formatNumber(ele.item.price)}đ</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ShippingBox