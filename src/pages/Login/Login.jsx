import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import WebCard from "../Contact/WebCard";
import { Outlet } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div className="w-full h-auto flex flex-col items-center py-5 mb-20 ">
                <div className="w-11/12">
                    <div className="w-2/3 mb-5">
                        <Breadcrumb
                            location={"Đăng nhập"}
                        />
                    </div>
                    <div className="relative w-full h-auto bg-white lg:bg-transparent rounded-xl lg:h-screen flex flex-col lg:flex-row  justify-end items-center">
                        <div className="absolute left-0 w-1/2 p-5 h-[90vh] bg-[#3e3e3e] rounded-xl hidden lg:flex justify-center items-center">
                            <WebCard />
                        </div>
                        <div className="w-full lg:w-4/5 pb-10 pt-5 h-full lg:bg-white rounded-xl p-3 gap-10 lg:p-0 shadow-2xl border border-gray-300 flex lg:flex-row flex-col items-center justify-end">
                            {/* <div className="w-full h-[80vh] p-3 md:p-5 bg-[#3e3e3e] rounded-xl lg:hidden flex justify-center items-center">
                                <WebCard />
                            </div> */}
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div></div>
    );
}

export default Login;