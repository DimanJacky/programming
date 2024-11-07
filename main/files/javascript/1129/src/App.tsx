// @ts-nocheck
import React from 'react';

export const App = () => {
    // Задание:
    // 1) Что выведет код 1) и почему?
    // 2) Что выведет этот код 2) и почему?
    // 3) Что выведет этот код 3) и почему?
    // 4) Какая здесь ошибка 4), и как исправить?

    const user = {
        name: 'User'
    }

    const func = () => console.log(this.name)

    // func.bind(user)(); // 1)

    const Letter = (name) => {
        this.name = name;
    }

    // const a = new Letter();

    // console.log(a); // 2)

    const arg = () => {
        console.log(arguments);
    }

    // arg(); // 3)

    class Animal {
        run() {
            console.log('Animal');
        }
    }

    class Rabbit extends Animal {
        run() {
            setTimeout(function() {
                // return super.run(); // 4)
            }, 1000);
        }
    }

    const rabbit = new Rabbit();

    rabbit.run();

    return (
        <div>
            <h1>javascript</h1>
            <h1>Функции</h1>
            <p>Стрелочные функции и отличия</p>
        </div>
    );
};