import React from "react";
import StyleRouterButton from "../ButtonComponent/StyleRouterButton";

const DealContent = ({ bgImage, bgColor, textColor, title, name, content, btnTopColor, btnBottomColor, path, onclick }) => {
    return (
        <div
            onClick={onclick}
            className={`w-full lg:w-full h-[40vh] md:h-[45vh] bg-${bgColor} rounded-xl flex items-center shadow`}
            style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
        >
            <div className="lg:w-4/6 md:w-5/6 h-5/6 sm:h-4/5 px-5 py-0 sm:py-3 flex flex-col justify-between">
                <div className="flex flex-col gap-1">
                    <p className={`text-2xl font-semibold text-${textColor}`}>{title}</p>
                    <p className="lg:text-4xl text-3xl font-bold">{name}</p>
                    <p className="text-lg font-medium">{content}</p>
                </div>
                <StyleRouterButton
                    px={3}
                    py={4}
                    width={"2/5"}
                    topColor={btnTopColor}
                    bottomColor={btnBottomColor}
                    responsive={"md:w-2/5 sm:w-3/5 w-3/5"}
                    path={path}
                >
                    <p className="text-white text-sm font-medium pl-3 sm:pl-2 md:pl-0 lg:pl-2">XEM NGAY</p>
                </StyleRouterButton>
            </div>
        </div>
    );
}

export default DealContent;