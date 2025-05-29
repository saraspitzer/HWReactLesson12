import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import ContactUs from './ContactUs'
import Cart from './Cart'
import AboutUs from './AboutUs'
import MyOrder from './MyOrder'
import Products from './Products'
const Home = () => {
    return (
        <div>
            <div>
                <h1>Welcome to the World of Sushi!</h1>
                <p>With us, you’ll find the perfect combination of Japanese tradition and modern flavors, with an emphasis on freshness, quality, and artistic precision.   Our sushi is sliced with love and served with passion to give you a unique culinary experience – whether you're a sophisticated sashimi lover or excited to discover new rolls.   So sit back, order your favorite dish, and let us take you on a magical journey of flavors.
                </p>
            </div>
        </div>
    );
};

export default Home