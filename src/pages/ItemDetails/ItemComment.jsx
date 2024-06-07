import React from "react";
import { useState } from "react";
import CommentBox from "./CommentBox";

const ItemComment = () => {
    const [images, setImages] = useState([]);

    function handleImageChange(event) {
        const files = event.target.files;
        const imagesArray = [];

        for (let i = 0; i < files.length; i++) {
            const reader = new FileReader();

            reader.onload = function (e) {
                imagesArray.push(e.target.result);
                if (imagesArray.length === files.length) {
                    setImages([...images, ...imagesArray]);
                }
            };

            reader.readAsDataURL(files[i]);
        }

    };
    function handleDeleteImage(index) {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
    };
    return (
        <div>
            <div className="mb-5 pb-5 border-b border-gray-400">
                <textarea className="w-full p-3 resize-none rounded-xl focus:ring-[#7dc642] focus:outline-[#7dc642]" name="comment" cols="30" rows="4" placeholder="Viết bình luận của bạn"></textarea>
                <div>
                    <input type="file" name="upload_imgs[]" id="upload-img" multiple hidden onChange={handleImageChange} accept="image/*" />
                    <label htmlFor="upload-img" className="w-full flex flex-row items-center gap-2 mt-2 cursor-pointer">
                        <i className="fa-solid fa-camera text-green-600 text-xl"></i>
                        <p className="text-green-600 font-medium">Thêm hình ảnh</p>
                    </label>
                </div>
                <div className="mt-2 flex flex-row w-full gap-5">
                    {images.map((image, index) => (
                        <div className="relative" key={index}>
                            <img src={image} alt={`Preview ${index}`} className="w-[100px] h-[100px] rounded-xl" />
                            <i className="fa-solid fa-xmark absolute top-2 right-2 bg-white rounded-full px-[2px] cursor-pointer hover:bg-[#fc0307] hover:text-white" onClick={() => handleDeleteImage(index)}></i>
                        </div>
                    ))}
                </div>
                <div className="w-full flex flex-row gap-5 mt-5">
                    <input
                        type="text"
                        className="w-1/2 p-3 resize-none rounded-xl focus:ring-[#7dc642] focus:outline-[#7dc642]"
                        placeholder="Họ và tên"
                    />
                    <input
                        type="text"
                        className="w-1/2 p-3 resize-none rounded-xl focus:ring-[#7dc642] focus:outline-[#7dc642]"
                        placeholder="Email"
                    />
                </div>
                <div className="mt-5">
                    <button className="relative w-1/3 overflow-hidden h-[60px] flex items-center justify-start bg-[#3e3e3e] rounded-xl cursor-pointer  group  duration-700 ease-linear">
                        <div className="bg-[#7dc642] absolute w-0 h-full rounded-lg group-hover:w-full duration-200"></div>
                        <p className="text-lg w-full text-white font-bold z-10">
                            Gửi đi
                            <i class="fa-solid fa-paper-plane ml-3"></i>
                        </p>
                    </button>
                </div>
            </div>
            <div>
                <CommentBox />
            </div>
        </div>
    );
}

export default ItemComment;