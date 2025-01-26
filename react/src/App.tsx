import React from "react";

export const App = () => {

    //#region
    /* Это Ката задумано как небольшое испытание для моих учеников.

    Задание All Star Code # 18

    Создайте функцию, которая принимает 2 строковых аргумента и возвращает целое число из количества вхождений, которое второй аргумент находится в первом.

    Если вхождения не могут быть найдены, должно быть возвращено значение 0.

    ("Hello", "o")  ==>  1
    ("Hello", "l")  ==>  2
    ("", "z")       ==>  0

    Примечания:
    Первый аргумент может быть пустой строкой
    Второй строковый аргумент всегда будет иметь длину 1 */
//#endregion

    function strCount(str, letter) {

    }

    console.log(strCount('Hello', 'o')); // 1
    console.log(strCount('Hello', 'l')); // 2
    console.log(strCount('', 'z')); // 0
    console.log(strCount('Alexandr', 'a')); // 1
    console.log(strCount('Anna', 'n')); // 2

    return (
        <div className="App">

        </div>
    );
}