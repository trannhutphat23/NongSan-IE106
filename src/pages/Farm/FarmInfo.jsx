import React, { useEffect, useRef, useState } from "react";
import clsx from 'clsx';
import axios from "axios";
import FarmProduct from "./FarmProduct";

const FarmInfo = ({ isShow, onclick, value }) => {
    const [content, setContent] = useState(1);
    const scrollToDivRef = useRef(null);
    useEffect(() => {
        if (value){
            const farmId = value._id
            axios.get(`http://localhost:8082/farms/${farmId}`)
                .then((res) => {
                    if (scrollToDivRef.current) {
                        const topPosition = scrollToDivRef.current.getBoundingClientRect().top + window.scrollY - 150;
                        window.scrollTo({ top: topPosition, behavior: 'smooth' });
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [value]);
    return (
        <>
            {value && (
                <div
                    ref={scrollToDivRef}
                    className={clsx({
                        "w-full h-auto p-5 mb-10 bg-[#3e3e3e] duration-200 ease-in rounded-xl flex flex-col md:flex-row gap-5": isShow,
                        "hidden": !isShow
                    })}
                >
                    <div className="md:w-1/3 lg:w-1/4 h-full bg-white p-5 rounded-xl">
                        <div className="w-full h-full flex flex-row md:flex-col md:gap-0 gap-10">
                            <div className="md:w-full md:h-full w-2/5 h-2/5">
                                <img
                                    src={value.image}
                                    className="rounded-lg border"
                                />
                                <p className="text-xl font-bold text-center my-3">{value.name}</p>
                            </div>
                            <div className="md:w-full w-3/5">
                                <div className="md:mt-20 flex flex-col gap-5 mb-5">
                                    <div
                                        onClick={() => setContent(1)}
                                        className={clsx({
                                            "w-full h-[60px] border border-[#3e3e3e] flex items-center justify-center rounded-lg cursor-pointer bg-[#3e3e3e]": content == 1,
                                            "w-full h-[60px] border border-[#3e3e3e] flex items-center justify-center rounded-lg cursor-pointer group hover:bg-[#3e3e3e] duration-150": content != 1,
                                        })}
                                    >
                                        <p
                                            className={clsx({
                                                "text-lg font-bold text-white": content == 1,
                                                "text-lg font-bold group-hover:text-white duration-150": content != 1
                                            })}
                                        >Thông tin trang trại</p>
                                    </div>
                                    <div
                                        onClick={() => setContent(2)}
                                        className={clsx({
                                            "w-full h-[60px] border border-[#3e3e3e] flex items-center justify-center rounded-lg cursor-pointer bg-[#3e3e3e]": content == 2,
                                            "w-full h-[60px] border border-[#3e3e3e] flex items-center justify-center rounded-lg cursor-pointer group hover:bg-[#3e3e3e] duration-150": content != 2,
                                        })}
                                    >
                                        <p
                                            className={clsx({
                                                "text-lg font-bold text-white": content == 2,
                                                "text-lg font-bold group-hover:text-white duration-150": content != 2
                                            })}
                                        >Các sản phẩm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-2/3 lg:w-3/4 rounded-xl bg-white p-5">
                        {content == 2 ? (
                            <div className="w-full h-full flex flex-col gap-5 relative">
                                <i
                                    onClick={onclick}
                                    class="absolute right-0 fa-solid fa-square-xmark h-auto text-4xl text-[#3e3e3e] cursor-pointer hover:text-[#ff0000] duration-200"></i>
                                <p className="text-2xl font-bold text-center">CÁC SẢN PHẨM CỦA <span className="block lg:inline-block text-[#7dc642] font-black text-4xl">{value.name}</span> </p>
                                <div className="w-full p-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 scrollable-div overflow-y-scroll gap-5 ">
                                    {value.items.map((ele, index) => {
                                        return (
                                            <FarmProduct
                                                key={index}
                                                value={ele}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        ) : (
                            <div className="w-full h-full flex flex-col gap-5 relative">
                                <i
                                    onClick={onclick}

                                    class=" absolute right-0 fa-solid fa-square-xmark h-auto text-4xl text-[#3e3e3e] cursor-pointer hover:text-[#ff0000] duration-200"></i>
                                <p className="text-2xl font-bold text-center">THÔNG TIN TRANG TRẠI <span className="block lg:inline-block text-[#7dc642] font-black text-4xl">{value.name}</span> </p>
                                <p className='whitespace-pre-wrap break-words font-[500] text-[16px]'>{value.info}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default FarmInfo;
