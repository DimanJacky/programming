import React, {useState} from 'react';

export const App = () => {
    const [show, setShow] = useState(false);
    // Задание:
    // Что выведется в консоли?

    if (show) {
        console.log(1);
        setTimeout(() => console.log(2));
        Promise.resolve().then(() => console.log(3));
        Promise.resolve().then(() => setTimeout(() => console.log(4)));
        Promise.resolve().then(() => console.log(5));
        setTimeout(() => console.log(6));
        console.log(7);
    }

    const showAnswer = () => setShow(true);

    return (
        <div>
            <h1>javascript</h1>
            <h1>Event loop</h1>
            <p>Event loop задача 2</p>
            <button onClick={showAnswer}>Показать</button>
        </div>
    );
};