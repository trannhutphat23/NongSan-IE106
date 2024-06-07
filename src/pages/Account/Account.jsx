import React, { useState, useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import avt from '../../assets/cmt.jpg'
import clsx from "clsx";
import AccountButton from "./AccountButton";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Account = () => {
    const [select, setSelect] = useState(1)
    const [navSlide, setNavSlide] = useState(false)
    const navigate = useNavigate()
    function Choose(choose) {
        setSelect(choose)
    }

    const handleLogout = () => {
        Choose(5);
        localStorage.removeItem("user")
        localStorage.removeItem("token")

        toast.success("Đăng xuất thành công", {
            position: "top-right",
            autoClose: 700,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            onClose: () => {
                navigate('/trang-chu', {replace: true})
            }
        });
    }
    return (
        <div className="w-full h-auto flex flex-col items-center py-5 mb-20 ">
            <ToastContainer/>
            <div className="w-11/12">
                <div className="w-2/3 mb-5">
                    {/* <Breadcrumb
                        location={"Tài khoản"}
                    /> */}
                </div>
            </div>
            <div className="w-full h-auto bg-transparent flex flex-row justify-between gap-6 p-6 rounded-xl relative">
                <div className="md:w-1/3 h-[100vh] bg-white flex flex-col items-center border border-gray-300 shadow-2xl rounded-lg p-5 pt-10">
                    <div className="w-2/5 flex flex-col gap-3">
                        <img
                            src={avt}
                            className="w-full border-2 border-[#7dc642] rounded-full"
                        />
                        {/* <img
                            src="https://static.vecteezy.com/system/resources/previews/022/014/159/original/avatar-icon-profile-icon-member-login-isolated-vector.jpg"
                            className="w-full rounded-full"
                        /> */}
                    </div>

                    <div className="w-full flex flex-col gap-5 mt-10">
                        <AccountButton
                            icon={"fa-solid fa-user"}
                            name={"Thông tin tài khoản"}
                            position={1}
                            select={select}
                            onclick={() => Choose(1)}
                            path={"/tai-khoan"}
                        />
                        <AccountButton
                            icon={"fa-solid fa-truck-fast"}
                            name={"Theo dõi đơn hàng"}
                            position={3}
                            select={select}
                            onclick={() => Choose(3)}
                            path={"don-hang"}
                        />
                        <AccountButton
                            icon={"fa-solid fa-list"}
                            name={"Lịch sử đơn hàng"}
                            position={2}
                            select={select}
                            onclick={() => Choose(2)}
                            path={"lich-su"}
                        />
                        {/* <AccountButton
                            icon={"fa-solid fa-tag"}
                            name={"Mã giảm giá"}
                            position={4}
                            select={select}
                            onclick={() => Choose(4)}
                        /> */}
                        <AccountButton
                            icon={"fa-solid fa-sign-out"}
                            name={"Đăng xuất"}
                            position={5}
                            select={select}
                            onclick={handleLogout}
                        />
                    </div>
                </div>

                <div className="md:w-2/3 lg:w-3/4 bg-white border border-gray-300 rounded-lg p-7 shadow-xl">
                    <Outlet />
                </div>
            </div>

        </div>
    );
}

export default Account;