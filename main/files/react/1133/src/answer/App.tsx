import React, {useEffect, useMemo, useState} from 'react';

export const App = () => {
    // При изменении count вызывается рендер, создается новый объект
    // useEffect смотрит за старым объектом styles, он видит что он изменился,
    // так как в js объекты не равны если их сравнивать, и вызывает функцию
    // можно styles обернуть в useMemo и добавить зависимость colored

    const [colored, setColored] = useState(false);
    const [count, setCount] = useState(0);

    const styles = useMemo(() => ({
        color: colored ? 'red' : 'green'
    }), [colored]);

    useEffect(() => {
        console.log('Styles changed');
    }, [styles]);

    return (
        <div>
            <h1>Хуки</h1>
            <h1>useMemo лишние вызовы useEffect</h1>

            <h1 style={styles}>Text</h1>
            <h1>Count: {count}</h1>
            <button onClick={() => setColored(prevState => !prevState)}>Change style</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
        </div>
    );
};