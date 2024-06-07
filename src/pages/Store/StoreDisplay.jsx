import React, { useContext, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Item from '../../components/Item/Item';
import CategorySelect from "./CategorySelect";
import AdvanceSelect from "./AdvanceSelect";
import RecommentSelect from "./RecommentSelect";
import PagePagination from "../../components/PagePagination/PagePagination";
import { AppContext } from "../../Context/AppContext";
import ResponsiveSelect from "./ResponsiveSelect";

const StoreDisplay = () => {
    const [showSelect, setShowSelect] = useState(false)
    const [location, setLocation] = useState("")
    return (
        <div className="relative w-full h-auto flex flex-col items-center py-5 mb-20 ">
            {showSelect && (
                <ResponsiveSelect
                    onclick={() => setShowSelect(!showSelect)}
                />
            )}
            <div className="w-11/12">
                <div className="w-full mb-5 flex flex-row items-center justify-between">
                    <Breadcrumb
                        location={location}
                    />
                    <button
                        onClick={() => setShowSelect(!showSelect)}
                        className="relative overflow-hidden h-[40px] lg:hidden flex items-center justify-start border border-[#3e3e3e] hover:border-[#7dc642] rounded-xl cursor-pointer  group  "
                    >
                        <div className="bg-[#7dc642] absolute w-0 h-full rounded-lg group-hover:w-full duration-200"></div>
                        <p className=" w-full group-hover:text-white font-medium z-10 mx-5">
                            Lọc sản phẩm
                        </p>
                    </button>
                </div>
                <div className="w-full flex flex-row justify-between gap-5">
                    <div className="w-1/5 hidden lg:flex flex-col gap-5">
                        <CategorySelect
                            setLocation={setLocation}
                        />
                        <RecommentSelect />
                    </div>
                    <div className="w-full lg:w-4/5 grid-cols-2 sm:grid-cols-3 grid md:grid-cols-4 gap-5 ">
                        <Item
                            itemColor={"green-800"}
                        />
                        <Item
                            itemColor={"green-800"}
                        />
                        <Item
                            itemColor={"green-800"}
                        />
                        <Item
                            itemColor={"green-800"}
                        />
                        <Item
                            itemColor={"green-800"}
                        />
                        <Item
                            itemColor={"green-800"}
                        />
                        <Item
                            itemColor={"green-800"}
                        />
                        <Item
                            itemColor={"green-800"}
                        />
                        <Item
                            itemColor={"green-800"}
                        />
                        <Item
                            itemColor={"green-800"}
                        />
                        <Item
                            itemColor={"green-800"}
                        />
                        <Item
                            itemColor={"green-800"}
                        />
                        <Item
                            itemColor={"green-800"}
                        />
                        <Item
                            itemColor={"green-800"}
                        />
                        <Item
                            itemColor={"green-800"}
                        />
                        <Item
                            itemColor={"green-800"}
                        />
                    </div>
                </div>
                <div className="w-full flex justify-end mt-10">
                    <PagePagination />
                </div>
            </div>
        </div>
    );
}

export default StoreDisplay;