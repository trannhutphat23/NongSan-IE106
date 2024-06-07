import React, { useContext } from "react";
import FarmBox from "./FarmBox";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperNavControl from "../RecommentItem/SwiperNavControl";
import StyleRouterButton from "../ButtonComponent/StyleRouterButton";
import farmImg from '../../assets/farm.png'
import { AppContext } from "../../Context/AppContext";

const FarmContent = () => {
    const { farms } = useContext(AppContext)
    return (
        <div className=" flex items-center justify-center ">
            <div className="w-11/12 py-20 flex flex-col justify-center items-center">
                <div className="w-full flex justify-between">
                    <div className="w-1/5 hidden lg:block"></div>
                    <div className="w-3/5 border-b-2 border-b-black pb-5 mb-10">
                        <h1 className="lg:text-center text-left lg:text-5xl md:text-4xl sm:text-3xl text-xl font-bold">TRANG TRẠI LIÊN KẾT</h1>
                    </div>
                    <div className="lg:w-1/5 w-2/5 flex justify-end">
                        <div className="sm:w-3/5 w-4/5">
                            <StyleRouterButton
                                px={4}
                                py={3}
                                width={"full"}
                                responsive={"w-11/12 md:w-9/12 "}
                                topColor={"green-500"}
                                bottomColor={"[#3e3e3e]"}
                                path={"/trang-trai"}
                            >
                                <p className="text-white text-sm font-medium">Xem thêm</p>
                            </StyleRouterButton>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <Swiper
                        slidesPerView={2}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 5,
                            },
                        }}
                        spaceBetween={10}
                        loop={true}
                        className="mySwiper w-full"
                    >
                        {farms.map((value, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <FarmBox
                                        value={value}
                                    />
                                </SwiperSlide>
                            )
                        })}


                        <SwiperNavControl />
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default FarmContent;