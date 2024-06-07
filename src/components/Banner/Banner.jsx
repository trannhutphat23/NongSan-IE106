import React from "react";
import cam from '../../assets/banner/cam.png'
import bg1 from '../../assets/bg/bg1Reverse.jpg'
import BigRouterButton from '../ButtonComponent/BigRouterButton'

const Banner = () => {
    return (
        <div>
            <div
                style={{ backgroundImage: `url(${bg1})`, backgroundSize: "cover" }}
                className="w-full h-screen bg-black m-0 flex items-center"
            >
                <div className="w-full h-auto flex flex-row items-center justify-evenly">
                    <div className="w-2/5 h-full flex flex-col justify-center ">
                        <div className="p-5">
                            <p className="text-2xl text-black font-medium pl-5 border-l-4 border-orange-500">Trái cây</p>
                            <p className="text-[90px] font-bold my-5"><span className="block text-[60px] font-medium mb-[-30px]">Cam tươi</span> Hà Giang</p>
                            <BigRouterButton>
                                <p>XEM NGAY</p>
                                <i class="fa-solid fa-arrow-right"></i>
                            </BigRouterButton>
                        </div>
                    </div>
                    <img
                        src={cam}
                        alt="banner"
                        className="w-2/5"
                    />
                </div>
            </div>
        </div>
    );
}

export default Banner;    