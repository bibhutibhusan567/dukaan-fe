import React, { useState } from 'react';
import logo from './images/landingPage/logo.png';
import walmart from './images/landingPage/walmart.png';
import easyReturn from './images/landingPage/icons-easyreturns.png';
import protection from './images/landingPage/icons-protection.png';
import support from './images/landingPage/icons-support.png';
import bag from './images/landingPage/navicons-bag-inactive.png';
import order from './images/landingPage/navicons-orders-inactive.png';
import Options from './components/Options';
import Products from './components/Products';
import Cart from './components/Cart';

const optionsArray = [
    { tag: "Bestsellers", products: 10 },
    { tag: "Pizza Specials", products: 21 },
    { tag: "Singles Value Combos", products: 311 },
    { tag: "Match Combos", products: 191 },
    { tag: "Pastas by Firangi Bake", products: 31 },
    { tag: "Midnight Sale", products: 59 }
];

export default function LandingPage() {
    const [index, setIndex] = useState(0);
    const [option, setOption] = useState(0);

    return (
        <div className="app">
            <div id="header" className="center">
                <span className="store">Store made with</span>
                <img className="logo" src={logo} alt="" />
                <span className="downloadApp"  >DOWNLOAD APP</span>
            </div>

            <div id="info" className="center">
                <img className="walmart" src={walmart} style={{ height: "52px", width: "52px" }} alt="" />
                <span id="market" className="addWeight">Mano Super Market and the name</span>
                <span className="bag" onClick={() => setOption(0)}><img src={bag} alt="" />Bag</span>
                <span className="orders" onClick={() => setOption(1)}><img src={order} alt="" />Orders</span>
            </div>
            <div className="main">
                <div className="options">
                    <Options
                        setIndex={setIndex}
                        optionsArray={optionsArray} />
                </div>
                <div className="products">
                    <Products
                        optionsArray={optionsArray}
                        index={index} />
                </div>
                <div className="cart">
                    <Cart option={option} />
                </div>
            </div>
            <div className="footer">
                <br />
                <br />
                <div className="footerTop">
                    <img src={easyReturn} alt="" />
                    <img src={protection} alt="" style={{ marginLeft: "5%" }} />
                    <img src={support} alt="" />
                </div>

                <div className="footerTop" >
                    <span >Free Delivery (above Rs500)</span>
                    <span>Buyer Protection</span>
                    <span>Customer Support</span>
                </div>
                <br />
                <div id="line" className="footerBottom"></div>

                <br />
                <div className="footerBottom">STORE DETAILS</div>
                <div className="footerBottom">Mano Super Market</div>
                <div className="footerBottom">Krishvi Terazzo, 80 Feet Road Indiranagar, Bengaluru, Karnataka</div>
                <br />
            </div>
        </div >
    );
}