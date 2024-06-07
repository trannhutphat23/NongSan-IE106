// import React, { useEffect, useState } from "react";
// import RouterButton from "../ButtonComponent/RouterButton";
// import clsx from "clsx";
// import { useLocation, useNavigate } from "react-router-dom";


// const CommentPagination = ({ pageMany }) => {
//     const location = useLocation()
//     const navigate = useNavigate()
//     const [page, setPage] = useState()
//     useEffect(() => {
//         setPage(location.search)
//         if (location.search == "") setPage("?page=1")
//     })

//     function pagePrevious() {
//         if (parseInt(location.search[6]) !== 1)
//             navigate("?page=" + (parseInt(location.search[6]) - 1))
//     }

//     function pageNext() {
//         if (parseInt(location.search[6]) !== 5)
//             navigate("?page=" + (parseInt(location.search[6]) + 1))
//     }

//     return (
//         <div>
//             <ul className="flex items-center -space-x-px h-8 text-sm">
//                 <li onClick={pagePrevious}>
//                     <p className="cursor-pointer flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
//                         <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
//                         </svg>
//                     </p>
//                 </li>
//                 <RouterButton path={`/cua-hang/?page=1`}>
//                     <li className={clsx({
//                         'cursor-pointer flex items-center justify-center px-3 h-8  text-[#3e3e3e] bg-green-200 border border-gray-300': page == "?page=1",
//                         'cursor-pointer flex items-center justify-center px-3 h-8 text-gray-500 bg-white border border-gray-300 hover:bg-green-200': page !== "?page=1"
//                     })}>
//                         <p>1</p>
//                     </li>
//                 </RouterButton>
//                 <RouterButton path={"?page=2"}>
//                     <li className={clsx({
//                         'cursor-pointer flex items-center justify-center px-3 h-8  text-[#3e3e3e] bg-green-200 border border-gray-300': page == "?page=2",
//                         'cursor-pointer flex items-center justify-center px-3 h-8 text-gray-500 bg-white border border-gray-300 hover:bg-green-200': page !== "?page=2"
//                     })}>
//                         <p>2</p>
//                     </li>
//                 </RouterButton>
//                 <RouterButton path={"?page=3"}>
//                     <li className={clsx({
//                         'cursor-pointer flex items-center justify-center px-3 h-8  text-[#3e3e3e] bg-green-200 border border-gray-300': page == "?page=3",
//                         'cursor-pointer flex items-center justify-center px-3 h-8 text-gray-500 bg-white border border-gray-300 hover:bg-green-200': page !== "?page=3"
//                     })}>
//                         <p>3</p>
//                     </li>
//                 </RouterButton>
//                 <RouterButton path={"?page=4"}>
//                     <li className={clsx({
//                         'cursor-pointer flex items-center justify-center px-3 h-8  text-[#3e3e3e] bg-green-200 border border-gray-300': page == "?page=4",
//                         'cursor-pointer flex items-center justify-center px-3 h-8 text-gray-500 bg-white border border-gray-300 hover:bg-green-200': page !== "?page=4"
//                     })}>
//                         <p>4</p>
//                     </li>
//                 </RouterButton>
//                 <RouterButton path={"?page=5"}>
//                     <li className={clsx({
//                         'cursor-pointer flex items-center justify-center px-3 h-8  text-[#3e3e3e] bg-green-200 border border-gray-300': page == "?page=5",
//                         'cursor-pointer flex items-center justify-center px-3 h-8 text-gray-500 bg-white border border-gray-300 hover:bg-green-200': page !== "?page=5"
//                     })}>
//                         <p>5</p>
//                     </li>
//                 </RouterButton>
//                 <li onClick={pageNext}>
//                     <p className="cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
//                         <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
//                         </svg>
//                     </p>
//                 </li>
//             </ul>
//         </div>
//     );
// }

// export default CommentPagination;