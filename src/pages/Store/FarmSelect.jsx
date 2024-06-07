import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import _ from 'lodash';


const FarmSelect = () => {
    const { farms } = useContext(AppContext)
    const [isClick, setIsClick] = useState(0)
    const navigate = useNavigate()
    const { breadcrumb, setBreadcrumb } = useContext(AppContext);

    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    const formatLink = (link) => {
        if (breadcrumb.query.category.link) return breadcrumb.query.category.link + "&" + link
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
                        slug: breadcrumb.query.category.slug,
                        link: breadcrumb.query.category.link
                    },
                    farm: {
                        slug: bread,
                        link: temp
                    }
                }
            }
            setBreadcrumb(path)
            navigate(`/cua-hang/${formatLink(temp)}`)
        } else {
            setIsClick(0)
            const path = {
                main: breadcrumb.main,
                second: breadcrumb.second,
                child: breadcrumb.child,
                query: {
                    link: breadcrumb.query.category.link,
                    category: {
                        slug: breadcrumb.query.category.slug,
                        link: breadcrumb.query.category.link
                    },
                    farm: {
                        slug: "",
                        link: ""
                    }
                }
            }
            setBreadcrumb(path)
            navigate(`/cua-hang/${breadcrumb.query.category.link}`)
        }

    }
    return (
        <div className="w-full flex bg-white flex-col border border-gray-300 rounded-t-xl overflow-hidden">
            <p className="w-full bg-[#7dc642] py-3 text-base font-bold text-white text-center">TRANG TRẠI</p>
            <ul className="w-full flex flex-col">
                {farms.map((value, index) => {
                    return (
                        <li
                            key={index}
                            onClick={() => AddBreadcrumb(`${value.name}`, index + 1)}
                            className={`w-full  pl-3 py-2 font-medium cursor-pointer hover:bg-[#3e3e3e] hover:text-white duration-100 ${isClick === index + 1 ? "bg-[#3e3e3e] text-white" : ""}`}>
                            {value.name}
                        </li>
                    )
                })}
                {/* <li
                    onClick={() => AddBreadcrumb("Hải sản", "/cua-hang/hai-san", 2)}
                    className={`w-full  pl-3 py-2 font-medium cursor-pointer hover:bg-[#3e3e3e] hover:text-white duration-100 ${isClick === 2 ? "bg-[#3e3e3e] text-white" : ""}`}>
                    Hải sản
                </li>
                <li
                    onClick={() => AddBreadcrumb("Rau củ", "/cua-hang/rau-cu", 3)}
                    className={`w-full  pl-3 py-2 font-medium cursor-pointer hover:bg-[#3e3e3e] hover:text-white duration-100 ${isClick === 3 ? "bg-[#3e3e3e] text-white" : ""}`}>
                    Rau củ
                </li>
                <li
                    onClick={() => AddBreadcrumb("Trái cây", "/cua-hang/trai-cay", 4)}
                    className={`w-full  pl-3 py-2 font-medium cursor-pointer hover:bg-[#3e3e3e] hover:text-white duration-100 ${isClick === 4 ? "bg-[#3e3e3e] text-white" : ""}`}>
                    Trái cây
                </li>
                <li
                    onClick={() => AddBreadcrumb("Gói nấu ăn", "/cua-hang/goi-nau-an", 5)}
                    className={`w-full  pl-3 py-2 font-medium cursor-pointer hover:bg-[#3e3e3e] hover:text-white duration-100 ${isClick === 5 ? "bg-[#3e3e3e] text-white" : ""}`}>
                    Gói nấu ăn
                </li> */}
            </ul>
        </div>
    );
}

export default FarmSelect;