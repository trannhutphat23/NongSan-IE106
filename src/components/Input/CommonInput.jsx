import React from "react";

const CommonInput = ({ tilte, placeholder, text, setText }) => {
    function handleText(event) {
        setText(event.target.value);
    }
    return (
        <div className="w-full flex flex-row justify-between items-center">
            <p className="w-1/3 font-medium">{tilte}<span className="text-[#f1564b] font-bold"> *</span></p>
            <input
                type="text"
                value={text}
                onChange={handleText}
                placeholder={placeholder}
                className="w-4/5 pl-3 h-[45px] text-[#3e3e3e] border border-[#3e3e3e] rounded-lg focus:ring-[#7dc642] focus:outline-[#7dc642]"
            />
        </div>
    )
}

export default CommonInput