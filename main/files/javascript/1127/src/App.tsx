// @ts-nocheck
import React from 'react';

export const App = () => {
    // Задание:
    // Объект a создан с помощью функции-конструктора Letter
    // 1) У объекта a есть конструктор, где он находится? Если есть на что он указывает?
    // 2) Метод getNumber где находится у объекта a?
    // 3) Сказать всю цепочку прототипов от объекта a
    // 4) Сказать всю цепочку прототипов от функции-конструктора Letter

    // 5) Если создавать с помощью класса, будут ли отличия в прототипах?
    // 6) Какие есть отличия создания объектов с помощью класса и с помощью функции конструктора

    function Letter(number) {
        this.number = number;
    }

    Letter.prototype.getNumber = function () {
        return this.number;
    }

    let a = new Letter(1);

    class Letter1 {
        constructor(number) {
            this.number = number;
        }

        getNumber() {
            return this.number;
        }
    }

    const c = new Letter1(5);

    console.log('a', a);
    console.log('c', c);

    return (
        <div>
            <h1>javascript</h1>
            <h1>Объекты</h1>
            <p>Свойства</p>
        </div>
    );
};