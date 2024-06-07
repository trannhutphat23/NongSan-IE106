import React, { useContext, useState, useRef, useEffect } from "react";
import clsx from "clsx";
import Button from "../ButtonComponent/NavButon";
import logo from '../../assets/logo.png'
import RouterButton from "../ButtonComponent/RouterButton";
import { AppContext } from "../../Context/AppContext";
import { Link } from "react-router-dom";

const ScrollNavBar = () => {
    const { breadcrumb, setBreadcrumb, cart } = useContext(AppContext)
    const [sideBar, setSideBar] = useState(true)
    function showSideBar(main, child) {
        const temp = {
            main: main,
            child: child
        }
        setBreadcrumb(temp)
        setSideBar(!sideBar);
    }
    function updateBreadcrumb(main, second, child) {
        const temp = {
            main: main,
            second: second,
            child: child
        }
        setBreadcrumb(temp)
    }
    return (
        <div className="w-full h-[90px] bg-[#3e3e3e] fixed top-0 z-50 shadow-lg shadow-[#575656]">
            <div className="w-full h-full p-3 hidden lg:flex flex-row items-center justify-between">
                <img
                    src={logo}
                    className="xl:w-1/6 w-[16%]"
                />
                <ul className="w-auto flex flex-row gap-7 lg:gap-10 items-center justify-between">
                    <Button path={"/trang-chu"} onClick={() => updateBreadcrumb("Trang chủ", "", 1)}>
                        <li>
                            <p
                                // className="text-lg font-normal text-white py-1 group-hover:text-[#7dc642]"
                                className={clsx({
                                    "text-lg font-normal text-white py-1 group-hover:text-[#7dc642]": breadcrumb.child != 1,
                                    "text-xl font-black py-1 text-[#7dc642] border-b-2 border-[#7dc642]": breadcrumb.child == 1
                                })}
                            >Trang chủ</p>
                        </li>
                    </Button>
                    <Button path={"/gioi-thieu"} onClick={() => updateBreadcrumb("Giới thiệu", "", 2)}>
                        <li>
                            <p
                                // className="text-lg font-normal text-white py-1 group-hover:text-[#7dc642]"
                                className={clsx({
                                    "text-lg font-normal text-white py-1 group-hover:text-[#7dc642]": breadcrumb.child != 2,
                                    "text-xl font-black py-1 text-[#7dc642] border-b-2 border-[#7dc642]": breadcrumb.child == 2
                                })}
                            >Giới thiệu</p>
                        </li>
                    </Button>
                    <div className="relative group duration-150">
                        <Button path={"/cua-hang"} onClick={() => updateBreadcrumb("Cửa hàng", "", 3)}>
                            <li>
                                <p
                                    // className="text-lg font-normal text-white py-1 group-hover:text-[#7dc642]"
                                    className={clsx({
                                        "text-lg font-normal text-white py-1 group-hover:text-[#7dc642]": breadcrumb.child != 3,
                                        "text-xl font-black py-1 text-[#7dc642] border-b-2 border-[#7dc642]": breadcrumb.child == 3
                                    })}
                                >Cửa hàng</p>
                            </li>
                        </Button>
                        <div className="absolute hidden duration-200 group-hover:flex flex-col rounded-lg gap-3 w-[230px] px-3 z-10 bg-[#3e3e3e] pb-3 pt-5 shadow-xl">
                            <Link
                                to={"/cua-hang/thit-tuoi"} onClick={() => updateBreadcrumb("Cửa hàng", "Thịt tươi", 3)}
                            >
                                <p className="w-full border border-transparent rounded-md hover:border-[#7dc642] px-1 text-center text-xl py-2 font-bold text-white hover:text-[#7dc642] duration-150 cursor-pointer">Thịt tươi</p>
                            </Link>
                            <Link
                                to={"/cua-hang/hai-san"} onClick={() => updateBreadcrumb("Cửa hàng", "Hải sản", 3)}
                            >
                                <p className="w-full border border-transparent rounded-md hover:border-[#7dc642] px-1 text-center text-xl py-2 font-bold text-white hover:text-[#7dc642] duration-150 cursor-pointer">Hải sản</p>
                            </Link>
                            <Link
                                to={"/cua-hang/rau-cu"} onClick={() => updateBreadcrumb("Cửa hàng", "Rau củ", 3)}
                            >
                                <p className="w-full border border-transparent rounded-md hover:border-[#7dc642] px-1 text-center text-xl py-2 font-bold text-white hover:text-[#7dc642] duration-150 cursor-pointer">Rau củ</p>
                            </Link>
                            <Link
                                to={"/cua-hang/trai-cay"} onClick={() => updateBreadcrumb("Cửa hàng", "Trái cây", 3)}
                            >
                                <p className="w-full border border-transparent rounded-md hover:border-[#7dc642] px-1 text-center text-xl py-2 font-bold text-white hover:text-[#7dc642] duration-150 cursor-pointer">Trái cây</p>
                            </Link>
                            <Link
                                to={"/cua-hang/goi-nguyen-lieu"} onClick={() => updateBreadcrumb("Cửa hàng", "Gói nguyên liệu", 3)}
                            >
                                <p className="w-full border border-transparent rounded-md hover:border-[#7dc642] px-1 text-center text-xl py-2 font-bold text-white hover:text-[#7dc642] duration-150 cursor-pointer">Gói nguyên liệu</p>
                            </Link>
                        </div>
                    </div>
                    <Button path={"/trang-trai"} onClick={() => updateBreadcrumb("Trang trại", "", 4)}>
                        <li>
                            <p
                                // className="text-lg font-normal text-white py-1 group-hover:text-[#7dc642]"
                                className={clsx({
                                    "text-lg font-normal text-white py-1 group-hover:text-[#7dc642]": breadcrumb.child != 4,
                                    "text-xl font-black py-1 text-[#7dc642] border-b-2 border-[#7dc642]": breadcrumb.child == 4
                                })}
                            >Trang trại</p>
                        </li>
                    </Button>
                    <Button path={"/blog"} onClick={() => updateBreadcrumb("Blog", "", 5)}>
                        <li>
                            <p
                                // className="text-lg font-normal text-white py-1 group-hover:text-[#7dc642]"
                                className={clsx({
                                    "text-lg font-normal text-white py-1 group-hover:text-[#7dc642]": breadcrumb.child != 5,
                                    "text-xl font-black py-1 text-[#7dc642] border-b-2 border-[#7dc642]": breadcrumb.child == 5
                                })}
                            >Blog</p>
                        </li>
                    </Button>
                    <Button path={"/lien-he"} onClick={() => updateBreadcrumb("Liên hệ", "", 6)}>
                        <li>
                            <p
                                // className="text-lg font-normal text-white py-1 group-hover:text-[#7dc642]"
                                className={clsx({
                                    "text-lg font-normal text-white py-1 group-hover:text-[#7dc642]": breadcrumb.child != 6,
                                    "text-xl font-black py-1 text-[#7dc642] border-b-2 border-[#7dc642]": breadcrumb.child == 6
                                })}
                            >Liên hệ</p>
                        </li>
                    </Button>
                </ul>
                <div className="w-auto flex flex-row items-center gap-7 mr-10">
                    <RouterButton path={"/tai-khoan"}>
                        <div class="flex flex-row items-center gap-2 cursor-pointer group">
                            <div className="relative flex items-center justify-center">
                                <i class="absolute fa-solid fa-circle-user fa-2x text-transparent rounded-full border border-[#7dc642] hover:scale-125 duration-200 group-hover:scale-125"></i>
                                <i class="fa-solid fa-circle-user fa-2x text-white border-2 border-[#7dc642] rounded-full"></i>
                            </div>
                            <div className="hidden xl:block">
                                <p class="text-white font-normal text-sm text-left">Tài khoản</p>
                                <p class="text-[#7dc642] font-medium text-sm text-left">Đăng nhập</p>
                            </div>
                        </div>
                    </RouterButton>
                    <RouterButton path={"/gio-hang"}>
                        <div class="flex flex-row items-center gap-2 cursor-pointer group ">
                            <div className="relative flex items-center justify-center bg-white rounded-full p-2">
                                <i class="absolute fa-solid fa-circle-user fa-2x text-transparent rounded-full border border-[#7dc642] hover:scale-125 duration-200 group-hover:scale-125"></i>
                                <i class="absolute fa-solid fa-circle-user fa-2x text-transparent rounded-full border-2 border-[#7dc642]"></i>
                                <i class="fa-solid fa-cart-shopping text-[#3e3e3e]"></i>
                            </div>
                            <div className="hidden xl:block">
                                <p class="text-white font-normal text-sm text-left">Giỏ hàng</p>
                                <p class="text-[#7dc642] font-medium text-sm text-left">{cart.length} sản phẩm</p>
                            </div>
                        </div>
                    </RouterButton>
                </div>
            </div>
            <div className="w-full h-full lg:hidden flex flex-row items-center justify-between px-3">
                <i class="fa-solid fa-bars text-white text-3xl cursor-pointer" onClick={() => setSideBar(!sideBar)}></i>
                <img
                    src={logo}
                    className="w-2/5 sm:w-1/4 md:w-1/5"
                />
                <div className="scale-125">
                    <RouterButton path={"/gio-hang"}>
                        <div class="flex flex-row items-center gap-2 cursor-pointer group ">
                            <div className="relative flex items-center justify-center bg-white rounded-full p-2">
                                <i class="absolute fa-solid fa-circle-user fa-2x text-transparent rounded-full border border-[#7dc642] hover:scale-125 duration-200 group-hover:scale-125"></i>
                                <i class="absolute fa-solid fa-circle-user fa-2x text-transparent rounded-full border-2 border-[#7dc642]"></i>
                                <i class="fa-solid fa-cart-shopping text-[#3e3e3e]"></i>
                            </div>
                            <div className="hidden lg:block">
                                <p class="text-white font-normal text-sm text-left">Giỏ hàng</p>
                                <p class="text-[#7dc642] font-medium text-sm text-left">{cart.length} sản phẩm</p>
                            </div>
                        </div>
                    </RouterButton>
                </div>
            </div>
        </div>
    )
}

export default ScrollNavBar