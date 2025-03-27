import React, {Fragment, useCallback, useLayoutEffect, useState} from 'react';

export const App = () => {
    // Как оптимизировать код?
    const [count, setCount] = useState(1);
    const [items, setItems] = useState([{ id: 1 }]);

    useLayoutEffect(() => {
        document.addEventListener('click', () => {
            setInterval(() => console.log(count), 1000);
        });
    });

    const click = useCallback(() => {
        setCount(count + 1);
        setItems([...items, { id: count + 1 }]);
    }, []);

    return (
        <div>
            <h1>Оптимизация</h1>
            <h1>useCallback, state, effect</h1>

            <Fragment>
                Current count: {count}
                <ul>
                    {items.map((item) => (
                        <li>{item.id}</li>
                    ))}
                </ul>
                <button onClick={() => click()}>add one</button>
            </Fragment>
        </div>
    );
};