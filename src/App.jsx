import './App.css'
import React, { useEffect } from 'react';
import NavBar from './components/Navbar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Introduce from './pages/Introduce/Introduce';
import Footer from './components/Footer/Footer';
import Store from './pages/Store/Store';
import { AppProvider } from './Context/AppContext';
import ItemDetails from './pages/ItemDetails/ItemDetails';
import Contact from './pages/Contact/Contact';
import Farm from './pages/Farm/Farm';
import Blog from './pages/Blog/Blog';
import Account from './pages/Account/Account';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import OrderReceived from './pages/OrderReceived/OrderReceived';
import RollToTopButton from './components/ButtonComponent/RollToTopButton';
import Login from './pages/Login/Login';
import SignIn from './pages/Login/SignIn';
import SignUp from './pages/Login/SignUp';
import ForgotPassword from './pages/Login/ForgotPassword';
import ResetPasswords from './pages/Login/ResetPassword';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import StoreDisplay from './pages/Store/StoreDisplay';
import Search from './pages/Search/Search';
import ChatBox from './pages/ChatBot/ChatBox';
import BlogDetail from './pages/Blog/BlogDetail';
import AccountInfo from './pages/Account/AccountInfo';
import OrderHistory from './pages/Account/OrderHistory';
import OrderShipping from './pages/Account/OrderShipping';
function App() {
  useEffect(() => {
    const handleTabClose = (event) => {
      // localStorage.removeItem('cartNoAcc')
    }

    window.addEventListener('beforeunload', handleTabClose);

    return () => {
      window.removeEventListener('beforeunload', handleTabClose);
    }
  }, [])
  return (
    <div className="relative">
      <AppProvider>
        <ChatBox />
        <RollToTopButton />
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route>

              <Route index path="/" element={<Home />} />
              <Route path="/trang-chu" element={<Home />} />

              <Route path="/gioi-thieu" element={<Introduce />} />

              <Route path="/cua-hang" element={<Store />} />
              <Route path="/cua-hang/:tag" element={<Store />} />
              <Route path="/cua-hang/:tag/:name" element={<ItemDetails />} />

              <Route path="/lien-he" element={<Contact />} />

              <Route path="/tai-khoan" element={<Account />}>
                <Route index element={<AccountInfo />} />
                <Route path='lich-su' element={<OrderHistory />} />
                <Route path='don-hang' element={<OrderShipping />} />
              </Route>

              <Route path="/gio-hang" element={<Cart />} />
              <Route path="/thanh-toan" element={<Checkout />} />
              <Route path="/hoa-don" element={<OrderReceived />} />

              <Route path="/trang-trai" element={<Farm />} />
              <Route path="/trang-trai/:farmID" element={<Farm />} />

              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:name" element={<BlogDetail />} />

              <Route path='/dang-nhap' element={<Login />}>
                <Route index element={<SignIn />} />
                <Route path='dang-ky' element={<SignUp />} />
                <Route path='quen-mat-khau' element={<ForgotPassword />} />
                <Route path='doi-mat-khau' element={<ResetPasswords />} />
              </Route>

              <Route path='/tim-kiem/:search' element={<Search />} />

            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppProvider>
    </div>
  )
}

export default App;
