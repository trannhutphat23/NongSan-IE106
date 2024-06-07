import React, { useState, createContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {

    const params = useParams()

    const [breadcrumb, setBreadcrumb] = useState({
        main: "",
        second: "",
        child: 0,
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
    })

    const [paymentState, setPaymentState] = useState({
        tempPrice: null,
        discount: null,
        totalPrice: null,
        from: null
    })

    const [farms, setFarms] = useState([])
    const [items, setItems] = useState([])
    const [order, setOrder] = useState([])
    const [cart, setCart] = useState([])
    const [navigateStore, setNavigateStore] = useState(false)

    //farm
    const fetchFarm = () => {
        axios.get("http://localhost:8082/farms")
            .then((res) => {
                setFarms(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    //cart
    const fetchCart = () => {
        if (localStorage.user) {
            const userObj = JSON.parse(localStorage.user)
            const userId = userObj._id;
            axios.get(`http://localhost:8082/carts/${userId}`)
                .then((res) => {
                    setCart(res.data.items)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    //item
    const fetchItem = () => {
        axios.get("http://localhost:8082/items")
            .then((res) => {
                setItems(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const getPaymentState = (data) => {
        setPaymentState(data);
    };

    useEffect(() => {
        fetchFarm()
        fetchItem()
        fetchCart()
    }, [])

    function RollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        RollToTop()
    }, [params])


    return <AppContext.Provider value={{
        breadcrumb, setBreadcrumb,
        farms, setFarms, fetchFarm,
        items, setItems, fetchItem,
        cart, setCart, fetchCart,
        order, setOrder,
        paymentState, setPaymentState, getPaymentState,
        navigateStore, setNavigateStore,
    }}>
        {children}
    </AppContext.Provider>
}