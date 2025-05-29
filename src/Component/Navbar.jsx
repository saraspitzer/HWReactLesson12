import React, { useContext } from 'react'
import { Link, Outlet, Route, Router, Routes, useNavigate } from 'react-router-dom'
import ContactUs from './ContactUs'
import Cart from './Cart'
import AboutUs from './AboutUs'
import MyOrder from './MyOrder'
import Products from './Products'
import Home from './Home'
import ProductInfo from './ProductInfo'
import MyContext from '../context';
const Navbar = ({setCartProducts,setSum}) => {
    const { currentUser, userLoggedIn } = useContext(MyContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        userLoggedIn(null); // אופס, התנתק — מאפס את המשתמש המחובר
        setCartProducts([]);
        setSum(0)
        navigate('/'); 
    };

    return (
        <div className="my-background">
            <nav>
                <Link to="/">Home</Link>
                <Link to="Cart">Cart</Link>
                <Link to="ContactUs">Contact us</Link>
                <Link to="AboutUs">About us</Link>
                <Link to="Products">Products</Link>
                <Link to="MyOrder">My order</Link>
                {currentUser ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <Link to="/Login">Log in</Link>
                )}
            </nav>
            {/* כאן ייכנס התוכן של כל דף */}
            <Outlet />
        </div>
    )
}

export default Navbar