// @ts-nocheck
import React from 'react';

export const App = () => {
    // Задание:
    // В чем отличия функций function expression и function declaration
    // 1) какая через function обозначается, какая через переменную?
    // 2) если раскомментировать одну или другую строку что будет?

    // declarFunc();
    // exprFunc();

    // 3) Если раскомментировать внизу одну или другую строку что будет?

    function declarFunc() {
        console.log('declarFunc');
    }

    const exprFunc = () => {
        console.log('exprFunc');
    }

    let funcExpr;

    if (true) {
        function funcDecl() {
            console.log('funcDecl1');
        }

        funcExpr = () => console.log('funcExpr1');
    } else {
        function funcDecl() {
            console.log('funcDecl2');
        }

        funcExpr = () => console.log('funcExpr2');
    }

    // funcDecl();
    // funcExpr();

    return (
        <div>
            <h1>javascript</h1>
            <h1>Функции</h1>
            <p>Отличие function declaration от function expression</p>
        </div>
    );
};