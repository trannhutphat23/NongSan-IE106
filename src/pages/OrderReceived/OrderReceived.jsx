import React, { useEffect, useState, useContext } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import axios from "axios";

const OrderReceived = () => {
    const [queryParams, setQueryParams] = useState([])
    const [isSucceeded, setIsSucceeded] = useState(1002)
    const [price, setPrice] = useState(0)
    const [dataBody, setDataBody] = useState({})
    const { fetchCart } = useContext(AppContext)
    const location = useLocation()
    const navigate = useNavigate()
    const payment = () => {
        axios.post('http://localhost:8082/orders', {
            deliveryFee: dataBody.deliveryFee,
            items: dataBody.items,
            voucher: dataBody.voucher,
            customer: dataBody.customer,
            userId: dataBody.userId,
            method: dataBody.method,
            from: dataBody.from,
        })
        .catch((err) =>{
            console.log(err)
        })
    }
    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const params = [];
        query.forEach((value, key) => {
            if (key === 'amount' || key === 'resultCode' || key === 'extraData') {
                params.push(`${key}=${value}`);
            }
        });
        setQueryParams(params);
    }, [location.search]);

    useEffect(() => {
        queryParams.forEach((data) => {
            const [key, value] = data.split('=');
            if (key === 'amount') {
                setPrice(value);
            }
            if (key === 'resultCode') {
                setIsSucceeded(Number(value));
            }
            if (key === 'extraData') {
                const obj = {}
                const pairs = value.split('+');
                pairs.forEach((pair) => {
                    const [key, value] = pair.split('-');
                    try {
                        obj[key] = JSON.parse(value);
                    } catch (e) {
                        obj[key] = value === 'null' ? null : value;
                    }
                });
                setDataBody(obj)
            }
        });
    }, [queryParams]);

    useEffect(() => {
        if (isSucceeded === 0){
            payment()
        }
    }, [dataBody]);

    const shop = () => {
        fetchCart()
        navigate('/cua-hang')
    }

    return (
        <>
            {(isSucceeded === 0) ? (
                <div className="w-full h-auto flex flex-col items-center py-5 mb-20 ">
                    <div className="w-11/12">
                        <div className="w-2/3 mb-5">
                            <Breadcrumb
                                location={"Hoá đơn đã nhận"}
                            />
                        </div>
                        <div className="w-full h-auto border border-gray-300 shadow-xl rounded-xl p-5 py-7">
                            <div className="w-full h-auto  flex flex-row flex-wrap items-center justify-between px-0">
                                <div className="flex flex-row justify-center items-center flex-wrap gap-5">
                                    <div className="w-[200px] h-[200px] flex justify-center items-center relative">
                                        <div className="absolute w-full h-full border flex justify-center items-center rounded-full border-green-700">
                                        </div>
                                        <div className=" absolute w-[150px] h-[150px] animate-pulse  border flex justify-center items-center rounded-full border-green-600">
                                        </div>
                                        <div className=" absolute w-[100px] h-[100px] animate-ping  border flex justify-center items-center rounded-full border-green-600">
                                        </div>
                                        <img
                                            src="http://nongsan.monamedia.net/template/assets/images/ods-icon.svg" alt="payment-successfull"
                                            className=" absolute animate-none w-[100px] h-[100px] p-5 rounded-full bg-green-100"
                                        />
                                    </div>

                                    <div className="w-auto h-3/4  flex flex-col gap-5">
                                        <p className="text-4xl font-bold text-[#7dc642]">Đặt hàng thành công!</p>
                                        <div>
                                            <p>Đơn hàng đã thiết lập thành công.</p>
                                            <p>Chúng tôi sẽ liên lạc trực tiếp với quý khách để xác nhận.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-full w-full md:w-2/5 lg:w-1/4 flex items-center justify-end ">
                                    <div
                                        // to={"/cua-hang"}
                                        onClick={shop}
                                        className="relative bg-[#3e3e3e] w-full h-[50px] border border-white hover:border-[#7dc642] rounded-xl flex items-center group overflow-hidden mt-5"
                                    >
                                        <div className="bg-[#7dc642] absolute w-0 h-full rounded-lg group-hover:w-full duration-300"></div>
                                        <p className="text-lg text-center w-full text-white font-bold z-10">Tiếp tục mua sắm</p>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="w-full h-auto flex flex-col lg:flex-row items-start justify-between flex-wrap gap-5  border-t mt-5 pt-5 border-gray-300">

                                <div className="w-full lg:w-auto h-full">
                                    <p className="text-2xl font-bold mb-5">Tóm tắt đơn hàng</p>
                                    <div className="w-auto">
                                        <div className="grid grid-cols-3">
                                            <p className="justify-self-start  text-gray-500">Mã đơn hàng</p>
                                            <p className="justify-self-center text-gray-500">Ngày mua hàng</p>
                                            <p className="justify-self-end  text-gray-500">Tổng tiền</p>
                                        </div>
                                        <div className="grid grid-cols-3">
                                            <p className="justify-self-start font-bold">934</p>
                                            <p className="justify-self-center font-bold">13/04/2023</p>
                                            <p className="justify-self-end font-bold">500.000đ</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full lg:w-auto h-full flex flex-col sm:flex-row  justify-between gap-5 ">
                                    <div className="w-auto">
                                        <p className="text-2xl font-bold mb-5">Thông tin chuyển khoản</p>
                                        <div className="w-full flex flex-row justify-between gap-5">
                                            <div>
                                                <img src="http://nongsan.monamedia.net/wp-content/uploads/2023/09/img-vcb.png" />
                                            </div>
                                            <div>
                                                <div className="grid grid-cols-2">
                                                    <p className="justify-self-center  text-gray-500">Chủ tài khoản</p>
                                                    <p className="justify-self-end  text-gray-500">Số tài khoản</p>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <p className="justify-self-center font-bold">PHAM NGOC QUI</p>
                                                    <p className="justify-self-end font-bold">123456789</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/5">
                                        <img
                                            src="http://nongsan.monamedia.net/wp-content/uploads/2023/09/qr-code.jpg"
                                        />
                                    </div>
                                </div>

                                <div className="w-auto h-full ">
                                    <p className="text-2xl font-bold mb-5 invisible">Tóm tắt đơn hàng</p>
                                    <p className="text-gray-500">Phương thức thanh toán</p>
                                    <p className="font-bold ">Chuyển khoản ngân hàng</p>
                                </div>

                            </div> */}
                        </div>
                    </div>
                </div>
            )
            :
            <div className="w-full h-auto flex flex-col items-center py-5 mb-20 ">
                <div className="w-11/12">
                    <div className="w-2/3 mb-5">
                        <Breadcrumb
                            location={"Hoá đơn đã nhận"}
                        />
                    </div>
                    <div className="w-full h-auto border border-gray-300 shadow-xl rounded-xl p-5 py-7">
                        <div className="w-full h-auto  flex flex-row flex-wrap items-center justify-between px-0">
                            <div className="flex flex-row justify-center items-center flex-wrap gap-5">
                                <div className="w-[200px] h-[200px] flex justify-center items-center relative">
                                    <div className="absolute w-full h-full border flex justify-center items-center rounded-full border-red-700">
                                    </div>
                                    <div className=" absolute w-[150px] h-[150px] animate-pulse  border flex justify-center items-center rounded-full border-red-600">
                                    </div>
                                    <div className=" absolute w-[100px] h-[100px] animate-ping  border flex justify-center items-center rounded-full border-red-600">
                                    </div>
                                    <img
                                        src="https://res.cloudinary.com/djbelaeen/image/upload/v1717315805/test/close_agngs0.png" alt="payment-successfull"
                                        className=" absolute animate-none w-[100px] h-[100px] p-5 rounded-full bg-red-100"
                                    />
                                </div>

                                <div className="w-auto h-3/4  flex flex-col gap-5">
                                    <p className="text-4xl font-bold text-red-500">Đặt hàng thất bại!</p>
                                    <div>
                                        <p>Đơn hàng thiết lập thất bại.</p>
                                        <p>Vui lòng thử lại hoặc liên hệ với bộ phận hỗ trợ khách hàng.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="h-full w-full md:w-2/5 lg:w-1/4 flex items-center justify-end ">
                                <Link
                                    to={"/cua-hang"}
                                    className="relative bg-[#3e3e3e] w-full h-[50px] border border-white hover:border-[#7dc642] rounded-xl flex items-center group overflow-hidden mt-5"
                                >
                                    <div className="bg-[#7dc642] absolute w-0 h-full rounded-lg group-hover:w-full duration-300"></div>
                                    <p className="text-lg text-center w-full text-white font-bold z-10">Quay lại</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
            
        </>
    );
}

export default OrderReceived;
