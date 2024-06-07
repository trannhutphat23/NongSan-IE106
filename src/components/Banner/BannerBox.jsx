import React from "react";
import cam from '../../assets/banner/cam.png'
import bg1 from '../../assets/bg/bg1.jpg'
import StyleRouterButton from '../ButtonComponent/StyleRouterButton'

const BannerBox = () => {
    return (

        <div className="w-full sm:h-auto h-4/5 flex flex-row-reverse items-center sm:justify-evenly justify-start ">
            <div className="xl:w-2/5 lg:w-1/2 w-10/12 h-full flex flex-col justify-center relative ">
                <div className=" p-5">
                    <p className="md:text-2xl text-3xl text-black font-medium pl-5 border-l-4 border-orange-500">Trái cây</p>
                    <p className="sm:text-[90px] text-[60px] font-bold my-5"><span className="block sm:text-[60px] text-[40px] font-medium mb-[-30px]">Cam tươi</span> Hà Giang</p>
                    <StyleRouterButton
                        px={4}
                        py={5}
                        width={"2/5"}
                        topColor={"orange-500"}
                        bottomColor={"[#7dc642]"}
                        responsive={"sm:w-4/12 md:w-3/12 w-1/2"}
                        path={"/cua-hang/san-pham/6655e79c2b6f9d97ccf0d650"}
                    >
                        <div className="w-full flex flex-row items-center justify-evenly">
                            <p className="text-white md:text-sm lg:text-base font-medium pl-3">XEM NGAY</p>
                        </div>
                    </StyleRouterButton>
                </div>
            </div>
            <img
                src={cam}
                alt="banner"
                className="w-2/5 hidden lg:block"
            />
        </div>

    )
}

export default BannerBox