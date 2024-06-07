import React from "react";
import { Link } from "react-router-dom";
const ItemInfo = ({ farm, procedure, nutrition, preservation }) => {
    return (
        <div>
            {/* xuất xứ, trang trại, quy trình sản xuất, giá trị dinh dưỡng và công dụng, cách bảo quản và sử dụng */}
            <p className="font-bold flex flex-row items-center mb-3">Trang trại:
                <Link className="group">
                    <div className="ml-1 hover:bg-[#7dc642]  px-2 py-1 rounded-lg">
                        <p className="font-bold group-hover:text-white">{farm}</p>
                    </div>
                </Link>
            </p>
            {procedure && (

                <div className="mb-3 flex flex-col gap-3">
                    <p className="font-bold">Quy trình sản xuất:</p>
                    <p className=" whitespace-pre-wrap break-words">{procedure}</p>
                </div>
            )}
            {nutrition && (

                <div className="mb-3 flex flex-col gap-3">
                    <p className="font-bold">Giá trị dinh dưỡng & công dụng:</p>
                    <p className=" whitespace-pre-wrap break-words">{nutrition}</p>

                </div>
            )}
            {preservation && (

                <div className="mb-3 flex flex-col gap-3">
                    <p className="font-bold">Cách bảo quản & sử dụng:</p>
                    <p className=" whitespace-pre-wrap break-words">{preservation}</p>

                </div>
            )}

        </div>
    );
}

export default ItemInfo;