import React from 'react';

export const App = () => {
    // Задание
    // Что выведет этот скрипт?

    let name = "Ilya";

    console.log( `hello ${1}` ); // ?

    console.log( `hello ${"name"}` ); // ?

    console.log( `hello ${name}` ); // ?

    return (
        <div>
            <h1>typescript</h1>
            <h3>Типы данных</h3>
            <p>Шаблонные строки</p>
        </div>
    );
};