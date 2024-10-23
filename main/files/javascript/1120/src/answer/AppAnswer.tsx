import React from 'react';

export const AppAnswer = () => {

    // выведется 1 - синхронный код
    // выведется Promise - создание промиса синхронный код
    // выведется 4 - синхронный код
    // идет в очередь макрозадач timeOut
    // идет в очередь макрозадач 777 и resolve('value') с then1 и then2
    // идет в очередь макрозадач timeOut2

    // 1, Promise, 4
    // выведется timeOut
    // выведется 777
    // идет в очередь микрозадач then1 и выведется
    // идет в очередь микрозадач then2 и выведется
    // выведется timeOut2

    // 1, Promise, 4, timeOut, 777, then1, then2, timeOut2

    return (
        <div>

        </div>
    );
};