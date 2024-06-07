import clsx from "clsx";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
    const [showPassrword, setShowPassword] = useState(false)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [isMatch, setIsMatch] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const { email } = location.state || {};
    useEffect(() => {
        setIsMatch(password === confirmPassword);
    }, [password, confirmPassword])

    const notifyError = (message) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 700,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const notifySuccess = (message) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 700,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            onClose: () => {
                navigate('/dang-nhap')
            }
        });
    }

    const handleClick = () => {
        if (!password){
            notifyError("Vui lòng nhập mật khẩu")
            return
        }
        if (!confirmPassword){
            notifyError("Vui lòng xác nhận lại mật khẩu")
            return
        }
        if (!isMatch){
            notifyError("Mật khẩu xác nhận không khớp")
            return
        }
        axios.put('http://localhost:8082/password/change', {
            email: email,
            newPassword: password
        })
        .then((res) => {
            if (res.data.message === 'User don\'t exist'){
                notifyError("Email hoặc số điện thoại không tồn tại")
                return
            }
            if (res.data.message === 'Password updated successfully'){
                notifySuccess("Cập nhật mật khẩu thành công")
            }
        })
        .catch(err => console.log(err))
    }
    return (
        <div className="w-full lg:w-3/5 h-[90vh] flex flex-col items-center lg:items-start pb-10">
            <ToastContainer/>
            <p className="text-4xl font-bold text-[#7dc642]">Quên mật khẩu</p>
            <div className="w-full h-auto py-10 lg:w-10/12">
                <div className="w-full mb-1">
                    <p className="font-medium mb-2">Mật khẩu mới</p>
                    <div className="relative flex items-center">
                        <input
                            type={showPassrword ? "text" : "password"}
                            placeholder="Mật khẩu"
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full h-[50px] border border-[#3e3e3e] pl-3 font-medium rounded-lg focus:ring-[#7dc642] focus:outline-[#7dc642]"
                        />
                        <i
                            onClick={() => setShowPassword(!showPassrword)}
                            className={clsx({
                                "fa-solid fa-eye text-lg cursor-pointer absolute right-5": showPassrword,
                                "fa-solid fa-eye-slash text-lg cursor-pointer absolute right-5": !showPassrword
                            })}
                        ></i>
                    </div>
                    <p className="text-sm italic w-full text-end text-[#ff4343] invisible ">Vui lòng nhập thông tin</p>
                </div>
                <div className="w-full mb-1">
                    <p className="font-medium mb-2">Xác nhận mật khẩu mới</p>
                    <div className="relative flex items-center">
                        <input
                            type={showPassrword ? "text" : "password"}
                            placeholder="Nhập lại mật khẩu"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full h-[50px] border border-[#3e3e3e] pl-3 font-medium rounded-lg focus:ring-[#7dc642] focus:outline-[#7dc642]"
                        />
                        <i
                            onClick={() => setShowPassword(!showPassrword)}
                            className={clsx({
                                "fa-solid fa-eye text-lg cursor-pointer absolute right-5": showPassrword,
                                "fa-solid fa-eye-slash text-lg cursor-pointer absolute right-5": !showPassrword
                            })}
                        ></i>
                    </div>
                    <p className="text-sm italic w-full text-end text-[#ff4343] invisible ">Mật khẩu xác nhận không khớp</p>
                </div>

                <div className="w-full flex flex-row justify-between items-center">
                    <button onClick={handleClick} className="relative w-1/3 overflow-hidden h-[50px] flex items-center justify-start bg-[#3e3e3e] rounded-xl cursor-pointer  group  duration-700 ease-linear">
                        <div className="bg-[#7dc642] absolute w-0 h-full rounded-lg group-hover:w-full duration-200"></div>
                        <p className="text-lg w-full text-white font-bold z-10">
                            Lấy lại mật khẩu
                        </p>
                    </button>
                </div>
            </div>
            <p className="font-medium w-10/12 text-center mt-3">
                Bạn chưa có tài khoản?
                <Link
                    to={"/dang-nhap/dang-ky"}
                >
                    <span className="inline-block font-bold hover:text-[#7dc642] duration-150 cursor-pointer ml-1 mr-2">Đăng ký ngay.</span>
                </Link>
                Hoặc
                <Link
                    to={"/dang-nhap"}
                >
                    <span className="font-bold hover:text-[#7dc642] duration-150 cursor-pointer ml-1">Đăng nhập</span>
                </Link>
            </p>
        </div>
    );
}

export default ResetPassword;