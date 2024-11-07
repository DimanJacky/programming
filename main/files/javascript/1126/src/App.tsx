import React, {useState} from 'react';

export const App = () => {
    // Задание:
    // Добавить объекту свойство "likes birds" со значением 1
    // Добавить объекту свойство prop2 через вычисляемое свойство со значением 1
    // Проверить существует ли свойство prop2

    const per = "prop2";

    const obj = {
        prop1: 1
    }
    console.log(obj);

    return (
        <div>
            <h1>javascript</h1>
            <h1>Объекты</h1>
            <p>Свойства</p>
        </div>
    );
};