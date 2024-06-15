import React, {useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

const styleRouterButton = ({ onClick, children, path, width, py, px, topColor, bottomColor, responsive }) => {
    const navigate = useNavigate()
    const { setNavigateStore, breadcrumb, setBreadcrumb } = useContext(AppContext);

    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    const handleNavigate = (path) => {
        const temp = removeAccents(path.toLowerCase()).replace(" ", "-")
        setNavigateStore(true)
        setBreadcrumb(prev => ({ ...prev, child: 3, main: "Cửa hàng" , second: (path === 'trai-cay') ? "Trái cây" : "Rau củ", query: {
            link: temp,
            category: {
                slug: breadcrumb.second,
                link: temp
            },
            farm: {
                slug: "",
                link: ""
            }
        }}))
        if (path.includes("/cua-hang/san-pham")){
            navigate(path)
        }else{
            navigate(`/cua-hang/${temp}`)
        }
    }
    return (
        <div onClick={() => handleNavigate(path)}>
            <button
                type="button"
                onClick={onClick}
                className={`relative flex flex-row items-center lg:w-${width} ${responsive} bg-${bottomColor} rounded-[50px]  cursor-pointer group`}
            >
                <div className={`absolute w-3/4 h-full bg-${topColor} rounded-[50px]  group-hover:w-full duration-200`}></div>
                <div className={`py-${py} px-${px} flex flex-row items-center justify-center gap-5 z-20 relative`}>
                    {children}
                </div>
                <div className="z-20 w-11/12 absolute flex justify-end  items-end">
                    <i class="fa-solid fa-arrow-right text-white justify-self-end"></i>
                </div>
            </button>
        </div>
    );
};

export default styleRouterButton;