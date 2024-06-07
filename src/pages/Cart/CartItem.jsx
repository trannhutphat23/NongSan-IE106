import React, { useState, useContext, useEffect } from "react";
import itemImg from '../../assets/image/item.png'
import QuantitySelectionCart from "./QuantitySelecotionCart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import BeatLoader from "react-spinners/BeatLoader";
import { AppContext } from "../../Context/AppContext";
import DialogForm from "../../components/Dialog/DialogForm"
import axios from "axios";

const CartItem = ({ value }) => {
    const [quantity, setQuantity] = useState(value.amount)
    const [isLoading, setIsLoading] = useState(false)
    const [userId, setUserId] = useState(null)
    const { fetchCart } = useContext(AppContext)
    const [dialogVisible, setDialogVisible] = useState(false);
    // const [cartNoAcc, getCartNoAcc] = useState({})
    const formatNumber = (number) => {
        return new Intl.NumberFormat('de-DE').format(number);
    };
    // console.log(cartNoAcc)
    useEffect(() => {
        if (localStorage.user){
            const userObj = JSON.parse(localStorage.user)
            setUserId(userObj._id)
        }
    }, [])
    const deleteItem = () => {
        if (localStorage.token){
            setIsLoading(true)
            axios.delete(`http://localhost:8082/carts/665995e6c747351b4d9a709b?customerId=${userId}&itemId=${value._id}`)
                .then(() => {
                    toast.success('Xóa sản phẩm trong giỏ hàng thành công', {
                        position: "top-right",
                        autoClose: 700,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        onClose: async () => {
                            await fetchCart()
                        }
                    });
                })
                .catch((err) => {
                    console.log(err)
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }else{
            axios.delete(`http://localhost:8082/ordersAnonymus?itemId=${value.item._id}&amount=${value.amount}`)
            .then((res) => {
                let cartNoAcc = []
                let check = false
                let recordIndex = -1
                if (localStorage.cartNoAcc){
                    cartNoAcc = JSON.parse(localStorage.cartNoAcc)
                    cartNoAcc.map((ele, index) => {
                        console.log(ele)
                        console.log(res.data)
                        if (ele.item._id === res.data.item._id) {
                            ele.amount -= res.data.amount
                            if (ele.amount <= 0) {
                                check = true
                                recordIndex = index
                            }
                        }
                    })
                    if (check) {
                        cartNoAcc.splice(recordIndex, 1)
                    }
                }
                console.log(cartNoAcc)
                localStorage.setItem('cartNoAcc', JSON.stringify(cartNoAcc))

                toast.success('Xóa sản phẩm thành công', {
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
            .catch(err => console.error(err))
        }
    }

    const handleDialogResponse = (confirmed) => {
        setDialogVisible(false);
        if (confirmed) {
            deleteItem();
        }
    };
    return (
        <>
            {isLoading == false ?
                value && (
                    <div className="w-full flex flex-row mt-3 pt-3 border-t border-gray-300">
                        <ToastContainer />
                        <div className="w-1/12 flex items-center justify-center">
                            <i className="fa-solid fa-xmark-circle cursor-pointer hover:text-[#fc0307]"
                                onClick={() => setDialogVisible(true)}></i>
                        </div>
                        <div className="w-11/12 md:w-7/12 flex flex-row gap-3">
                            <img
                                src={value.item.image}
                                className="w-[100px] h-[100px] border rounded-xl p-2"
                            />
                            <div className="h-full flex flex-col justify-between  w-full md:w-auto ">
                                <div className="w-full">
                                    <p className="text-xl font-semibold truncate">{value.item.name}</p>
                                    <p className="mt-1 font-medium text-gray-500">{formatNumber(value.item.price - value.item.price * value.item.tag)}đ</p>
                                </div>
                                <div className="w-full flex flex-row justify-between items-center  md:hidden">
                                    <QuantitySelectionCart
                                        quantity={quantity}
                                        updateQuantity={setQuantity}
                                        limit={20}
                                    />
                                    <p className="w-auto text-end font-medium text-[17px]">{formatNumber(value.price)}đ</p>

                                </div>
                            </div>
                        </div>
                        <div className="w-2/12 md:flex justify-center hidden">
                            <QuantitySelectionCart
                                quantity={quantity}
                                updateQuantity={setQuantity}
                                limit={20}
                            />
                        </div>
                        <p className="w-2/12 text-end font-medium text-[17px] md:block hidden">{localStorage.token ? formatNumber(value.price) : (formatNumber(value.amount*value.item.price))}đ</p>
                        {dialogVisible && <DialogForm onDialog={handleDialogResponse} />}
                    </div>
                )
                :
                <div className="flex justify-center items-center h-[250px]">
                    <BeatLoader
                        color={"#36d7b7"}
                        size={30}
                    />
                </div>
            }
        </>
    );
}

export default CartItem;