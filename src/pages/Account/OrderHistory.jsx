import React, { useEffect, useState } from "react";
import clsx from "clsx";
import OrderBox from "./OrderBox";
import '../../hiddenScroll.css'
import axios from "axios";

const OrderHistory = () => {
    const [listHistory, setListHostory] = useState([])
    const [listSearch, setListSearch] = useState([])
    const [userId, setUserId] = useState(null)
    const [search, setSearch] = useState("")
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
                    setListHostory(res.data)
                    setListSearch(res.data)
                })
                .catch(err => console.log(err))
        }
    }, [userId])

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
    const handleSearch = () => {
        if (search !== "") {
            const filteredList = listHistory.filter((order) => {
                const searchValue = search.toLowerCase()
                return Object.entries(order).some(([key, value]) => {
                    if (key === 'createdAt'){
                        return formatDate(value).includes(searchValue)
                    }
                    if (key === 'total'){
                        return formatNumber(value).toString().includes(searchValue) || value.toString().includes(searchValue)
                    }
                    if (typeof value === 'string') {
                        return value.toLowerCase().includes(searchValue)
                    }
                    return false
                })
            });
            setListSearch(filteredList);
        }else{
            setListSearch(listHistory)
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }
    return (
        <>
            {userId && <div
                className="w-full h-full"
            >
                <p className="text-4xl font-bold">Lịch sử đơn hàng</p>
                <div className="relative h-[50px] w-full flex flex-row items-center mt-5">
                    <input
                        type="text"
                        placeholder="Nhập từ khoá tìm kiếm..."
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="w-full h-full pl-5 border border-[#3e3e3e] rounded-xl focus:ring-[#7dc642] focus:outline-[#7dc642]"
                    />
                    <i onClick={handleSearch} class="fa-solid fa-magnifying-glass absolute mr-5 right-0 text-xl text-[#7dc642] cursor-pointer"></i>
                </div>
                <div className="mt-5 h-full flex flex-col gap-3 ">
                    <div className="w-full grid grid-cols-4 pb-3  border-b border-gray-300">
                        <p className="text-sm sm:text-base font-bold justify-self-start">Mã đơn hàng</p>
                        <p className="text-sm sm:text-base font-bold justify-self-center">Ngày đặt hàng</p>
                        <p className="text-sm sm:text-base font-bold justify-self-center">Tổng tiền</p>
                        <p className="text-sm sm:text-base font-bold justify-self-end">Trạng thái</p>
                    </div>
                    <div className="w-full h-[60vh] flex flex-col gap-3 overflow-y-scroll scrollable-div">
                        {listSearch.map((ele, index) => {
                            return (
                                <OrderBox 
                                    key={index}
                                    orderId={ele._id} 
                                    orderDate={ele.createdAt}
                                    price={ele.total}
                                    status={ele.deliveryStatus}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
            }
        </>
    );
}

export default OrderHistory;