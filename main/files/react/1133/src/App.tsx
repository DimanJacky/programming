import React, {useEffect, useMemo, useState} from 'react';

export const App = () => {
    // По нажатию кнопки Change style меняются стили и срабатывает useEffect
    // Если нажать на кнопку Increment, то тоже вызывается useEffect
    // Почему это происходит и как это исправить

    const [colored, setColored] = useState(false);
    const [count, setCount] = useState(0);

    const styles = {
        color: colored ? 'red' : 'green'
    };

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