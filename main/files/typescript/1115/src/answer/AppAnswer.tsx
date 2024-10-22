import React from 'react';

export const AppAnswer = () => {
    // Ответ

    let name = "Ilya";

    console.log( `hello ${1}` ); // hello 1

    console.log( `hello ${"name"}` ); // hello name

    console.log( `hello ${name}` ); // hello Ilya

    return (
        <div>
            <h1>typescript</h1>
            <h3>Типы данных</h3>
            <p>Шаблонные строки</p>
        </div>
    );
};