import React, { useContext, useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import itemImg from '../../assets/image/item.png';
import QuantitySelection from "./QuantitySelection";
import { Link, useParams, useNavigate } from "react-router-dom";
import ItemInfo from "./ItemInfo";
import ItemComment from "./ItemComment";
import clsx from "clsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import RecommentItem from "../../components/RecommentItem/RecommentItem";
import { AppContext } from "../../Context/AppContext";
import axios from "axios";
import { useLocation } from "react-router-dom";

const ItemDetails = () => {
    const { fetchCart } = useContext(AppContext)
    const [item, setItem] = useState()
    const [quantity, setQuantity] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const { getPaymentState } = useContext(AppContext)
    const [userId, setUserId] = useState(null)
    const params = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        if (localStorage.user) {
            const userObj = JSON.parse(localStorage.user)
            setUserId(userObj._id)
        }
        const fetchItem = () => {
            axios.get(`http://localhost:8082/items/${params.name}`)
                .then((res) => {
                    setItem(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        fetchItem()
    }, [params.name])

    const formatNumber = (number) => {
        return new Intl.NumberFormat('de-DE').format(number);
    };

    const addCart = () => {

        if (localStorage.token) {
            setIsLoading(true)
            axios.post('http://localhost:8082/carts', {
                customerId: userId,
                itemId: item._id,
                amount: quantity
            })
                .then(() => {
                    toast.success('Thêm sản phẩm vào giỏ hàng thành công', {
                        position: "top-right",
                        autoClose: 700,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        onClose: () => {
                            fetchCart()
                        }
                    });
                })

                .catch((err) => {
                    console.log(err)
                })
                .finally(() => {
                    setIsLoading(false)
                })

        } else {
            axios.post(`http://localhost:8082/orders/noAccount/${item._id}`, {
                quantity: quantity
            })
                .then((res) => {
                    let cartNoAcc = []
                    let check = false
                    if (localStorage.cartNoAcc) {
                        cartNoAcc = JSON.parse(localStorage.cartNoAcc)

                        cartNoAcc.map((ele) => {
                            if (ele.item._id === res.data.item._id) {
                                ele.quantity += res.data.quantity
                                check = true
                            }
                        })

                        if (check === false) {
                            cartNoAcc.push(res.data)
                        }
                    } else {
                        cartNoAcc.push(res.data)
                    }
                    localStorage.setItem('cartNoAcc', JSON.stringify(cartNoAcc))

                    toast.success('Thêm sản phẩm vào giỏ hàng thành công', {
                        position: "top-right",
                        autoClose: 700,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        onClose: () => {
                            location.reload();
                        }
                    });
                })
                .catch(err => console.log(err))
        }
    }

    const handlePayment = () => {
        const paymentObj = {
            items: [{
                item: item._id,
                image: item.image,
                amount: quantity,
                price: item.price * quantity
            }],
            voucher: null,
            tempPrice: item.price * quantity,
            discount: 0,
            totalPrice: item.price * quantity,
            from: 'product'
        }
        getPaymentState(paymentObj)
        navigate('/thanh-toan')
    }

    return (
        <>
            {item && (
                <div className="w-full h-auto flex flex-col items-center py-5 mb-20">
                    <div className="w-11/12">
                        <div className="w-2/3 mb-10">
                            <Breadcrumb
                                location={location}
                            />
                        </div>
                        <div className="w-11/12 flex flex-row gap-10">
                            <div className="w-1/2 flex items-center justify-center border rounded-xl">
                                <img
                                    src={item.image}
                                    className="w-full"
                                />
                            </div>
                            <div className="w-1/2">
                                <div className="w-full pb-5 mb-5 border-b border-gray-300">
                                    <div className="flex flex-row gap-1">
                                        {item.tag != 0 && (
                                            <p className="text-white text-sm text-center px-2 py-1 bg-[#3e3e3e] rounded-lg cursor-pointer hover:bg-[#7dc642]">-{item.tag}%</p>
                                        )}
                                    </div>
                                    <p className="text-4xl font-bold mt-2 mb-1">{item.name}</p>
                                    <p className="italic text-lg font-medium my-2">{item.unitText}</p>
                                    <p className="font-bold flex flex-row items-center">Trang trại:
                                        <Link className="group">
                                            <div className="ml-1 hover:bg-[#7dc642]  px-2 py-1 rounded-lg">
                                                <p className="font-bold text-[#7dc642] group-hover:text-white">{item.farm}</p>
                                            </div>
                                        </Link>
                                    </p>
                                </div>
                                <div className="w-full">
                                    <div className="w-full flex flex-row items-end gap-3">
                                        <p className="font-bold text-4xl">{formatNumber(item.price - item.price * item.tag)}đ</p>
                                        {item.tag != 0 && (
                                            <p className="text-[16px] font-medium text-gray-500 line-through">{item.price}đ</p>
                                        )}
                                        {item.unit != "" && (
                                            <p className="text-xl font-bold">/{item.unit}</p>
                                        )}
                                    </div>
                                    <div className="w-full">
                                        <p className="font-bold mt-3">Mô tả sản phẩm:</p>
                                        <p className="whitespace-pre-wrap break-words">{item.description}</p>
                                    </div>
                                    <div className="w-full mt-3">
                                        <QuantitySelection
                                            quantity={quantity}
                                            updateQuantity={setQuantity}
                                            limit={item.quantity}
                                        />
                                    </div>
                                    <div className="flex flex-row mt-5 gap-3">
                                        <button className="relative overflow-hidden w-1/3 h-[60px] flex items-center justify-start bg-[#3e3e3e] rounded-xl cursor-pointer  group  duration-700 ease-linear">
                                            <div className="bg-[#7dc642] absolute w-0 h-full rounded-lg group-hover:w-full duration-200"></div>
                                            <p onClick={handlePayment} className="text-lg w-full text-white font-bold z-10">Thanh toán</p>
                                        </button>
                                        <button
                                            onClick={addCart}
                                            className="relative overflow-hidden w-1/3 h-[60px] flex items-center justify-start bg-white border border-[#3e3e3e] rounded-xl cursor-pointer group hover:border-none duration-0">
                                            <div className="bg-[#7dc642] absolute w-0 h-full rounded-lg group-hover:w-full duration-200"></div>
                                            <p className="text-lg w-full text-[#3e3e3e] group-hover:text-white duration-150 font-bold z-10">Thêm vào giỏ</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-11/12 h-auto grid grid-cols-4 mt-20 bg-gray-200 rounded-lg gap-5 py-7 px-5 ">
                        <div className="w-full col-span-3">
                            <div className="flex flex-row gap-3">
                                <p className="text-4xl font-black ">THÔNG TIN SẢN PHẨM</p>
                            </div>
                            <div className="w-full mt-5">
                                <ItemInfo
                                    farm={item.farm}
                                    procedure={item.procedure}
                                    nutrition={item.nutrition}
                                    preservation={item.preservation}
                                />
                            </div>
                        </div>
                        <div className="w-full col-span-1 border-l border-[#3e3e3e] flex flex-col gap-10 pl-3">
                            <div className="flex flex-row p-1 justify-between">
                                <div>
                                    <img className="w-14 h-14" src="http://nongsan.monamedia.net/wp-content/uploads/2023/09/dt-ship-1.svg" alt="" decoding="async" loading="lazy" />
                                </div>
                                <div className="w-2/3 flex flex-col justify-between">
                                    <p className="font-bold text-lg">Cam kết</p>
                                    <p className="text-base font-medium">Nguồn gốc rõ ràng, 100% chính hãng</p>
                                </div>
                            </div>
                            <div className="flex flex-row p-1 justify-between">
                                <div>
                                    <img className="w-14 h-14" src="http://nongsan.monamedia.net/wp-content/uploads/2023/09/dt-ship-2.svg" alt="" decoding="async" loading="lazy" />
                                </div>
                                <div className="w-2/3 flex flex-col justify-between">
                                    <p className="font-bold text-lg">Giao hàng</p>
                                    <p className="text-base font-medium">T2 - CN | 08:00 - 20:00</p>
                                </div>
                            </div>
                            <div className="flex flex-row p-1 justify-between">
                                <div>
                                    <img className="w-14 h-14" src="http://nongsan.monamedia.net/wp-content/uploads/2023/09/dt-ship-3.svg" alt="" decoding="async" loading="lazy" />
                                </div>
                                <div className="w-2/3 flex flex-col justify-between">
                                    <p className="font-bold text-lg">Hỗ trợ 24/7</p>
                                    <p className="text-base font-medium">Với chatbox thông minh, facebook và hotline</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center mt-20">
                        <RecommentItem farm={item.farm} currItem={item._id} />
                        <ToastContainer />
                    </div>
                </div>
            )}

        </>
    );
}

export default ItemDetails;