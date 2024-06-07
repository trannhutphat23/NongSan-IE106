import React from "react";
import blog from '../../assets/blog.jpg'

const BigBlog = () => {
    return (
        <div className="w-full cursor-pointer p-3 hover:shadow rounded-xl duration-200 border border-transparent hover:border-gray-200">
            <div className="relative w-full overflow-hidden rounded-xl group mb-3 flex justify-center items-center">
                <div className="absolute w-full h-full rounded-xl duration-300 scale-105 group-hover:scale-90 border-2 border-white z-10"></div>
                <img
                    src={blog}
                    className=" group-hover:scale-110 duration-300 group-hover:brightness-[80%]"
                />
            </div>
            <p className="text-lg font-bold mb-1">MẬT ONG NUÔI CÓ ĐƯỢC GỌI LÀ MẬT NGUYÊN CHẤT KHÔNG?</p>
            <div className=" flex items-center italic text-sm mb-3">
                <i class="fa-solid fa-calendar-days mr-1"></i>
                <p>11/12/2023</p>
                <p className="mx-2">|</p>
                <p className="hover:text-[#7dc642] cursor-pointer">Phạm Ngọc Qúi</p>
            </div>
            <p className="text-[15px]">{"Mật ong là một nguyên liệu được sử dụng phổ biến trong nấu ăn. Ngoài ra, mật ong còn được ứng dụng trong chữa bệnh và làm đẹp. Dựa trên những lợi ích của mật ong, nó".substring(0, 99)} . . .</p>
        </div>
    );
}

export default BigBlog;