import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
    const [showPassrword, setShowPassword] = useState(false)
    const [emailPhone, setEmailPhone] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [isMatch, setIsMatch] = useState(false)
    const navigate = useNavigate()
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

    const handleSignUp = () => {
        if (!emailPhone){
            notifyError("Vui lòng nhập email hoặc số điện thoại")
            return
        }
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

        axios.post('http://localhost:8082/signup', {
            email: emailPhone,
            password: password
        })
        .then((res) => {
            if (res.data.message === 'User already exists'){
                notifyError("Email hoặc số điện thoại đã được dăng ký")
                return
            }else{
                notifySuccess("Đăng ký thành công")
            }
        })
        .catch(err => console.log(err))
    }
    return (
        <div className="w-full lg:w-3/5 h-auto flex flex-col items-center lg:items-start">
            <ToastContainer/>
            <p className="text-4xl font-bold text-[#7dc642]">Đăng ký</p>
            <div className="w-full h-auto pt-10 pb-5 lg:w-10/12">
                <div className="w-full mb-1">
                    <p className="font-medium mb-2">Email/Số điện thoại</p>
                    <input
                        type="text"
                        placeholder="Email/Số điện thoại"
                        onChange={(e) => setEmailPhone(e.target.value)}
                        className="w-full h-[50px] border border-[#3e3e3e] pl-3 font-medium rounded-lg focus:ring-[#7dc642] focus:outline-[#7dc642]"
                    />
                    <p className="text-sm italic w-full text-end text-[#ff4343] invisible ">Vui lòng nhập thông tin</p>
                </div>
                <div className="w-full mb-1">
                    <p className="font-medium mb-2">Mật khẩu</p>
                    <div className="relative flex items-center">
                        <input
                            type={showPassrword ? "text" : "password"}
                            placeholder="Mật khẩu"
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full h-[50px] border border-[#3e3e3e] pl-3 font-medium rounded-lg focus:ring-[#7dc642] focus:outline-[#7dc642]"
                        />
                        <i
                            // class="fa-solid fa-eye text-xl cursor-pointer absolute right-5"
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
                    <p className="font-medium mb-2">Nhập lại mật khẩu</p>
                    <div className="relative flex items-center">
                        <input
                            type={showPassrword ? "text" : "password"}
                            placeholder="Nhập lại mật khẩu"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full h-[50px] border border-[#3e3e3e] pl-3 font-medium rounded-lg focus:ring-[#7dc642] focus:outline-[#7dc642]"
                        />
                        <i
                            // class="fa-solid fa-eye text-xl cursor-pointer absolute right-5"
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
                    <button onClick={handleSignUp} className="relative w-1/3 overflow-hidden h-[50px] flex items-center justify-start bg-[#3e3e3e] rounded-xl cursor-pointer  group  duration-700 ease-linear">
                        <div className="bg-[#7dc642] absolute w-0 h-full rounded-lg group-hover:w-full duration-200"></div>
                        <p className="text-lg w-full text-white font-bold z-10">
                            Đăng ký
                        </p>
                    </button>

                </div>
            </div>
            <div className="w-10/12 relative flex items-center justify-center">
                <p className="z-20 relative bg-white px-2 font-medium">Đăng nhập qua mạng xã hội</p>
                <div className="border-b border-black w-full absolute z-0"></div>
            </div>
            <div className="w-10/12 flex flex-row items-center justify-center gap-5 mt-3">
                <div className="border border-[#3e3e3e] w-8 h-8 flex items-center justify-center rounded-md cursor-pointer group hover:bg-[#7dc642] hover:border-[#7dc642] duration-150">
                    <i class="fa-brands fa-facebook-f text-[#3e3e3e] group-hover:text-white"></i>
                </div>
                <div className="border border-[#3e3e3e] w-7 h-7 flex items-center justify-center rounded-md cursor-pointer group hover:bg-[#7dc642] hover:border-[#7dc642] duration-150">
                    <i class="fa-brands fa-google text-[#3e3e3e] group-hover:text-white"></i>
                </div>
            </div>
            <p className="font-medium w-10/12 text-center mt-3">
                Bạn đã có tài khoản?
                <Link
                    to={"/dang-nhap"}
                >
                    <span className="font-bold hover:text-[#7dc642] duration-150 cursor-pointer ml-1">Đăng nhập ngay.</span>
                </Link>
            </p>
        </div>
    );
}

export default SignUp;