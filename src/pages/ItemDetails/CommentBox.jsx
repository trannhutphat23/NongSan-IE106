import React from "react";
import cmt from '../../assets/cmt.jpg'

const CommentBox = () => {
    return (
        <div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-2 items-center">
                    <div className="w-[40px] h-[40px] bg-black rounded-full flex justify-center items-center">
                        <i class="fa-solid fa-user text-xl text-white"></i>
                    </div>
                    <p className="text-lg font-semibold">Pham Ngoc Qui</p>
                </div>
                <p className="italic">11/12/2023</p>
            </div>
            <p className="my-3 w-11/12">Thành phần trong mật ong hoa nhãn có rất nhiều loại Vitamin và axit amin quan trọng như A, B1, B2, tiền tố Acid Folic… Việc sử dụng mật ong hàng ngày giúp cho chúng ta có một cơ thể khoẻ mạnh, tăng cường sức đề kháng. Giúp ăn ngon miệng, ngủ sâu giấc, có một làn da hồng hào, tươi sáng.</p>
            <div className="flex flex-row w-full gap-5">
                <img
                    src={cmt}
                    className="w-[100px] h-[100px] rounded-xl"
                />
            </div>

            <div className="w-full flex justify-center my-5">
                <div className="w-1/2 border-b border-gray-300"></div>
            </div>
        </div>
    );
}

export default CommentBox;