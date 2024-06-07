import React, { useContext, useEffect, useState } from "react";
import RouterButton from "../ButtonComponent/RouterButton";
import { AppContext } from "../../Context/AppContext";

const Breadcrumb = ({ location }) => {
    const { breadcrumb } = useContext(AppContext)
    return (
        <div className="flex flex-row gap-1 w-auto">
            <RouterButton
                to={"/trang-chu"}
            >
                <div className="flex flex-row items-center gap-3 group">
                    <i className={`fa-solid fa-house text-[#3e3e3e] text-base group-hover:text-[#7dc642]`}></i>
                    <p className="text-[#3e3e3e] text-base font-bold group-hover:text-[#7dc642]">Trang chủ</p>
                </div>
            </RouterButton>
            {breadcrumb.main && (
                <div className="flex flex-row items-center gap-1">
                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <p className="text-[#3e3e3e] text-base font-bold">{breadcrumb.main}</p>
                </div>
            )}
            {/* {breadcrumb.second && (
                <div className="flex flex-row items-center gap-1">
                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <p className="text-[#3e3e3e] text-base font-bold">{breadcrumb.second}</p>
                </div>
            )} */}
        </div>

    );
}

export default Breadcrumb;