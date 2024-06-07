import React from "react";

const AdvanceSelect = () => {
    return (
        <div className="w-full flex flex-col border border-gray-300 rounded-t-xl overflow-hidden">
            <p className="w-full bg-[#7dc642] py-3 text-base font-bold text-white text-center">BỘ LỌC SẢN PHẨM</p>
            <div className="w-full pl-3 pt-3">
                <div class="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="default-checkbox" class="ms-2 font-medium text-gray-900 dark:text-gray-300">Hot Deal</label>
                </div>
                <div class="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="default-checkbox" class="ms-2 font-medium text-gray-900 dark:text-gray-300">Giảm giá</label>
                </div>
            </div>
            <div className="w-full flex flex-col items-center gap-3 mb-3">
                <button className="w-2/3 py-3 text-white font-medium rounded-xl bg-[#3e3e3e] hover:bg-[#7dc642] duration-100">
                    <p>Lọc sản phẩm</p>
                </button>
                <button className="w-2/3 py-3 text-[#3e3e3e] font-medium rounded-xl border border-[#3e3e3e] hover:border-[#7dc642] hover:text-white hover:bg-[#7dc642] duration-100">
                    <p>Đặt lại</p>
                </button>
            </div>
        </div>
    );
}

export default AdvanceSelect;