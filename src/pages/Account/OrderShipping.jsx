import React, { useEffect, useState } from "react";
import ShippingBox from "./ShippingBox";
import axios from "axios";

const OrderShipping = () => {
    const [userId, setUserId] = useState(null)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        if (localStorage.user){
            const userObj = JSON.parse(localStorage.user)
            setUserId(userObj._id)
        }
    }, [])

    useEffect(() => {
        if (userId){
            axios.get(`http://localhost:8082/orders/users/${userId}`)
                .then((res) => {
                    setOrders(res.data)
                })
                .catch(err => console.log(err))
        }
    }, [userId])
    return (
        <>
                <div
                    className="w-full"
                >
                    <p className="text-4xl font-bold">Theo dõi đơn hàng</p>
                    {orders.length > 0 && (
                    <div className="w-full mt-5 h-full flex flex-col gap-3 overflow-y-scroll scrollable-div">
                        {orders.map((ele, index) => {
                            return (
                                <ShippingBox
                                    key={index}
                                    orderId={ele._id}
                                    orderStatus={ele.paymentStatus}
                                    name={ele.customer.name}
                                    phone={ele.customer.phone}
                                    address={ele.customer.address}
                                    total={ele.total}
                                    items={ele.items}
                                />
                            )
                        })}
                    </div>
                )}  
                {orders.length === 0 && <div className="text-2xl font-medium mt-5 text-gray-500">Không có dữ liệu
                    <i className="fa-solid fa-info-circle ml-1 text-lg"/>
                </div>}
            </div>
        </>
    )
}

export default OrderShipping