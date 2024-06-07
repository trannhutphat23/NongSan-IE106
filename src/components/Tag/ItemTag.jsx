import React from "react";

const ItemTag = ({ children }) => {
    return (
        <div className="px-3 py-1 bg-[#3e3e3e] rounded-lg group-hover:bg-white">
            {children}
        </div>
    );
};

export default ItemTag;