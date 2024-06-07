import React from "react";
import { Link } from "react-router-dom";

const RouterButton = ({ onclick, children, path }) => {
    return (
        <Link to={path} onClick={(onclick) = { onclick }}>
            <button
                type="button"
            >
                {children}
            </button>
        </Link>
    );
};

export default RouterButton;