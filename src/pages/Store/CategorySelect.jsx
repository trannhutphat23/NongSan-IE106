import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import _ from 'lodash';

const CategorySelect = () => {
    const navigate = useNavigate()
    const { breadcrumb, setBreadcrumb, isClick, setIsClick} = useContext(AppContext);
 
    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    const formatLink = (link) => {
        if (breadcrumb.query.farm.link) return link + "&" + breadcrumb.query.farm.link
        else return link
    }
    
    function AddBreadcrumb(bread, pos) {
        const temp = removeAccents(bread.toLowerCase()).replace(" ", "-")
        if (pos != isClick) {
            setIsClick(pos)
            const path = {
                main: breadcrumb.main,
                second: breadcrumb.second,
                child: breadcrumb.child,
                query: {
                    link: formatLink(temp),
                    category: {
                        slug: bread,
                        link: temp
                    },
                    farm: {
                        slug: breadcrumb.query.farm.slug,
                        link: breadcrumb.query.farm.link
                    }
                }
            }
            setBreadcrumb(path)
            navigate(`/cua-hang/${formatLink(temp)}`);
        } else {
            setIsClick(0)
            const path = {
                main: breadcrumb.main,
                second: breadcrumb.second,
                child: breadcrumb.child,
                query: {
                    link: breadcrumb.query.farm.link,
                    category: {
                        slug: "",
                        link: ""
                    },
                    farm: {
                        slug: breadcrumb.query.farm.slug,
                        link: breadcrumb.query.farm.link
                    }
                }
            }
            setBreadcrumb(path)
            navigate(`/cua-hang/${breadcrumb.query.farm.link}`);
        }
    }
    return (
        <div className="w-full flex flex-col border bg-white border-gray-300 rounded-t-xl overflow-hidden">
            <p className="w-full bg-[#7dc642] py-3 text-base font-bold text-white text-center">DANH MỤC SẢN PHẨM</p>
            <ul className="w-full flex flex-col">
                <li
                    onClick={() => AddBreadcrumb("Thịt tươi", 1)}
                    className={`w-full  pl-3 py-2 font-medium cursor-pointer hover:bg-[#3e3e3e] hover:text-white duration-100 ${(isClick === 1 || breadcrumb.query.category.link === "thit-tuoi") ? "bg-[#3e3e3e] text-white" : ""}`}>
                    Thịt tươi
                </li>
                <li
                    onClick={() => AddBreadcrumb("Hải sản", 2)}
                    className={`w-full  pl-3 py-2 font-medium cursor-pointer hover:bg-[#3e3e3e] hover:text-white duration-100 ${(isClick === 2 || breadcrumb.query.category.link === "hai-san") ? "bg-[#3e3e3e] text-white" : ""}`}>
                    Hải sản
                </li>
                <li
                    onClick={() => AddBreadcrumb("Rau củ", 3)}
                    className={`w-full  pl-3 py-2 font-medium cursor-pointer hover:bg-[#3e3e3e] hover:text-white duration-100 ${(isClick === 3 || breadcrumb.query.category.link === "rau-cu") ? "bg-[#3e3e3e] text-white" : ""}`}>
                    Rau củ
                </li>
                <li
                    onClick={() => AddBreadcrumb("Trái cây", 4)}
                    className={`w-full  pl-3 py-2 font-medium cursor-pointer hover:bg-[#3e3e3e] hover:text-white duration-100 ${(isClick === 4 || breadcrumb.query.category.link === "trai-cay") ? "bg-[#3e3e3e] text-white" : ""}`}>
                    Trái cây
                </li>
                <li
                    onClick={() => AddBreadcrumb("Gói nguyên liệu", 5)}
                    className={`w-full  pl-3 py-2 font-medium cursor-pointer hover:bg-[#3e3e3e] hover:text-white duration-100 ${(isClick === 5 || breadcrumb.query.category.link === "goi-nguyen-lieu") ? "bg-[#3e3e3e] text-white" : ""}`}>
                    Gói nguyên liệu
                </li>
            </ul>
        </div>
    );
}

export default CategorySelect;