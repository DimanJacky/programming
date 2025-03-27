import React, {useState} from "react";

type CounterProps = {
    initialCount: number;
}

const Counter = ({initialCount}: CounterProps) => {
    const [count, setCount] = useState<number>(initialCount);

    const increment = () => {
        setCount((count) => count + 1);
    };

    const decrement = () => {
        setCount((count) => count - 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}

export default Counter;
