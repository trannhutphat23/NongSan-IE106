import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import intro1 from '../../assets/intro1.jpg'
import intro4 from '../../assets/intro4.avif'
import logoblack from '../../assets/logoblack.png'
import bgcover1 from '../../assets/bgcover1.png'

import QuestionBox from "./QuestionBox";
import quality from '../../assets/intro/quality.png'
import price from '../../assets/intro/price.png'
import origin from '../../assets/intro/origin.png'
import service from '../../assets/intro/service.png'
import ship from '../../assets/intro/ship.png'

import CommitBox from "./CommitBox";
import natural from '../../assets/camket/natural.png'
import natural1 from '../../assets/camket/natural1.png'
import delivery from '../../assets/camket/delivery.png'
import delivery1 from '../../assets/camket/delivery1.png'
import refund from '../../assets/camket/refund.png'
import refund1 from '../../assets/camket/refund1.png'
import servicee from '../../assets/camket/service.png'
import servicee1 from '../../assets/camket/service1.png'
import BubblesBG from "../../components/Background/Bubbles";


const Introduce = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center gap-[150px] py-5 pb-20 overflow-hidden mb-20">
            <div className="w-11/12">
                <div className="w-2/3">
                    <Breadcrumb />
                </div>
                <div className="w-full flex flex-col gap-[150px] mt-10">
                    <div className="w-full flex flex-col lg:flex-row gap-10 items-center lg:items-start xl:items-center">
                        <div className="w-full lg:w-1/2">
                            <p className="text-5xl font-black mb-5 text-[#7dc642]">Về chúng tôi</p>
                            <p className="text-[17px] md:text-lg ">
                                <span className="font-black text-[#3e3e3e]">FUDEE</span> tự hào là trang web thương mại điện tử tiên phong trong lĩnh vực cung cấp nông sản sạch, an toàn cho sức khỏe người tiêu dùng. Với sứ mệnh cao cả là mang đến cho khách hàng nguồn thực phẩm chất lượng cao, <span className="font-black text-[#3e3e3e]">FUDEE</span> đã và đang nỗ lực không ngừng để xây dựng một hệ thống cung cấp thực phẩm toàn diện, uy tín, đáp ứng mọi nhu cầu của khách hàng.
                            </p>
                            <div className="w-full grid grid-cols-3 lg:gap-7 mt-5">
                                <div className="flex flex-col gap-3 items-center md:items-start">
                                    <p className="text-4xl sm:text-5xl font-bold text-green-700">200+</p>
                                    <p className="font-bold text-sm sm:text-base">Sản phẩm chất lượng</p>
                                </div>
                                <div className="flex flex-col gap-3 items-center md:items-start">
                                    <p className="text-4xl sm:text-5xl font-bold text-yellow-500">1000+</p>
                                    <p className="font-bold text-sm sm:text-base">Khách hàng</p>
                                </div>
                                <div className="flex flex-col gap-3 items-center md:items-start">
                                    <p className="text-4xl sm:text-5xl font-bold text-red-500">10+</p>
                                    <p className="font-bold text-sm sm:text-base">Trang trại liên kết</p>
                                </div>
                            </div>
                        </div>
                        <img
                            src={intro4}
                            className="w-full lg:w-1/2 rounded-xl shadow-2xl"
                        />
                    </div>
                    <div className="w-full flex flex-col lg:flex-row-reverse gap-10 items-center lg:items-start xl:items-center">
                        <div className="w-full lg:w-1/2">
                            <p className="text-5xl font-black mb-5 text-[#7dc642]">Tầm nhìn và <span className="block sm:inline-block">sứ mệnh</span></p>
                            <p className="text-[17px] md:text-lg ">
                                <span className="font-black text-[#3e3e3e]">FUDEE</span> hoạt động với sứ mệnh cao cả là mang đến cho khách hàng nguồn thực phẩm sạch, an toàn, đảm bảo sức khỏe và nâng cao chất lượng cuộc sống cho mọi người.
                            </p>
                            <p className="text-lg">
                                <span className="font-black text-[#3e3e3e]">FUDEE</span> hướng đến mục tiêu trở thành thương hiệu uy tín hàng đầu trong lĩnh vực cung cấp nông sản sạch tại Việt Nam, góp phần xây dựng một cộng đồng tiêu dùng thông minh, an toàn và bảo vệ môi trường sống.
                            </p>
                        </div>
                        <img
                            src={intro1}
                            className="w-full lg:w-1/2 rounded-xl shadow-2xl"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full h-auto relative overflow-hidden flex items-center justify-center">
                <div className="w-11/12 md:w-4/5 bg-white z-20 flex flex-col items-center md:gap-10 border-2 border-[#3e3e3e] rounded-xl shadow-2xl py-10">
                    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-3">
                        <p className="text-5xl font-black text-[#7dc642]">Vì sao chọn</p>
                        <img
                            src={logoblack}
                            className="w-[200px]"
                        />
                    </div>
                    <div className="w-11/12 md:w-4/5 mt-10">
                        <QuestionBox
                            icon={quality}
                            tilte={"Sản phẩm chất lượng hàng đầu"}
                            context={"luôn chú trọng vào việc tuyển chọn kỹ lưỡng các nhà cung cấp uy tín, có quy trình sản xuất đạt chuẩn, đảm bảo an toàn vệ sinh thực phẩm. Mỗi sản phẩm đến tay khách hàng đều trải qua quá trình kiểm tra chất lượng nghiêm ngặt, đảm bảo an toàn cho sức khỏe người tiêu dùng."}
                        />
                        <QuestionBox
                            icon={origin}
                            tilte={"Nguồn gốc xuất xứ rõ ràng"}
                            context={"minh bạch trong mọi hoạt động, cam kết cung cấp đầy đủ thông tin về nguồn gốc xuất xứ của từng sản phẩm. Khách hàng có thể dễ dàng truy xuất nguồn gốc sản phẩm thông qua hệ thống tem truy xuất điện tử được gắn trên mỗi sản phẩm."}
                        />
                        <QuestionBox
                            icon={price}
                            tilte={"Giá cả hợp lý"}
                            context={"luôn nỗ lực để mang đến cho khách hàng những sản phẩm chất lượng cao với mức giá hợp lý nhất. Chúng tôi hiểu rằng giá cả là một yếu tố quan trọng ảnh hưởng đến quyết định mua sắm của khách hàng, vì vậy Fudee luôn cân nhắc kỹ lưỡng để đưa ra mức giá phù hợp với mọi đối tượng khách hàng."}
                        />
                        <QuestionBox
                            icon={service}
                            tilte={"Dịch vụ chuyên nghiệp, tận tâm"}
                            context={"đặt lợi ích của khách hàng lên hàng đầu, luôn sẵn sàng hỗ trợ khách hàng tận tình, chu đáo. Đội ngũ nhân viên chuyên nghiệp, am hiểu sản phẩm sẽ luôn tư vấn và giải đáp mọi thắc mắc của khách hàng một cách nhanh chóng và hiệu quả."}
                        />
                        <QuestionBox
                            icon={ship}
                            tilte={"Giao hàng nhanh chóng, tiện lợi"}
                            context={"Fudee hợp tác với các nhà cung cấp dịch vụ vận chuyển uy tín để đảm bảo giao hàng nhanh chóng, đúng hẹn đến tay khách hàng. Chúng tôi cung cấp đa dạng các hình thức thanh toán để khách hàng có thể lựa chọn phương thức phù hợp nhất với nhu cầu của mình."}
                        />
                    </div>
                </div>
                <img
                    src={bgcover1}
                    className="absolute w-full h-screen z-10"
                />
                <BubblesBG />
            </div>

            <div className="w-11/12 flex flex-col items-center gap-10">
                <div className="w-full flex flex-col md:flex-row md:items-center justify-center gap-3">
                    <img
                        src={logoblack}
                        className="w-[200px]"
                    />
                    <p className="text-[46px] md:text-5xl font-black text-[#7dc642]">cam kết chất lượng</p>
                </div>
                <div className="w-full  grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 lg:gap-5">
                    <CommitBox
                        icon={natural}
                        icon1={natural1}
                        context={"100% sản phẩm sạch, đảm bảo vệ sinh an toàn thực phẩm."}
                    />
                    <CommitBox
                        icon={refund}
                        icon1={refund1}
                        context={"Hoàn tiền 100% giá trị sản phẩm nếu khách hàng phát hiện sản phẩm kém chất lượng."}
                    />
                    <CommitBox
                        icon={delivery}
                        icon1={delivery1}
                        context={"Giao hàng nhanh chóng, tận nơi trên toàn quốc."}
                    />
                    <CommitBox
                        icon={servicee}
                        icon1={servicee1}
                        context={"Dịch vụ khách hàng chuyên nghiệp, chu đáo, hỗ trợ 24/7."}
                    />
                </div>
            </div>
        </div>
    );
}

export default Introduce;