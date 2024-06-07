import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from "axios";

const AccountInfo = ({ position, select }) => {
    const [email, setEmail] = useState("")
    const [userId, setUserId] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [birthday, setBirthday] = useState("")
    useEffect(() => {
        if (localStorage.user) {
            const userObj = JSON.parse(localStorage.user)
            setUserId(userObj._id)
            setName(userObj.name || "")
            setEmail(userObj.email || "")
            setPhone(userObj.phone || "")
            if (userObj.birthday) {
                const date = new Date(userObj.birthday);
                const formattedDate = date.toISOString().split('T')[0];
                setBirthday(formattedDate);
            }
        }
    }, [])
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
        });
    }
    const UpdateUser = () => {
        if (!name) {
            notifyError("Vui lòng nhập họ và tên")
            return
        }
        if (!email) {
            notifyError("Vui lòng nhập email")
            return
        }
        if (!phone) {
            notifyError("Vui lòng nhập số điện thoại")
            return
        }
        if (!birthday) {
            notifyError("Vui lòng nhập ngày sinh")
            return
        }
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            notifyError("Nhập sai định dạng email")
            return
        }

        const regexPhone = /^(\+?\d{1,4}[\s-]?)?(\(?\d{3}\)?[\s-]?)?\d{3}[\s-]?\d{4}$/;
        if (!regexPhone.test(phone)) {
            notifyError("Nhập sai định dạng số điện thoại")
            return
        }

        axios.put(`http://localhost:8082/users/update/${userId}`, {
            name: name,
            phone: phone,
            email: email,
            birthday: birthday
        })
            .then((res) => {
                notifySuccess("Cập nhật thông tin thành công")
                localStorage.setItem('user', JSON.stringify(res.data));
                if (localStorage.user) {
                    const userObj = JSON.parse(localStorage.user)
                    setUserId(userObj._id)
                    setName(userObj.name || "")
                    setEmail(userObj.email || "")
                    setPhone(userObj.phone || "")
                    if (userObj.birthday) {
                        const date = new Date(userObj.birthday);
                        const formattedDate = date.toISOString().split('T')[0];
                        setBirthday(formattedDate);
                    }
                }
            })
            .catch(err => console.error(err))
    }
    return (
        <div
            className={clsx({
                "w-full h-full flex flex-col items-center justify-between": position == select,
                "hidden": position !== select,
            })}
        >
            <div className="w-full">
                <ToastContainer />
                <p className="text-4xl font-bold">Thông tin tài khoản</p>
                <div className="w-full flex flex-col-reverse mt-5 md:mt-0 md:flex-row justify-between pr-5">
                    <div className="w-full md:w-8/12 flex flex-col gap-5 mt-10">
                        <div className="flex flex-row items-center">
                            <p className="w-1/3 sm:w-1/4 font-bold ">Họ và tên</p>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="pl-3 w-3/4 h-[45px] border border-gray-300 rounded-lg focus:ring-[#7dc642] focus:outline-[#7dc642]"
                            />
                        </div>
                        <div className="flex flex-row items-center">
                            <p className="w-1/3 sm:w-1/4 font-bold ">Số điện thoại</p>
                            <input
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="pl-3 w-3/4 h-[45px] border border-gray-300 rounded-lg focus:ring-[#7dc642] focus:outline-[#7dc642]"
                            />
                        </div>
                        <div className="flex flex-row items-center">
                            <p className="w-1/3 sm:w-1/4 font-bold ">Email</p>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="pl-3 w-3/4 h-[45px] border border-gray-300 rounded-lg focus:ring-[#7dc642] focus:outline-[#7dc642]"
                            />
                        </div>

                        <div className="flex flex-row items-center">
                            <p className="w-1/3 sm:w-1/4 font-bold ">Ngày sinh</p>
                            <input
                                type="date"
                                value={birthday}
                                onChange={(e) => setBirthday(e.target.value)}
                                className="pl-3 w-3/4 h-[45px] border border-gray-300 rounded-lg focus:ring-[#7dc642] focus:outline-[#7dc642]"
                            />
                        </div>

                    </div>
                    {/* <div className="w-full md:w-1/3 flex flex-col justify-center items-center cursor-pointer">
                        <div className="w-[180px] h-[180px] border rounded-full flex items-center justify-center">
                            <div className="relative w-3/4 h-3/4 border rounded-full flex items-center justify-center">
                                <i className="fa-solid fa-user text-5xl"></i>
                                <i class="fa-solid fa-camera absolute ml-14"></i>
                            </div>
                        </div>
                        <div className="flex flex-row items-center mt-5 gap-1 text-sm">
                            <p className=" font-medium text-[#7dc642]">Cập nhật ảnh đại diện</p>
                            <i class="fa-solid fa-camera text-[#7dc642]"></i>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="w-8/12 flex flex-row py-10 lg:py-0">
                <button onClick={UpdateUser} className="relative bg-[#3e3e3e] w-2/3 md:w-1/2 h-[50px] rounded-xl flex items-center group overflow-hidden">
                    <div className="bg-[#7dc642] absolute w-0 h-full rounded-lg group-hover:w-full duration-300"></div>
                    <p className="text-lg text-center w-full text-white font-bold z-10">Cập nhật thông tin</p>
                </button>
            </div>
        </div>

    );
}

export default AccountInfo;