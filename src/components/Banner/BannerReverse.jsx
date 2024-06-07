import React, { useContext } from "react";
import cam from '../../assets/banner/cam.png'
import bg1 from '../../assets/bg/bg1.jpg'
import StyleRouterButton from '../ButtonComponent/StyleRouterButton'
import { AppContext } from "../../Context/AppContext";
import BannerBox from "./BannerBox";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
const BannerReverse = () => {
    const { items } = useContext(AppContext)
    return (
        <div>
            <div
                style={{ backgroundImage: `url(${bg1})`, backgroundSize: "cover" }}
                className="w-full sm:h-screen h-[85vh] bg-black m-0 flex items-center "
            >
                {/* <Swiper
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        dynamicBullets: true,
                        clickable: true
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {items.map((value, index) => {
                        if (value.type.includes("Trái cây")) {
                            return (
                                <SwiperSlide key={index}>
                                    <BannerBox
                                        value={value}
                                    />
                                </SwiperSlide>
                            )
                        }
                    })}
                </Swiper> */}
                <BannerBox />
            </div>
        </div>
    );
}

export default BannerReverse;    