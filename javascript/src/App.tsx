import React, {useState} from 'react';

export const App = () => {
    const [show, setShow] = useState(false);
    // Задание:
    // Что выведется в консоли?

    function printNumbers(num: any) {
        if (num <= 0) return;

        printNumbers(Math.floor(num) - 1);
        console.log(Math.floor(num) - 1);
    }

    console.log(printNumbers(7))

    return (
        <div>
            <h1>javascript</h1>
            <h1>This</h1>
            <p>This контекст в методах объекта задача 1</p>
            <button onClick={() => {}}>Показать</button>
        </div>
    );
};