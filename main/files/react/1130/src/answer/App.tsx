import React, { useCallback, useEffect, useState } from 'react';

export const App = () => {
    const [count, setCount] = useState(1);
    const [items, setItems] = useState([{ id: 1 }]);

    useEffect(() => {
        // useEffect с очисткой: обработчик click теперь добавляется и удаляется корректно
        const handleClick = () => {
            setInterval(() => console.log(count), 1000);
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [count]); // зависимость от count, чтобы обновлять обработчик при изменении count

    const click = useCallback(() => {
        setCount(prevCount => prevCount + 1); // безопасно использовать prevState для правильного обновления
        setItems(prevItems => [...prevItems, { id: count + 1 }]); // аналогично обновляем items
    }, [count]); // зависит от count, чтобы актуализировать значение

    return (
        <div>
            <h1>Оптимизация</h1>
            <h1>items, state, effect</h1>
            <div>
                Current count: {count}
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>{item.id}</li> // добавляем уникальные ключи
                    ))}
                </ul>
                <button onClick={click}>add one</button>
            </div>
        </div>
    );
};
