import React from "react";
import CategoryOption from "./CategoryOption";
import bg3 from '../../assets/bg/bg3.png'
import vegetables from '../../assets/icon/vegetables.png'
import vegetables_hover from '../../assets/icon/vegetables_hover.png'
import fruit from '../../assets/icon/fruit.png'
import fruit_hover from '../../assets/icon/fruit_hover.png'
import meat from '../../assets/icon/meat.png'
import meat_hover from '../../assets/icon/meat_hover.png'
import seafood from '../../assets/icon/seafood.png'
import seafood_hover from '../../assets/icon/seafood_hover.png'
import chef from '../../assets/icon/chef.png'
import chef_hover from '../../assets/icon/chef_hover.png'
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import _ from 'lodash';
import { useContext } from "react";

const Category = () => {
    const { breadcrumb, setBreadcrumb } = useContext(AppContext);
    const navigate = useNavigate()
    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    function handleNavigate(title) {
        const temp = removeAccents(title.toLowerCase()).replace(" ", "-")
        const path = {
            main: "Cửa hàng",
            second: breadcrumb.second,
            child: 3,
            query: {
                link: temp,
                category: {
                    slug: title,
                    link: temp
                },
                farm: {
                    slug: "",
                    link: ""
                }
            }
        }
        setBreadcrumb(path)
        navigate(`/cua-hang/${temp}`);
    }
    return (
        <div
            style={{ backgroundImage: `url(${bg3})`, backgroundSize: "cover" }}
            className="w-full h-auto lg:h-screen bg-[#e7ede1]  flex flex-col items-center justify-center py-10 "
        >
            <div className="w-11/12 h-full flex flex-col items-center justify-evenly">
                <div className="text-center w-full sm:w-11/12 flex flex-col items-center">
                    <p className="sm:w-1/2 py-5 sm:py-0 w-3/4 text-3xl font-semibold pb-5 border-b-2 border-b-black mb-5">Danh mục sản phẩm</p>
                    <p className="text-xl sm:text-3xl lg:text-4xl font-bold">Cửa hàng của chúng tôi cung cấp đa dạng các loại nông sản sạch, đảm bảo an toàn cho sức khỏe của bạn</p>
                </div>
                <div className="w-full grid sm:grid-cols-4 sm:grid-rows-2 lg:grid-cols-5 lg:grid-rows-1 grid-cols-3 grid-rows-2 md:gap-5 sm:gap-2  mt-2 md:mt-10 gap-2">
                    <CategoryOption
                        img1={meat}
                        img2={meat_hover}
                        content={"Thịt tươi"}
                        onClick={() => handleNavigate("Thịt tươi")}
                    />
                    <CategoryOption
                        img1={seafood}
                        img2={seafood_hover}
                        content={"Hải sản"}
                        onClick={() => handleNavigate("Hải sản")}
                    />
                    <CategoryOption
                        img1={vegetables}
                        img2={vegetables_hover}
                        content={"Rau củ"}
                        onClick={() => handleNavigate("Rau củ")}
                    />
                    <CategoryOption
                        img1={fruit}
                        img2={fruit_hover}
                        content={"Trái cây"}
                        onClick={() => handleNavigate("Trái cây")}
                    />
                    <CategoryOption
                        img1={chef}
                        img2={chef_hover}
                        content={"Gói nấu ăn"}
                        onClick={() => handleNavigate("Gói nguyên liệu")}
                    />
                </div>
            </div>
        </div>
    );
}

export default Category;