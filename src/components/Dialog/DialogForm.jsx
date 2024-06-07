const DialogForm = ({onDialog}) => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50"
            onClick={() => onDialog(false)}>
            <div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-10 w-[400px] h-auto rounded-lg"
                onClick={(e) => e.stopPropagation()}>
                <h3 className="text-gray-900 text-lg mb-5">Bạn muốn xóa sản phẩm?</h3>
                <div className="flex items-center mt-5 gap-10">
                    <button className="bg-gray-500 text-white py-2 px-4 mr-2 cursor-pointer rounded-md font-bold hover:bg-green-500 duration-150"
                        onClick={() => onDialog(true)}>Có</button>
                    <button className="bg-red-500 text-white py-2 px-4 ml-2 cursor-pointer rounded-md font-bold duration-150"
                        onClick={() => onDialog(false)}>Hủy</button>
                </div>
            </div>
        </div>
    )
}

export default DialogForm;