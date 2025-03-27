import React, {useMemo, useState} from 'react';
import {initialItems} from "@/utils";

export const App = () => {
    const [count, setCount] = useState(0);
    const [items] = useState(initialItems);

    // Нужно добавить в зависимость count, чтобы данные пересчитывались
    const selectedItem = useMemo(
        () => items.find((item) => item.id === count),
        [items, count]
    );

    return (
        <div>
            <h1>Кастомные хуки</h1>
            <h1>Хук состояние</h1>

            <h1>Count: {count}</h1>
            <h1>Selected Item: {selectedItem?.id}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};