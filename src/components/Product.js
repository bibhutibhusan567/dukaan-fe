import React from "react";
import array from '../images/Dashboard/Array.js';

export default function Products(props) {
    return (
        <div className="product">
            {
                array[props.index].map((product, idx) => {
                    return (
                        <div key={idx} style={{ background: "white", borderRadius: "8px", minWidth: "32%", marginBottom: "15px" }}>
                            <div style={{ marginLeft: "10px", marginRight: "10px" }}>
                                <span className="addWeight">{product.order}</span>{product.new === true ? (<span style={{ color: "white", background: "green", borderRadius: "3px", fontSize: "12px", marginLeft: "5px" }}>NEW</span>) : null}
                                <span style={{ color: "#808080", float: "right" }}>{product.time}</span>
                            </div>

                            <div className="productDiv">
                                <img className="divMargin" src={product.src} alt="" />
                                <div style={{ width: "100%" }}>
                                    <div className="divMargin">{product.unit} item</div>
                                    <div className="weightAndMargin" style={{ color: "#146eb4" }}>&#8377;{product.price}</div>
                                    <button className="alignButton">Details {'>'}</button>
                                </div>
                            </div>

                        </div>
                    );
                })
            }
        </div>
    );
}