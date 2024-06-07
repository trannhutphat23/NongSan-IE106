import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Item from '../Item/Item'
import SwiperNavControl from "./SwiperNavControl";
import axios from "axios";

const RecommentItem = ({farm, currItem}) => {
    const [list, setList] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8082/items/farm/${farm}`)
        .then((res) => {
            const filteredData = res.data.filter(item => item._id !== currItem);
            setList(filteredData)
        })
        .catch((err) => console.log(err))
    }, [farm])
    return (
        <>
            {list && (
                <div className="w-11/12">
                    <p className="font-bold text-3xl">SẢN PHẨM LIÊN QUAN</p>
                    <div className="mt-5">
                        <Swiper
                            slidesPerView={2}
                            breakpoints={{
                                640: {
                                    slidesPerView: 3,
                                },
                                768: {
                                    slidesPerView: 4,
                                },
                                1024: {
                                    slidesPerView: 5,
                                },
                            }}
                            spaceBetween={10}
                            loop={true}
                            className="mySwiper"
                        >
                            {list.map((ele, index) => {
                                return (
                                    <SwiperSlide key={index}> <Item itemColor={"green-800"} value={ele}/> </SwiperSlide>
                                )
                            })}
                            <SwiperNavControl />
                        </Swiper>
                    </div>
                </div>
            )}
        </>
    );
}

export default RecommentItem;