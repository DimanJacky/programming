import React, {useState} from 'react';

export const App = () => {
    const [show, setShow] = useState(false);
    // Задание:
    // Что выведется в консоли?

    if (show) {
        const str: any = "строка";
        console.log(str / 2);
        console.log(str + 1);
        console.log(1 / 0);
        console.log(NaN + 1);
        console.log(-1 / Infinity);
        console.log(9007199254740992 + 1);
    }

    const showAnswer = () => setShow(true);

    return (
        <div>
            <h1>javascript</h1>
            <h1>Типы данных</h1>
            <p>Действия с числами</p>
            <button onClick={showAnswer}>Показать</button>
        </div>
    );
};