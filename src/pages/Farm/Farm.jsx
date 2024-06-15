import React, { useEffect, useState, useRef, useContext } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import logo from '../../assets/logo.png'
import FarmBox from "./FarmBox";
import RecommentItem from "../../components/RecommentItem/RecommentItem";
import FarmProduct from "./FarmProduct";
import '../../hiddenScroll.css'
import FarmInfo from "./FarmInfo";
import { AppContext } from "../../Context/AppContext";
import { useNavigate, useParams, useLocation } from "react-router-dom";


const Farm = () => {

    const { farms, setFarms, fetchFarm } = useContext(AppContext)

    const [preFarm, setPreFarm] = useState({})
    const [isShow, setIsShow] = useState(false)

    const params = useParams()
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (params.farmID) setIsShow(true)
    }, [params.farmID])

    function showFarm(value) {
        setPreFarm(value)
        setIsShow(!isShow)
        navigate(`/trang-trai/${value}`)
    }

    function closeShow() {
        setIsShow(false)
        navigate("/trang-trai")
    }

    return (
        <div className="w-full h-auto flex flex-col items-center py-5 mb-20 ">
            <div className="w-11/12">
                <div className="w-2/3 mb-5">
                    <Breadcrumb location={location}
                    />
                </div>
                <div className="w-full flex flex-col items-center">
                    <div className="w-full flex flex-col items-center mb-10">
                        <p className="text-3xl md:text-4xl font-black text-center text-[#7dc642] mb-5">CÁC TRANG TRẠI LIÊN KẾT VỚI CHÚNG TÔI</p>
                        <p className="w-full md:w-4/5 text-center text-lg">
                            <span className="block mb-5">
                                Nơi bạn tìm thấy thực phẩm <b> tươi ngon, an toàn</b> với<b>  nguồn gốc rõ ràng</b>. Chúng tôi tự hào kết nối nông trại uy tín đến bàn ăn của bạn, mang đến nguồn thực phẩm được canh tác theo phương pháp bền vững và an toàn sinh học. Lựa chọn Fudee, bạn sẽ nhận được sản phẩm chất lượng, giá cả hợp lý, dịch vụ chuyên nghiệp.
                            </span>
                            <div className="lg:flex flex-row justify-center items-center gap-2 hidden" id="FarmPreview">
                                <div className="bg-[#3e3e3e] w-[100px] p-2 rounded-xl">
                                    <img
                                        src={logo}
                                    />
                                </div>
                                <p className=" font-black text-xl text-[#7dc642]"> - Nâng tầm cuộc sống của bạn với thực phẩm an toàn cho gia đình!</p>
                            </div>
                        </p>
                    </div>
                    <FarmInfo
                        isShow={isShow}
                        onclick={closeShow}
                        value={farms.find(farm => farm._id === preFarm)}
                    />

                    <div className="w-full grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:mt-10">
                        {farms.map((value, index) => {
                            return (
                                <FarmBox
                                    key={index}
                                    onclick={() => showFarm(value._id)}
                                    value={value}
                                />
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Farm