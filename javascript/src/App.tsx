import React, {useState} from 'react';

export const App = () => {
    const [show, setShow] = useState(false);
    // Задание:
    // Что выведется в консоли?

    if (show) {
        const user = {
            name: 'Oleg',
            one: () => {
                return () => {
                    console.log(this)
                }
            },
            two: function () {
                return () => {
                    console.log(this)
                }
            },
            three: function() {
                return function() {
                    console.log(this)
                }
            },
            four: () => {
                return function () {
                    console.log(this)
                }
            },
        }

        user.one()();
        user.two()();
        user.three()();
        user.four()();
    }

    const showAnswer = () => setShow(true);

    return (
        <div>
            <h1>javascript</h1>
            <h1>This</h1>
            <p>This контекст в методах объекта задача 1</p>
            <button onClick={showAnswer}>Показать</button>
        </div>
    );
};