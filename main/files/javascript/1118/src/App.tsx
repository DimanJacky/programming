import React, {useState} from 'react';

export const App = () => {
    const [show, setShow] = useState(false);
    // Задание:
    // Что выведется в консоли?

    if (show) {
        new Promise((resolve) => {
            console.log("Message 0");
        });

        console.log("Message 1");

        setTimeout(() => console.log("Message 2"));

        Promise.resolve()
            .then(() => console.log("Message 3"))
            .then(() => setTimeout(() => console.log("Message 4")));

        setTimeout(() => console.log("Message 5"));

        console.log("Message 6");
    }

    const showAnswer = () => setShow(true);

    return (
        <div>
            <h1>javascript</h1>
            <h1>Event loop</h1>
            <p>Event loop задача 1</p>
            <button onClick={showAnswer}>Показать</button>
        </div>
    );
};