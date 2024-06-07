import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import RecommentSelect from "../Store/RecommentSelect";

const BlogDetail = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center py-5 mb-20">
            <div className="w-11/12">
                <div className="w-2/3 mb-5">
                    <Breadcrumb
                    />
                </div>
            </div>
            <div className="w-11/12 border flex flex-row">
                <div className="w-3/4 border">1</div>
                <div className="w-1/4 border">
                    <RecommentSelect />
                </div>
            </div>
        </div>
    )
}

export default BlogDetail