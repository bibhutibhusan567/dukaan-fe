import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import whatsapp from '../images/Dashboard/whatsapp.png';
import facebook from '../images/Dashboard/facebook.png';
import twitter from '../images/Dashboard/twitter.png';
import Product from './Product';

export default function Home() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownText, setDropdownText] = useState("Last Month");
    const [index, setIndex] = useState(0);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <div style={{ margin: "20px" }} className="flexCol">
            <div id="firstDiv" className="center" style={{ textAlign: "left" }}>
                <span className="addWeight" style={{ marginLeft: "2%" }}>Share store link</span>
                <Dropdown isOpen={dropdownOpen} toggle={toggle}
                    style={{ marginLeft: "67%", background: "white", }}
                >
                    <DropdownToggle caret style={{ background: "white", color: "black" }}>
                        {dropdownText}
                    </DropdownToggle>
                    <DropdownMenu >
                        <DropdownItem onClick={() => setDropdownText("Last Day")}>Last Day</DropdownItem>
                        <DropdownItem onClick={() => setDropdownText("Last Week")}>Last Week</DropdownItem>
                        <DropdownItem onClick={() => setDropdownText("Last Month")}>Last Month</DropdownItem>
                        <DropdownItem onClick={() => setDropdownText("Last Year")}>Last Year</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <div className="flexRow">
                <div style={{ width: "35%" }} className="backgroundAndHeight">
                    <div className="font">Your customers can visit your online store and place the orders from this link.</div>
                    <a href=" " style={{ color: "#ee741f", margin: "10px" }} >mydukaan.io/manosupermarket</a>
                    <div className="font">Share via</div>
                    <div>
                        <img src={whatsapp} alt="" />
                        <img src={facebook} alt="" style={{ margin: "10px" }} />
                        <img src={twitter} alt="" />
                    </div>
                </div>
                <div className="flexCol" style={{ width: "30%" }}>
                    <div className="backgroundAndHeight" >
                        <div className="font">ORDERS</div>
                        <div className="addWeight">192</div>
                    </div>
                    <div className="backgroundAndHeight">
                        <div className="font">STORE VIEWS</div>
                        <div className="addWeight">96</div>
                    </div>
                </div>
                <div className="flexCol" style={{ width: "30%" }}>
                    <div className="backgroundAndHeight">
                        <div className="font">TOTAL SALES</div>
                        <div className="addWeight">₹1,55,920</div>
                    </div>
                    <div className="backgroundAndHeight">
                        <div className="font">PRODUCT VIEWS</div>
                        <div className="addWeight">2,313</div>
                    </div>
                </div>
            </div>

            <div style={{ marginLeft: "3%", marginTop: "2%" }}>
                <span className="addWeight">Active Orders</span>
                <span className="view">View All{'>'}</span>
            </div>
            <div className="homeButtons">
                <button onClick={() => setIndex(0)}>Pending (12)</button>
                <button onClick={() => setIndex(1)}>Accepted (33)</button>
                <button onClick={() => setIndex(2)}>Shipped (121)</button>
            </div>
            <div>
                <Product index={index} />
            </div>
        </div >
    );
}