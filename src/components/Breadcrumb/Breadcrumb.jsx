import React, { useContext, useEffect, useState } from "react";
import RouterButton from "../ButtonComponent/RouterButton";
import { AppContext } from "../../Context/AppContext";

const Breadcrumb = ({ location, items }) => {
    const { breadcrumb, setBreadcrumb } = useContext(AppContext)
    const getBreadcrumb = (path) => {
        switch (path) {
            case "/cua-hang":
                return "Cửa hàng";
            case "/gioi-thieu":
                return "Giới thiệu";
            case "/trang-trai":
                return "Trang trại";
            case "/blog":
                return "Blog";
            case "/lien-he":
                return "Liên hệ";
            default:
                return "Trang chủ";
        }
    }
    useEffect(() => {
        console.log(location)
        if(location.pathname || (location.pathname && !location.pathname.includes("/cua-hang/san-pham/"))){
            const main = getBreadcrumb(location.pathname)
            setBreadcrumb(prev => ({
                ...prev,
                main: main
            }))
        }else{
            if (location === 'Đăng nhập/Đăng ký'){
                setBreadcrumb(prev => ({
                   ...prev,
                    main: "Đăng nhập/Đăng ký",
                }))
            }else{
                setBreadcrumb(prev => ({
                   ...prev,
                    main: "Cửa hàng",
                }))
            }
        }
    }, [])
    
    return (
        <div className="flex flex-row gap-1 w-auto">
            <RouterButton
                path={"/trang-chu"}
            >
                <div className="flex flex-row items-center gap-3 group">
                    <i className={`fa-solid fa-house text-[#3e3e3e] text-base group-hover:text-[#7dc642]`}></i>
                    <p className="text-[#3e3e3e] text-base font-bold group-hover:text-[#7dc642]">Trang chủ</p>
                </div>
            </RouterButton>
            {breadcrumb.main != "" && (
                <div className="flex flex-row items-center gap-1">
                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <RouterButton
                        path={
                            breadcrumb.main === "Cửa hàng" ? "/cua-hang" : 
                            breadcrumb.main === "Giới thiệu" ? "/gioi-thieu" :
                            breadcrumb.main === "Trang trại" ? "/trang-trai" :
                            breadcrumb.main === "Blog" ? "/blog" :
                            breadcrumb.main === "Liên hệ" ? "/lien-he" :
                            "/trang-chu"
                        }
                    >
                        <div className="flex flex-row items-center gap-3 group">
                            <p className="text-[#3e3e3e] text-base font-bold group-hover:text-[#7dc642]">{breadcrumb.main}</p>
                        </div>
                    </RouterButton>
                </div>
            )}
        </div>

    );
}

export default Breadcrumb;