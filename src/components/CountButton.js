import React, { useState } from "react";

export default function CountButton() {
    const [count, setCount] = useState(0);
    return (

        <div className="buttons">
            {count !== 0 ? (
                <button id="buttons" onClick={() => setCount(count - 1)}>-</button>
            ) : null}
            {count === 0 ? "ADD" : count}
            <button id="buttons" onClick={() => setCount(count + 1)}>+</button>
        </div>

    );
}