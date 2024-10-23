import React, {useState} from 'react';

export const App = () => {
    const [show, setShow] = useState(false);
    // Задание:
    // Что выведется в консоли?

    if (show) {
        setTimeout(() => {
            console.log("timeOut");
        }, 0)

        console.log(1);

        new Promise(resolve => {
            console.log("Promise");
            setTimeout(() => {
                console.log(777);
                resolve('value')
            },0)
        }).then(() => {
            console.log("then1");
        }).then(() => {
            console.log("then2");
        })

        console.log(4);

        setTimeout(() => {
            console.log("timeOut2");
        },0)
    }

    const showAnswer = () => setShow(true);

    return (
        <div>
            <h1>javascript</h1>
            <h1>Event loop</h1>
            <p>Event loop задача 3</p>
            <button onClick={showAnswer}>Показать</button>
        </div>
    );
};