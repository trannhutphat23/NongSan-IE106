import React, { useContext, useState } from "react";
import logo from '../../assets/logo.png'
import Button from '../ButtonComponent/NavButon'
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import _ from 'lodash';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Footer = () => {
    const { breadcrumb, setBreadcrumb} = useContext(AppContext)
    const navigate = useNavigate()
    function updateBreadcrumb(main, second, child) {
        const temp = {
            main: main,
            second: second,
            child: child,
            query: {
                link: "",
                category: {
                    slug: "",
                    link: ""
                },
                farm: {
                    slug: "",
                    link: ""
                }
            }
        }
        setBreadcrumb(temp)
    }
    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };


    async function AddBreadcrumb(bread) {
        const temp = removeAccents(bread.toLowerCase()).replace(" ", "-")
        const path = {
            main: "Cửa hàng",
            second: "",
            child: 3,
            query: {
                link: temp,
                category: {
                    slug: bread,
                    link: temp
                },
                farm: {
                    slug: "",
                    link: ""
                }
            }
        }
        setBreadcrumb(path)
     
        // navigate(`/cua-hang/${temp}`)
    }


    return (
        <div className="w-full h-auto bg-[#3e3e3e] grid lg:grid-cols-6 lg:grid-rows-1 p-3 md:grid-rows-2 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 grid-rows-3 gap-5 sm:gap-10 pb-24">
            <div className="w-full col-span-2">
                <div className="w-full h-1/3 mb-5 flex items-end">
                <Link
                    to={"/trang-chu"}
                >

                    <img
                        src={logo}
                        alt="logo"
                        className="md:w-3/5 sm:w-1/3 w-1/2"
                    />
                </Link>
                </div>
                <ul className="flex flex-col gap-3">
                    <Button>
                        <li className="flex items-center gap-2 text-white ">
                            <i class="fa-solid fa-location-dot text-lg group-hover:text-[#7dc642]"></i>
                            <p className="text-base font-medium text-[#bbbbbb] group-hover:text-[#7dc642]">Trường Đại học Công Nghệ Thông Tin</p>
                        </li>
                    </Button>
                    <Button>
                        <li className="flex items-center gap-2 text-white">
                            <i class="fa-solid fa-envelope text-lg group-hover:text-[#7dc642]"></i>
                            <p className="text-base text-[#bbbbbb] font-medium group-hover:text-[#7dc642]">21520419@gm.uit.edu.vn</p>
                        </li>
                    </Button>
                    <Button>
                        <li className="flex items-center gap-2 text-white">
                            <i class="fa-solid fa-phone text-lg group-hover:text-[#7dc642]"></i>
                            <p className="text-base font-medium text-[#bbbbbb] group-hover:text-[#7dc642]">0912725561</p>
                        </li>
                    </Button>
                </ul>
            </div>
            <div className="w-full">
                <div className="w-full sm:h-1/3 mb-5 flex items-end">
                    <p className="text-white text-2xl font-bold">Sản phẩm</p>
                </div>
                <ul className="flex flex-col gap-3">
                    <Button onClick={() => AddBreadcrumb("Thịt tươi", 1)} path={`/cua-hang/${removeAccents("Thịt tươi".toLowerCase()).replace(" ", "-")}`}>
                        <li className="text-base text-[#bbbbbb] font-medium ">
                            <p className="group-hover:text-[#7dc642]">Thịt tươi</p>
                        </li>
                    </Button>
                    <Button onClick={() => AddBreadcrumb("Hải sản", 2)} path={`/cua-hang/${removeAccents("Hải sản".toLowerCase()).replace(" ", "-")}`}>
                        <li className="text-base text-[#bbbbbb] font-medium">
                            <p className="group-hover:text-[#7dc642]">
                                Hải sản
                            </p>
                        </li>
                    </Button>
                    <Button onClick={() => AddBreadcrumb("Rau củ", 3)} path={`/cua-hang/${removeAccents("Rau củ".toLowerCase()).replace(" ", "-")}`}>
                        <li className="text-base text-[#bbbbbb] font-medium">
                            <p className="group-hover:text-[#7dc642]">
                                Rau củ
                            </p>
                        </li>
                    </Button>
                    <Button onClick={() => AddBreadcrumb("Trái cây", 4)} path={`/cua-hang/${removeAccents("Trái cây".toLowerCase()).replace(" ", "-")}`}>
                        <li className="text-base text-[#bbbbbb] font-medium">
                            <p className="group-hover:text-[#7dc642]">
                                Trái cây
                            </p>
                        </li>
                    </Button>
                    <Button onClick={() => AddBreadcrumb("Gói nguyên liệu", 5)} path={`/cua-hang/${removeAccents("Gói nguyên liệu".toLowerCase()).replace(" ", "-")}`}>
                        <li className="text-base text-[#bbbbbb] font-medium">
                            <p className="group-hover:text-[#7dc642]">
                                Gói nguyên liệu
                            </p>
                        </li>
                    </Button>
                </ul>
            </div>
            <div className="w-full">
                <div className="w-full sm:h-1/3 mb-5 flex items-end">
                    <p className="text-white text-2xl font-bold">Danh mục</p>
                </div>
                <ul className="flex flex-col gap-3">
                    <Button path={"/trang-chu"} onClick={() => updateBreadcrumb("Trang chủ", "", 1)}>
                        <li className="text-base text-[#bbbbbb] font-medium ">
                            <p className="group-hover:text-[#7dc642]">
                                Trang chủ
                            </p>
                        </li>
                    </Button>
                    <Button path={"/gioi-thieu"} onClick={() => updateBreadcrumb("Giới thiệu", "", 2)}>
                        <li className="text-base text-[#bbbbbb] font-medium">
                            <p className="group-hover:text-[#7dc642]">
                                Giới thiệu
                            </p>
                        </li>
                    </Button>
                    <Button path={"/cua-hang"} onClick={() => updateBreadcrumb("Cửa hàng", "", 3)}>
                        <li className="text-base text-[#bbbbbb] font-medium">
                            <p className="group-hover:text-[#7dc642]">
                                Cửa hàng
                            </p>
                        </li>
                    </Button>
                    <Button path={"/trang-trai"} onClick={() => updateBreadcrumb("Trang trại", "", 4)}>
                        <li className="text-base text-[#bbbbbb] font-medium">
                            <p className="group-hover:text-[#7dc642]">
                                Trang trại
                            </p>
                        </li>
                    </Button>
                    <Button path={"/blog"} onClick={() => updateBreadcrumb("Blog", "", 5)}>
                        <li className="text-base text-[#bbbbbb] font-medium">
                            <p className="group-hover:text-[#7dc642]">
                                Blog
                            </p>
                        </li>
                    </Button>
                    <Button path={"/lien-he"} onClick={() => updateBreadcrumb("Liên hệ", "", 6)}>
                        <li className="text-base text-[#bbbbbb] font-medium">
                            <p className="group-hover:text-[#7dc642]">
                                Liên hệ
                            </p>
                        </li>
                    </Button>
                </ul>
            </div>
            <div className="w-full col-span-2 ">
                <div className="w-full h-1/3 mb-5 flex items-end">
                    <p className="text-white text-2xl font-bold">Đăng ký</p>
                </div>
                <p className="text-base text-[#bbbbbb] font-medium mb-3">Đăng ký ngay để nhận được thông tin mới nhất từ chúng tôi</p>
                <div className="w-full flex flex-row gap-3">
                    <input
                        type="text"
                        placeholder="Email.."
                        className="w-3/5 h-9 rounded-lg pl-3 focus:ring-2 focus:outline-none focus:border-[#7dc642] focus:ring-[#7dc642]"
                    />
                    <button className="relative md:w-1/3 w-1/5 h-9 flex items-center justify-start bg-[#3e3e3e] rounded-lg cursor-pointer border border-white group hover:border-none duration-700 ease-linear">
                        <div className="bg-[#7dc642] absolute w-0 h-full rounded-lg group-hover:w-full duration-300"></div>
                        <p className="text-sm text-center w-full text-white font-medium z-10">ĐĂNG KÝ</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Footer;