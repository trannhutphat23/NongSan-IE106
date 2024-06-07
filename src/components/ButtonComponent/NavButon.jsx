import React from "react";
import { Link } from "react-router-dom";

const Button = ({ onClick, children, path }) => {
    return (
        <Link to={path}>
            <button
                type="button"
                onClick={onClick}
                className="group z-20 relative text-black hover:text-white cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-[#7dc642] before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-[#7dc642] after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
            >
                {children}
            </button>
        </Link>
    );
};

export default Button;