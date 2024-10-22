import React from 'react';

export const AppAnswer = () => {
    // Ответ

    let name = "Ilya";

    console.log( `hello ${1}` ); // hello 1

    console.log( `hello ${"name"}` ); // hello name

    console.log( `hello ${name}` ); // hello Ilya

    return (
        <div>
            <h1>javascript</h1>
            <h1>Типы данных</h1>
            <p>Шаблонные строки</p>
        </div>
    );
};