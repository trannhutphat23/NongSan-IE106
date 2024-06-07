import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import BigBlog from "./BigBlog";
import MediumBlog from "./MediumBlog";
import logo from '../../assets/logo.png'

const Blog = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center py-5 mb-20">
            <div className="w-11/12">
                <div className="w-2/3 mb-5">
                    <Breadcrumb
                    />
                </div>
                <div>
                    <p className="text-5xl font-bold mb-5 text-[#7dc642]">Tin tức nổi bật</p>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:gap-5">
                        <BigBlog />
                        <div className="flex flex-col gap-1">
                            <MediumBlog
                                preText={"Mật ong là một nguyên liệu được sử dụng phổ biến trong nấu ăn. Ngoài ra, mật ong còn được ứng dụng trong chữa bệnh và làm đẹp"}
                            />
                            <MediumBlog
                                preText={"Mật ong là một nguyên liệu được sử dụng phổ biến trong nấu ăn. Ngoài ra, mật ong còn được ứng dụng trong chữa bệnh và làm đẹp"}
                            />
                            <MediumBlog
                                preText={"Mật ong là một nguyên liệu được sử dụng phổ biến trong nấu ăn. Ngoài ra, mật ong còn được ứng dụng trong chữa bệnh và làm đẹp"}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`h-10 w-full my-16 bg-[#3e3e3e] bg-[url(${logo})] bg-repeat-space bg-contain`}></div>

            <div className="w-11/12">
                <p className="text-4xl font-bold mb-5 text-[#7dc642]">Bài viết mới nhất</p>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <BigBlog />
                    <BigBlog />
                    <BigBlog />
                    <BigBlog />
                    <BigBlog />
                    <BigBlog />
                </div>
            </div>
        </div>
    );
}

export default Blog;