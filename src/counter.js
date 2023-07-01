import React, { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="display-flex justify-content-center align-items-center" style={{ height: "100vh"}}>
            <div>
                <p>{count}</p>
                <div className="d-flex">
                    <button className="btn btn-sucess me-3" style={{backgroundColor: "red", color: "white", borderRadius: 5 }}> Increment</button>
                    <button className="btn btn-sucess me-3" style={{backgroundColor: "green", color: "white", borderRadius: 5 }}>Decrement</button>
                </div>
            </div>
        </div>
    )
}