import React from "react";

const StatusTag = ({ children }) => {
    return (
        <div className="absolute top-2 right-2 px-2 py-1 bg-[#ff0000] rounded-lg">
            {children}
        </div>
    );
};

export default StatusTag;