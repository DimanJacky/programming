import React, {useMemo, useState} from 'react';
import {initialItems} from "@/utils";

export const App = () => {
    // Понять в чем проблема и исправить

    const [count, setCount] = useState(0);
    const [items] = useState(initialItems);

    const selectedItem = items.find((item) => item.isSelected);

    return (
        <div>
            <h1>Хуки</h1>
            <h1>useMemo мемоизация</h1>

            <h1>Count: {count}</h1>
            <h1>Selected Item: {selectedItem?.id}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};