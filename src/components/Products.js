import React from "react";
import CountButton from './CountButton';
import productArray from '../images/landingPage/products/ProductArray';

export default function Products(props) {
    return (
        <>
            <input placeholder="Search for products…" className="search" />
            <div className="divMargin">
                <span className="addWeight">{props.optionsArray[props.index].tag}</span> <span className="highlightQuantity">{props.optionsArray[props.index].products}</span>
            </div>
            {
                productArray[props.index].map((product, idx) => {
                    return (
                        <div key={idx} className="center" style={{ margin: "10px" }}>
                            <img src={product.src} alt="" />
                            <div style={{ width: "100%" }}>
                                <div className="weightAndMargin">{product.name}</div>
                                <div className="divMargin">{product.unit} Unit</div>
                                <div className="weightAndMargin">&#8377;{product.price}</div>
                                <CountButton />
                            </div>
                        </div>
                    );
                })
            }
        </>
    );
}