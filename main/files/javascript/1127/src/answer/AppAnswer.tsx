import React from 'react';

export const AppAnswer = () => {
    // Ответ
    // 1) У объекта a есть свойство-конструктор оно указывает на функцию - конструктор Letter.
    // Оно находится в прототипе объекта a в Letter.prototype
    // a.constructor === Letter; // true
    // у всех функций кроме стрелочных есть свойство prototype, которое изначально пустой объект
    // но его можно дополнить свойствами и методами, которые будут доступны всем объектам, созданным через new с этой функцией

    // 2) Метод getNumber находится в Letter.prototype

    // 3) a -> Letter.prototype -> Object.prototype -> null

    // 4) Letter -> Function.prototype -> Object.prototype -> null

    // 5) Не будет отличий

    // 6) a.constructor.toString() вернет class
    // классы в JavaScript нельзя вызвать без new
    // Код внутри классов всегда выполняется в строгом режиме
    // Методы, добавленные в класс, не являются перечисляемыми

    return (
        <div>

        </div>
    );
};