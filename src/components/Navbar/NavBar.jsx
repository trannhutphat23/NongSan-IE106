import React, { useContext, useState, useRef, useEffect } from "react";
import clsx from "clsx";
import Button from "../ButtonComponent/NavButon";
import logo from '../../assets/logo.png'
import RouterButton from "../ButtonComponent/RouterButton";
import { AppContext } from "../../Context/AppContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ScrollNavBar from "./ScrollNavBar";

const NavBar = () => {
    const { breadcrumb, setBreadcrumb, cart, fetchCart, setIsClick } = useContext(AppContext)
    const [sideBar, setSideBar] = useState(true)
    const [search, setSearch] = useState("")
    const [isPast, setIsPast] = useState(false);
    const [numCartNoAcc, setNumCartNoAcc] = useState(0)
    const divRef = useRef(null);
    const navigate = useNavigate()
    const location = useLocation()
    
    const handleScroll = () => {
        if (divRef.current) {
            const rect = divRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            // Check if the div is past the viewport
            if (rect.bottom <= 0) {
                setIsPast(true);
            } else {
                setIsPast(false);
            }
        }
    };
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    useEffect(() => {
        if (localStorage.user) {
            const userObj = JSON.parse(localStorage.user)
            setName(userObj.name || "")
            setEmail(userObj.email || "")
        }else{
            setName(null)
            setEmail(null)
        }
    }, [location])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function showSideBar(main, child) {
        const temp = {
            main: main,
            child: child,
            query: {
                link: "",
                category: {
                    slug: "",
                    link: ""
                },
                farm: {
                    slug: "",
                    link: ""
                }
            }
        }
        setBreadcrumb(temp)
        setSideBar(!sideBar);
    }
    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };
    function updateBreadcrumb(main, second, child) {
        const formatPath = removeAccents(second.toLowerCase()).replace(" ", "-")
        const temp = {
            main: main,
            second: second,
            child: child,
            query: {
                link: formatPath,
                category: {
                    slug: second,
                    link: formatPath
                },
                farm: {
                    slug: "",
                    link: ""
                }
            }
        }
        setBreadcrumb(temp)
        setIsClick(0)
    }

    function handleSearch() {
        const trimmedSearch = search.trim();

        if (trimmedSearch !== "") {
            navigate(`/tim-kiem/${trimmedSearch}`);
            setSearch("");
        } else setSearch("")
    }

    useEffect(() => {
        if (localStorage.cartNoAcc) {
            const cartNoAccount = JSON.parse(localStorage.cartNoAcc)
            setNumCartNoAcc(cartNoAccount.length)
        }
    }, [])
    
    return (
        <div className="sticky top-0 z-40 shadow shadow-[#575656]">
            <div className="w-full relative" ref={divRef}>
                <div className={clsx("fixed sm:hidden w-full h-screen z-30 flex flex-row", { 'hidden': sideBar })}>
                    <div className="w-3/5 bg-[#3e3e3e] h-full p-3 z-30 flex flex-row-reverse gap-5">
                        <div onClick={() => setSideBar(true)}>
                            <i class="fa-solid fa-square-xmark h-auto text-4xl text-white cursor-pointer hover:text-[#ff0000] duration-200"></i>
                        </div>
                        <div className="w-full h-full flex flex-col items-start gap-5">
                            <div className="w-full  rounded-xl p-2 py-3 px-4 border border-white group cursor-pointer hover:border-[#7dc642] duration-200">
                                <RouterButton path={"/tai-khoan"}>
                                    <div class="flex flex-row items-center gap-2 cursor-pointer ">
                                        <div className="relative flex items-center justify-center">
                                            <i class="absolute fa-solid fa-circle-user fa-2x text-transparent rounded-full border border-[#7dc642] hover:scale-125 duration-200 group-hover:scale-125"></i>
                                            <i class="fa-solid fa-circle-user fa-2x text-white border-2 border-[#7dc642] rounded-full"></i>
                                        </div>
                                        <div>
                                            <p class="text-white font-normal text-sm text-left">Tài khoản</p>
                                            <p class="text-[#7dc642] font-medium text-sm text-left"> {(localStorage.user && name != "") ? <div className="text-[#7dc642] font-medium text-sm text-left">{name}</div> : 
                                                ((localStorage.user && name === "") ? <div className="text-[#7dc642] font-medium text-sm text-left">{email}</div> : <div className="text-[#7dc642] font-medium text-sm text-left">Đăng nhập</div> )
                                            }</p>
                                        </div>
                                    </div>
                                </RouterButton>
                            </div>
                            <div className="w-full flex flex-col items-center justify-between">
                                <div className="relative w-full h-10 flex flex-row items-center">
                                    <input
                                        type="text"
                                        placeholder="Tìm kiếm..."

                                        className="w-full h-full rounded-lg pl-5 text-base focus:ring-2 focus:outline-none focus:border-[#7dc642] focus:ring-[#7dc642]"
                                    />
                                    <div className="absolute w-1/5 right-0 h-full bg-[#7dc642] flex justify-center items-center rounded-lg cursor-pointer group">
                                        <i class="fa-solid fa-magnifying-glass text-lg text-white group-hover:text-[#3e3e3e] group-hover:text-xl duration-200"></i>
                                    </div>
                                </div>
                            </div>

                            <ul className="w-full gap-5 lg:w-8/12 md:w-10/12 flex flex-col justify-between">
                                <Button path={"/"} onClick={() => showSideBar("Trang chủ", 1)}>
                                    <li className="flex items-center gap-3">
                                        <i
                                            // class="fa-solid fa-house text-xl text-white py-1 group-hover:text-[#7dc642]"
                                            className={clsx({
                                                "fa-solid fa-house text-xl text-white py-1 group-hover:text-[#7dc642]": breadcrumb.child != 1,
                                                "fa-solid fa-house text-xl py-1 text-[#7dc642]": breadcrumb.child == 1,
                                            })}
                                        ></i>
                                        <p
                                            // className="text-lg font-normal text-white py-1 hover:text-[#7dc642]"
                                            className={clsx({
                                                "text-base font-normal text-white py-1 group-hover:text-[#7dc642]": breadcrumb.child != 1,
                                                "text-lg font-black py-1 text-[#7dc642] border-b-2 border-[#7dc642]": breadcrumb.child == 1
                                            })}
                                        >Trang chủ</p>
                                    </li>
                                </Button>
                                <Button path={"/gioi-thieu"} onClick={() => showSideBar("Giới thiệu", 2)}>
                                    <li className="flex items-center gap-3">
                                        <i
                                            // class="fa-solid fa-house text-xl text-white py-1 group-hover:text-[#7dc642]"
                                            className={clsx({
                                                "fa-solid fa-comment text-xl text-white py-1 group-hover:text-[#7dc642]": breadcrumb.child != 2,
                                                "fa-solid fa-comment text-xl py-1 text-[#7dc642]": breadcrumb.child == 2,
                                            })}
                                        ></i>
                                        <p
                                            // className="text-lg font-normal text-white py-1 hover:text-[#7dc642]"
                                            className={clsx({
                                                "text-base font-normal text-white py-1 group-hover:text-[#7dc642]": breadcrumb.child != 2,
                                                "text-lg font-black py-1 text-[#7dc642] border-b-2 border-[#7dc642]": breadcrumb.child == 2
                                            })}
                                        >Giới thiệu</p>
                                    </li>
                                </Button>
                                <Button path={"/cua-hang"} onClick={() => showSideBar("Cửa hàng", 1)}>
                                    <li className="flex items-center gap-3">
                                        <i
                                            // class="fa-solid fa-house text-xl text-white py-1 group-hover:text-[#7dc642]"
                                            className={clsx({
                                                "fa-solid fa-store text-xl text-white py-1 group-hover:text-[#7dc642]": breadcrumb.child != 3,
                                                "fa-solid fa-store text-xl py-1 text-[#7dc642]": breadcrumb.child == 3,
                                            })}
                                        ></i>
                                        <p
                                            // className="text-lg font-normal text-white py-1 hover:text-[#7dc642]"
                                            className={clsx({
                                                "text-base font-normal text-white py-1 group-hover:text-[#7dc642]": breadcrumb.child != 3,
                                                "text-lg font-black py-1 text-[#7dc642] border-b-2 border-[#7dc642]": breadcrumb.child == 3
                                            })}
                                        >Cửa hàng</p>
                                    </li>
                                </Button>
                                <Button path={"/trang-trai"} onClick={() => showSideBar("Trang trại", 4)}>
                                    <li className="flex items-center gap-3">
                                        <i
                                            // class="fa-solid fa-house text-xl text-white py-1 group-hover:text-[#7dc642]"
                                            className={clsx({
                                                "fa-solid fa-tractor text-xl text-white py-1 group-hover:text-[#7dc642]": breadcrumb.child != 4,
                                                "fa-solid fa-tractor text-xl py-1 text-[#7dc642]": breadcrumb.child == 4,
                                            })}
                                        ></i>
                                        <p
                                            // className="text-lg font-normal text-white py-1 hover:text-[#7dc642]"
                                            className={clsx({
                                                "text-base font-normal text-white py-1 group-hover:text-[#7dc642]": breadcrumb.child != 4,
                                                "text-lg font-black py-1 text-[#7dc642] border-b-2 border-[#7dc642]": breadcrumb.child == 4
                                            })}
                                        >Trang trại</p>
                                    </li>
                                </Button>
                                <Button path={"/blog"} onClick={() => showSideBar("Blog", 5)}>
                                    <li className="flex items-center gap-3">
                                        <i
                                            // class="fa-solid fa-house text-xl text-white py-1 group-hover:text-[#7dc642]"
                                            className={clsx({
                                                "fa-solid fa-book text-xl text-white py-1 group-hover:text-[#7dc642]": breadcrumb.child != 5,
                                                "fa-solid fa-book text-xl py-1 text-[#7dc642]": breadcrumb.child == 5,
                                            })}
                                        ></i>
                                        <p
                                            // className="text-lg font-normal text-white py-1 hover:text-[#7dc642]"
                                            className={clsx({
                                                "text-base font-normal text-white py-1 group-hover:text-[#7dc642]": breadcrumb.child != 5,
                                                "text-lg font-black py-1 text-[#7dc642] border-b-2 border-[#7dc642]": breadcrumb.child == 5
                                            })}
                                        >Blog</p>
                                    </li>
                                </Button>
                                <Button path={"/lien-he"} onClick={() => showSideBar("Liên hệ", 6)}>
                                    <li className="flex items-center gap-3">
                                        <i
                                            // class="fa-solid fa-house text-xl text-white py-1 group-hover:text-[#7dc642]"
                                            className={clsx({
                                                "fa-solid fa-phone text-xl text-white py-1 group-hover:text-[#7dc642]": breadcrumb.child != 6,
                                                "fa-solid fa-phone text-xl py-1 text-[#7dc642]": breadcrumb.child == 6,
                                            })}
                                        ></i>
                                        <p
                                            // className="text-lg font-normal text-white py-1 hover:text-[#7dc642]"
                                            className={clsx({
                                                "text-base font-normal text-white py-1 group-hover:text-[#7dc642]": breadcrumb.child != 6,
                                                "text-lg font-black py-1 text-[#7dc642] border-b-2 border-[#7dc642]": breadcrumb.child == 6
                                            })}
                                        >Liên hệ</p>
                                    </li>
                                </Button>
                            </ul>
                        </div>
                    </div>
                    <div className="absolute w-full h-full bg-white blur-xl opacity-40 brightness-90"></div>
                </div>
                {/* main */}
                <div className="w-full py-3 pt-5 px-3 sm:px-5 flex flex-col md:flex-row  items-center justify-between bg-[#3e3e3e]">
                    <div className="w-full sm:w-2/5 md:w-1/5 flex items-center justify-between sm:justify-center">
                        <i class="fa-solid fa-bars text-white text-3xl sm:hidden cursor-pointer" onClick={() => setSideBar(!sideBar)}></i>
                        <Link
                          onClick={() => updateBreadcrumb("Trang chủ", "", 1)}
                          to={"/trang-chu"}
                           className="w-2/5 sm:w-full sm:mb-5 md:mb-0"
                        >
                            <img
                                src={logo}
                                alt="logo"
                            />
                        </Link>
                        <div className="sm:hidden scale-125">
                            <RouterButton path={"/gio-hang"}>
                                <div class="flex flex-row items-center gap-2 cursor-pointer group ">
                                    <div className="relative flex items-center justify-center bg-white rounded-full p-2">
                                        <i class="absolute fa-solid fa-circle-user fa-2x text-transparent rounded-full border border-[#7dc642] hover:scale-125 duration-200 group-hover:scale-125"></i>
                                        <i class="absolute fa-solid fa-circle-user fa-2x text-transparent rounded-full border-2 border-[#7dc642]"></i>
                                        <i class="fa-solid fa-cart-shopping text-[#3e3e3e]"></i>
                                    </div>
                                    <div className="hidden lg:block">
                                        <p class="text-white font-normal text-sm text-left">Giỏ hàng</p>
                                        <p class="text-[#7dc642] font-medium text-sm text-left">{cart.length !== 0 ? cart.length : numCartNoAcc} sản phẩm</p>
                                    </div>
                                </div>
                            </RouterButton>
                        </div>
                    </div>
                    <div className="w-full md:w-9/12 hidden sm:flex flex-col items-start gap-5">
                        <div className="w-full flex flex-row items-center justify-between gap-3">
                            <div className="relative h-10 flex flex-row items-center sm:w-11/12 lg:w-8/12">
                                <input
                                    type="text"
                                    placeholder="Nhập từ khoá tìm kiếm..."
                                    value={search}
                                    onChange={(event) => setSearch(event.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                    className="w-full h-full rounded-lg pl-5 text-base focus:ring-2 focus:outline-none focus:border-[#7dc642] focus:ring-[#7dc642]"
                                />
                                <i class="fa-solid fa-magnifying-glass absolute cursor-pointer hover:bg-[#3e3e3e] mr-5 right-0 text-xl text-[#7dc642]"></i>
                            </div>
                            <div className=" flex flex-row justify-evenly gap-7 w-3/12 lg:gap-5 lg:justify-center sm:w-4/12 ">
                                <RouterButton path={localStorage.token ? "/tai-khoan" : "/dang-nhap"} onClick={() => updateBreadcrumb("Tài khoản", "", 9)}>
                                    <div class="flex flex-row items-center gap-2 cursor-pointer group">
                                        <div className="relative flex items-center justify-center">
                                            <i class="absolute fa-solid fa-circle-user fa-2x text-transparent rounded-full border border-[#7dc642] hover:scale-125 duration-200 group-hover:scale-125"></i>
                                            <i class="fa-solid fa-circle-user fa-2x text-white border-2 border-[#7dc642] rounded-full"></i>
                                        </div>
                                        <div className="hidden lg:block">
                                            <p class="text-white font-normal text-sm text-left">Tài khoản</p>
                                            <p class="text-[#7dc642] font-medium text-sm text-left"> {(localStorage.user && name != "") ? <div className="text-[#7dc642] font-medium text-sm text-left">{name}</div> : 
                                                ((localStorage.user && name === "") ? <div className="text-[#7dc642] font-medium text-sm text-left">{email}</div> : <div className="text-[#7dc642] font-medium text-sm text-left">Đăng nhập</div> )
                                            }</p>
                                        </div>
                                    </div>
                                </RouterButton>
                                <RouterButton path={"/gio-hang"} onClick={() => updateBreadcrumb("Giỏ hàng", "", 8)}>
                                    <div class="flex flex-row items-center gap-2 cursor-pointer group ">
                                        <div className="relative flex items-center justify-center bg-white rounded-full p-2">
                                            <i class="absolute fa-solid fa-circle-user fa-2x text-transparent rounded-full border border-[#7dc642] hover:scale-125 duration-200 group-hover:scale-125"></i>
                                            <i class="absolute fa-solid fa-circle-user fa-2x text-transparent rounded-full border-2 border-[#7dc642]"></i>
                                            <i class="fa-solid fa-cart-shopping text-[#3e3e3e]"></i>
                                        </div>
                                        <div className="hidden lg:block">
                                            <p class="text-white font-normal text-sm text-left">Giỏ hàng</p>
                                            <p class="text-[#7dc642] font-medium text-sm text-left">{cart.length !== 0 ? cart.length : numCartNoAcc} sản phẩm</p>
                                        </div>
                                    </div>
                                </RouterButton>
                            </div>
                        </div>
                        <ul className="w-full lg:w-8/12 md:w-10/12 flex items-center justify-between">
                            <Button path={"/trang-chu"} onClick={() => updateBreadcrumb("Trang chủ", "", 1)}>
                                <li>
                                    <p
                                        // className="text-base font-normal text-white py-1 group-hover:text-[#7dc642]"
                                        className={clsx({
                                            "text-lg font-normal text-white py-1 group-hover:text-[#7dc642]": breadcrumb.child != 1 && location.pathname != "/trang-chu",
                                            "text-lg font-black py-1 text-[#7dc642] border-b-2 border-[#7dc642]": breadcrumb.child === 1 || location.pathname === "/trang-chu",
                                        })}
                                    >Trang chủ</p>
                                </li>
                            </Button>
                            <Button path={"/gioi-thieu"} onClick={() => updateBreadcrumb("Giới thiệu", "", 2)}>
                                <li>
                                    <p
                                        // className="text-base font-normal text-white py-1 group-hover:text-[#7dc642]"
                                        className={clsx({
                                            "text-lg font-normal text-white py-1 group-hover:text-[#7dc642]": breadcrumb.child != 2 && location.pathname != "/gioi-thieu",
                                            "text-lg font-black py-1 text-[#7dc642] border-b-2 border-[#7dc642]": breadcrumb.child == 2 || location.pathname === "/gioi-thieu"
                                        })}
                                    >Giới thiệu</p>
                                </li>
                            </Button>
                            <div className="relative group duration-150">
                                <Button path={"/cua-hang"} onClick={() => updateBreadcrumb("Cửa hàng", "", 3)}>
                                    <li>
                                        <p
                                            // className="text-base font-normal text-white py-1 group-hover:text-[#7dc642]"
                                            className={clsx({
                                                "text-lg font-normal text-white py-1 group-hover:text-[#7dc642]": breadcrumb.child != 3 && (location.pathname != "/cua-hang" && !location.pathname.includes("/cua-hang/san-pham")),
                                                "text-lg font-black py-1 text-[#7dc642] border-b-2 border-[#7dc642]": breadcrumb.child == 3 || (location.pathname === "/cua-hang" || location.pathname.includes("/cua-hang/san-pham")),
                                            })}
                                        >Cửa hàng</p>
                                    </li>
                                </Button>
                                <div className="absolute hidden duration-200 group-hover:flex flex-col rounded-lg gap-3 w-[230px] px-3 z-10 bg-[#3e3e3e] pb-3 pt-5 shadow-xl">
                                    <Link
                                        to={"/cua-hang/thit-tuoi"} onClick={() => updateBreadcrumb("Cửa hàng", "Thịt tươi", 3)}
                                    >
                                        <p className="w-full border border-transparent rounded-md hover:border-[#7dc642] px-1 text-center text-lg py-2 font-bold text-white hover:text-[#7dc642] duration-150 cursor-pointer">Thịt tươi</p>
                                    </Link>
                                    <Link
                                        to={"/cua-hang/hai-san"} onClick={() => updateBreadcrumb("Cửa hàng", "Hải sản", 3)}
                                    >
                                        <p className="w-full border border-transparent rounded-md hover:border-[#7dc642] px-1 text-center text-lg py-2 font-bold text-white hover:text-[#7dc642] duration-150 cursor-pointer">Hải sản</p>
                                    </Link>
                                    <Link
                                        to={"/cua-hang/rau-cu"} onClick={() => updateBreadcrumb("Cửa hàng", "Rau củ", 3)}
                                    >
                                        <p className="w-full border border-transparent rounded-md hover:border-[#7dc642] px-1 text-center text-lg py-2 font-bold text-white hover:text-[#7dc642] duration-150 cursor-pointer">Rau củ</p>
                                    </Link>
                                    <Link
                                        to={"/cua-hang/trai-cay"} onClick={() => updateBreadcrumb("Cửa hàng", "Trái cây", 3)}
                                    >
                                        <p className="w-full border border-transparent rounded-md hover:border-[#7dc642] px-1 text-center text-lg py-2 font-bold text-white hover:text-[#7dc642] duration-150 cursor-pointer">Trái cây</p>
                                    </Link>
                                    <Link
                                        to={"/cua-hang/goi-nguyen-lieu"} onClick={() => updateBreadcrumb("Cửa hàng", "Gói nguyên liệu", 3)}
                                    >
                                        <p className="w-full border border-transparent rounded-md hover:border-[#7dc642] px-1 text-center text-lg py-2 font-bold text-white hover:text-[#7dc642] duration-150 cursor-pointer">Gói nguyên liệu</p>
                                    </Link>
                                </div>
                            </div>
                            <Button path={"/trang-trai"} onClick={() => updateBreadcrumb("Trang trại", "", 4)}>
                                <li>
                                    <p
                                        // className="text-base font-normal text-white py-1 group-hover:text-[#7dc642]"
                                        className={clsx({
                                            "text-lg font-normal text-white py-1 group-hover:text-[#7dc642]": breadcrumb.child != 4 && location.pathname != "/trang-trai",
                                            "text-lg font-black py-1 text-[#7dc642] border-b-2 border-[#7dc642]": breadcrumb.child == 4 || location.pathname === "/trang-trai"
                                        })}
                                    >Trang trại</p>
                                </li>
                            </Button>
                            <Button path={"/blog"} onClick={() => updateBreadcrumb("Blog", "", 5)}>
                                <li>
                                    <p
                                        // className="text-base font-normal text-white py-1 group-hover:text-[#7dc642]"
                                        className={clsx({
                                            "text-lg font-normal text-white py-1 group-hover:text-[#7dc642]": breadcrumb.child != 5 && location.pathname != "/blog",
                                            "text-lg font-black py-1 text-[#7dc642] border-b-2 border-[#7dc642]": breadcrumb.child == 5 || location.pathname === "/blog"
                                        })}
                                    >Blog</p>
                                </li>
                            </Button>
                            <Button path={"/lien-he"} onClick={() => updateBreadcrumb("Liên hệ", "", 6)}>
                                <li>
                                    <p
                                        // className="text-base font-normal text-white py-1 group-hover:text-[#7dc642]"
                                        className={clsx({
                                            "text-lg font-normal text-white py-1 group-hover:text-[#7dc642]": breadcrumb.child != 6 && location.pathname != "/lien-he",
                                            "text-lg font-black py-1 text-[#7dc642] border-b-2 border-[#7dc642]": breadcrumb.child == 6 || location.pathname === "/lien-he"
                                        })}
                                    >Liên hệ</p>
                                </li>
                            </Button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default NavBar;