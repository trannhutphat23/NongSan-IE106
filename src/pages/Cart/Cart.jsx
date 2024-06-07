import React, { useContext, useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import CartItem from "./CartItem";
import UseDiscount from "./UseDiscount";
import RouterButton from "../../components/ButtonComponent/RouterButton";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import axios from "axios";

const Cart = () => {
    const { cart, order, setOrder, getPaymentState } = useContext(AppContext)
    const [total, setTotal] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [voucherSelect, setVoucherSelect] = useState(null)
    const [cartNoAcc, setCartNoAcc] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        if (cart.length !== 0) {
            const total = cart.reduce((acc, item) => {
                const totalPrice = item.item.price - item.item.price * item.item.tag;
                return acc + totalPrice * item.amount;
            }, 0)
            setTotal(total)
        } else {
            if (localStorage.cartNoAcc) {
                const cartNoAccount = JSON.parse(localStorage.cartNoAcc)
                setCartNoAcc(cartNoAccount)
            }
        }
    }, [cart])

    const formatNumber = (number) => {
        return new Intl.NumberFormat('de-DE').format(number);
    };

    const handleChange = (e) => {
        const discountVal = e.target.value
        if (discountVal === "") {
            setDiscount(0)
            return
        }
        axios.get(`http://localhost:8082/vouchers/${discountVal}`)
            .then((res) => {
                if (res.data) {
                    if (res.data.message === "Voucher don't exist") {
                        setDiscount(0)
                        return
                    }
                    setVoucherSelect(res.data._id)
                    setDiscount((total >= res.data.conditionValue) ? (total - ((total * res.data.percent) / 100)) : 0)
                }
            })
            .catch((err) => {
                console.error(err);
                setDiscount(0);
            });
    }

    const makeOrder = () => {
        const price = total - discount
        const paymentObj = {
            items: cart,
            voucher: voucherSelect,
            tempPrice: total,
            discount: discount,
            totalPrice: price,
            from: 'cart'
        }
        getPaymentState(paymentObj)
        navigate('/thanh-toan')
    }
    return (
        <div className="w-full h-auto flex flex-col items-center py-5 mb-20 ">
            <div className="w-11/12">
                <div className="w-2/3 mb-5">
                    {/* <Breadcrumb
                        location={"Giỏ hàng"}
                    /> */}
                </div>
                <div className="w-full border border-gray-300 shadow-2xl flex items-center justify-center p-7 rounded-xl ">
                    <div className="w-full  h-full flex flex-row gap-7">
                        <div className="w-2/3">
                            <div className="flex flex-row justify-between items-center w-full mb-10">
                                <p className="text-4xl font-bold">Giỏ hàng</p>
                                <p className="text-[#3e3e3e] font-bold">({localStorage.token ? cart.length : cartNoAcc.length} sản phẩm)</p>
                            </div>
                            <div className="w-full flex flex-row ">
                                <div className="w-1/12"></div>
                                <p className="w-11/12 md:w-7/12 text-lg font-bold text-[#7dc642]">Sản phẩm</p>
                                <p className="w-2/12 text-lg text-center font-bold text-[#7dc642] md:block hidden">Số lượng</p>
                                <p className="w-2/12 text-lg text-end font-bold text-[#7dc642] md:block hidden">Thành tiền</p>
                            </div>
                            <div className="w-full">
                                {cart.length !== 0 && cart.map((value, index) => {
                                    return (
                                        <CartItem
                                            key={index}
                                            value={value}
                                        />
                                    )
                                })}
                                {cart.length === 0 && cartNoAcc.map((value, index) => {
                                    return (
                                        <CartItem
                                            key={index}
                                            value={value}
                                        />
                                    )
                                })}
                            </div>

                            <div className="w-full hidden h-auto mt-10 sm:mt-5 flex flex-col sm:flex-row sm:items-start items-center justify-between gap-10 md:gap-5">
                                <div className="w-10/12 hidden h-full sm:w-1/2 md:w-2/5 grid grid-cols-1 ">
                                    <div className="w-full">
                                        <p className="text-xl text-left font-bold mb-3 pb-3 border-b">Ưu đãi & giảm giá</p>
                                        <div className="relative w-full flex items-center gap-3">
                                            <input
                                                type="text"
                                                className="w-full h-[45px] pr-[35%] pl-3  border border-[#3e3e3e] rounded-xl focus:ring-[#7dc642] focus:outline-[#7dc642]"
                                            />
                                            <button className="absolute right-0 w-1/3 h-[45px] rounded-xl hover:border-[#7dc642] hover:bg-[#7dc642] group">
                                                <p className="font-medium group-hover:text-white">Áp dụng</p>
                                            </button>
                                        </div>
                                        <div className="w-full flex items-end justify-end">
                                            <p className="w-auto text-right font-medium mt-3 hover:text-[#7dc642] cursor-pointer">Mã giảm giá có sẳn</p>
                                        </div>
                                    </div>
                                    <div className="w-full hidden sm:grid grid-cols-1 gap-3 mt-10">
                                        <UseDiscount />
                                        <UseDiscount />
                                    </div>
                                </div>


                                <div className="w-10/12 sm:w-1/2 md:w-2/5  flex flex-col justify-between items-center">
                                    <div className="w-full pb-5 border-b-2 border-[#3e3e3e]">
                                        <div className="flex flex-row justify-between items-end gap-3 mb-3">
                                            <p className="text-base font-bold">Mã giảm giá:</p>
                                            <p className="text-lg font-bold text-[#ff0000]">-500.000đ</p>
                                        </div>
                                        <div className="w-full flex flex-row justify-between items-end gap-3">
                                            <p className="text-xl font-bold">Tạm tính:</p>
                                            <p className="text-3xl font-bold text-[#7dc642]">500.000đ</p>
                                        </div>
                                    </div>
                                    <div className="w-full sm:hidden grid grid-cols-1 gap-3 mt-5">
                                        <UseDiscount />
                                        <UseDiscount />
                                    </div>
                                    <div className="w-4/5 flex flex-row mt-20 cursor-pointer">
                                        <Link
                                            to={"/thanh-toan"}
                                            className="relative bg-[#3e3e3e] w-full h-[50px] rounded-xl flex items-center group overflow-hidden"
                                        >
                                            <div className="bg-[#7dc642] absolute w-0 h-full rounded-lg group-hover:w-full duration-300"></div>
                                            <p className="text-lg text-center w-full text-white font-bold z-10">Đặt hàng</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/3 h-[500px] flex flex-col justify-between bg-gray-100 rounded-lg p-5 py-7">
                            <div className="w-full flex flex-col gap-5">
                                <div className="w-full flex flex-row justify-between text-lg font-medium border-b border-gray-500 pb-3 mb-3">
                                    <p>Tạm tính:</p>
                                    <p>{formatNumber(total)}đ</p>
                                </div>
                                <div className="text-lg font-medium">
                                    <p className="mb-2">Mã giảm giá:</p>
                                    <input
                                        type="text"
                                        placeholder="#"
                                        onChange={(e) => handleChange(e)}
                                        className="w-full border border-[#3e3e3e] p-2 mb-3 rounded-md"
                                    />
                                    {discount != 0 && (
                                        <div className="w-full flex flex-row justify-between text-lg font-medium border-b border-gray-500 pb-3 mb-3">
                                            <p>Tiền giảm:</p>
                                            <p>{formatNumber(discount)}đ</p>
                                        </div>
                                    )}
                                </div>
                                <div className="w-full mt-5 flex flex-row justify-between text-2xl font-bold border-b border-gray-500 pb-3 mb-3">
                                    <p>TỔNG TIỀN:</p>
                                    <p>{formatNumber(total - discount)}đ</p>
                                </div>
                            </div>
                            <div className="w-full flex flex-row justify-center">
                                <div
                                    onClick={makeOrder}
                                    className="relative bg-[#3e3e3e] w-4/5 h-[50px] rounded-xl flex items-center group overflow-hidden cursor-pointer"
                                >
                                    <div className="bg-[#7dc642] absolute w-0 h-full rounded-lg group-hover:w-full duration-300"></div>
                                    <p className="text-lg text-center w-full text-white font-bold z-10">Đặt hàng</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full border-l pl-5 ml-5 hidden">
                            <div className="w-10/12">
                                <p className="text-3xl text-center font-bold mb-5">Ưu đãi & giảm giá</p>
                                <div className="w-full flex items-center gap-3 ">
                                    <input
                                        type="text"
                                        className="w-full h-[45px] pl-3 border border-[#3e3e3e] rounded-xl focus:ring-[#7dc642] focus:outline-[#7dc642]"
                                    />
                                    <button className="w-2/5 h-[45px] border border-[#3e3e3e] rounded-xl hover:border-[#7dc642] hover:bg-[#7dc642] group">
                                        <p className="font-medium group-hover:text-white">Áp dụng</p>
                                    </button>
                                </div>
                                <p className=" font-medium mt-3 hover:text-[#7dc642] cursor-pointer">Mã giảm giá có sẳn</p>
                                <div className="w-full flex flex-row justify-center mt-5">
                                    <button className="relative bg-white w-3/5 h-[50px] border border-[#3e3e3e] hover:border-[#7dc642] duration-300 ease-out rounded-xl flex items-center group overflow-hidden">
                                        <div className="bg-[#7dc642] absolute w-0 h-full rounded-lg group-hover:w-full duration-300"></div>
                                        <p className="text-lg text-center w-full text-[#3e3e3e] group-hover:text-white font-bold z-10 duration-300">Cập nhật đơn hàng</p>
                                    </button>
                                </div>
                                <div className="mt-3 flex flex-col gap-3">
                                    <UseDiscount />
                                    <UseDiscount />
                                    <UseDiscount />
                                    <UseDiscount />
                                    <UseDiscount />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;