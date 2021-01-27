import React from 'react';
import navButtons from './images/Dashboard/nav/navButton';
import logo from './images/Dashboard/nav/white.png';
import verify from './images/Dashboard/verify.png';
import message from './images/Dashboard/message.png';
import Home from './components/Home';

export default function Dashboard() {

    return (
        <div id="app">
            <div className="navbar" Style={{ display: "inline" }}>
                <div className="navHeader">
                    <img src={logo} alt="" />

                    <div id="buttonsDiv" style={{ marginTop: "20px" }}>
                        {
                            navButtons.map((button, idx) => {
                                return (
                                    <button id="navButton" key={idx} >
                                        <img src={button.src} alt="" />
                                        <span style={{ marginLeft: "10%" }}>{button.tag}</span>
                                        {button.notification !== 0 ? (<span className="notification">{button.notification}</span>) : null}
                                    </button>
                                );
                            })
                        }
                    </div>
                </div>
                <div id="navFooter" >
                    <div className="center" style={{ marginLeft: "10%", marginTop: "5px" }}>Need any help?</div>
                    <div className="center" style={{ marginLeft: "10%" }}>Chat with us</div>
                </div>
            </div>
            <div className="rightDivs" >
                <div id="topHeader" className="center">
                    <span style={{ fontWeight: "bold", fontSize: "20px", marginLeft: "3%" }}>Mano Super Market</span>
                    <img src={verify} alt="" style={{ marginLeft: "2%" }} />
                    <img src={message} alt="" style={{ marginLeft: "55%", height: "28px", width: "113px" }} />
                </div>
                <div id="productDiv">
                    <Home />
                </div>
            </div>
        </div>
    );
}