import React, {useMemo, useState} from 'react';
import {initialItems} from "@/utils";

export const App = () => {
    const [count, setCount] = useState(0);
    const [items] = useState(initialItems);

    // Нужно обернуть selectedItem в useMemo, чтобы он зависел только от изменения items
    const selectedItem = useMemo(
        () => items.find((item) => item.id === count),
        [items]
    );

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