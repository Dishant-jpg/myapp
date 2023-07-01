import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div style={{ display: "flex", }}>
            <div className="row" style={{ display: "inline-block", display: "flex", justifyContent: "center", height: 20, width: 100 }}>

                    <h2>Counter</h2>
                    <button onClick={decrement} style={{ backgroundColor: "lightgreen", color: "white", borderRadius: 5, fontWeight:"bold"}}>-</button>
                    <h3>{count}</h3>
                    <button onClick={increment} style={{ backgroundColor: "lightblue", color: "white", borderRadius: 5 }}>+</button>
                </div>
            </div>
        // <div className="d-flex">
        // <button className="btn btn-sucess me-3" style={{backgroundColor: "red", color: "white", borderRadius: 5 }}> Increment</button>
        // <button className="btn btn-sucess me-3" style={{backgroundColor: "green", color: "white", borderRadius: 5 }}>Decrement</button>
    );
};

export default Counter;