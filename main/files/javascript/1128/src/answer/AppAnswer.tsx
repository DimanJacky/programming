import React from 'react';

export const AppAnswer = () => {
    // Ответ
    // 1) Function Declaration: функция объявляется отдельной конструкцией «function…» в основном потоке кода
    // Function Expression: функция, созданная внутри другого выражения или синтаксической конструкции

    // 2) declarFunc вызовется, так как Function Declaration может быть вызвана раньше, чем она объявлена
    // exprFunc будет ошибка, TypeError: exprFunc is not a function так как выполнение еще не дошло до функции

    // 3) funcDecl будет ошибка ReferenceError: funcDecl is not defined так как в строгом режиме
    // когда Function Declaration находится в блоке {...}, функция доступна везде внутри блока. Но не снаружи него
    // funcExpr вызовется, так как переменная объявлена снаружи, и видимость остается

    return (
        <div>

        </div>
    );
};