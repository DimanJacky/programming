import React, {useState} from 'react';

export const App = () => {
    const [show, setShow] = useState(false);
    // Задание:
    // Что выведется в консоли?

    if (show) {
        const user = {
            email: "my@email.com",
            // @ts-ignore
            updateEmail: email => {
                // @ts-ignore
                this.email = email
            }
        }

        user.updateEmail("new@email.com")
        console.log(user.email)
    }

    const showAnswer = () => setShow(true);

    return (
        <div>
            <h1>javascript</h1>
            <h1>This</h1>
            <p>This контекст в методах объекта задача 2</p>
            <button onClick={showAnswer}>Показать</button>
        </div>
    );
};