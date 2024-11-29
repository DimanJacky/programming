import React, { useState, useEffect } from "react";

export const App = () => {
    const [iterate, setIterate] = useState(0);
    useEffect(() => {
        console.log("начало выполнения", iterate);
        return () => {
            
            setIterate(iterate + 1);
            console.log("конец выполнения", iterate);
        };
    }, [iterate]);
    return (
        <div className="App">
            <button onClick={() => setIterate(iterate + 1)}>+</button>
        </div>
    );
}