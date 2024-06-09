import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";

const AccountButton = ({ icon, name, position, select, onclick, path }) => {
    return (
        <>
            {select !== 5 && (
                <Link
                    to={path}
                    onClick={onclick}
                    className={clsx({
                        "p-[6px] border border-white bg-[#3e3e3e] rounded-full cursor-pointer overflow-hidden group": position == select,
                        "p-[6px] border border-[#3e3e3e] hover:bg-gray-50 hover:border-[#7dc642] rounded-full cursor-pointer overflow-hidden duration-150 group": position !== select
                    })}
                >
                    <div
                        className={clsx({
                            "flex flex-row items-center gap-2 bg-[#3e3e3e] rounded-full": position == select,
                            "flex flex-row items-center gap-2 rounded-full": position !== select,
                        })}
                    >
                        <div className="relative flex justify-center items-center">
                            <div
                                className={clsx({
                                    "w-[40px] h-[40px] flex justify-center items-center bg-[#7dc642] rounded-full z-10": position == select,
                                    "w-[40px] h-[40px] flex justify-center items-center border border-dashed rounded-full z-10": position !== select
                                })}
                            >
                                <i
                                    className={clsx(icon, "text-lg", "text-white", {
                                        "group-hover:text-white text-white": position == select,
                                        "group-hover:text-[#7dc642] text-[#3e3e3e]": position !== select,
                                    })}
                                ></i>
                            </div>
                            <div className="absolute left-[-5px] w-[50px] h-[50px] flex justify-center items-center bg-[#3e3e3e] rounded-full"></div>
                        </div>
                        <p
                            className={clsx({
                                "text-white font-bold text-lg ml-2": position == select,
                                "text-[#3e3e3e] font-bold text-base ml-2 group-hover:text-[#7dc642]": position !== select,
                            })}
                        >
                            {name}
                        </p>
                    </div>
                </Link>
            )}
            {select === 5 && (
                <div
                    onClick={onclick}
                    className={clsx({
                        "p-[6px] border border-white bg-[#3e3e3e] rounded-full cursor-pointer overflow-hidden group": position == select,
                        "p-[6px] border border-[#3e3e3e] hover:bg-gray-50 hover:border-[#7dc642] rounded-full cursor-pointer overflow-hidden duration-150 group": position !== select
                    })}
                >
                    <div
                        className={clsx({
                            "flex flex-row items-center gap-2 bg-[#3e3e3e] rounded-full": position == select,
                            "flex flex-row items-center gap-2 rounded-full": position !== select,
                        })}
                    >
                        <div className="relative flex justify-center items-center">
                            <div
                                className={clsx({
                                    "w-[40px] h-[40px] flex justify-center items-center bg-[#7dc642] rounded-full z-10": position == select,
                                    "w-[40px] h-[40px] flex justify-center items-center border border-dashed rounded-full z-10": position !== select
                                })}
                            >
                                <i
                                    className={clsx(icon, "text-lg", "text-white", {
                                        "group-hover:text-white text-white": position == select,
                                        "group-hover:text-[#7dc642] text-[#3e3e3e]": position !== select,
                                    })}
                                ></i>
                            </div>
                            <div className="absolute left-[-5px] w-[50px] h-[50px] flex justify-center items-center bg-[#3e3e3e] rounded-full"></div>
                        </div>
                        <p
                            className={clsx({
                                "text-white font-bold text-lg ml-2": position == select,
                                "text-[#3e3e3e] font-bold text-base ml-2 group-hover:text-[#7dc642]": position !== select,
                            })}
                        >
                            {name}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}

export default AccountButton;