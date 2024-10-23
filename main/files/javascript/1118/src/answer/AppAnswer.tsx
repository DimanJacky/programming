import React from 'react';

export const AppAnswer = () => {

    // выведется Message 0 - то, что внутри new Promise синхронный код
    // выведется Message 1 - синхронный код
    // идет в очередь макрозадач Message 2
    // идет в очередь микрозадач Message 3
    // идет в очередь микрозадач setTimeout(() => console.log("Message 4"))
    // идет в очередь макрозадач Message 5
    // выведется Message 6 - синхронный код

    // 0, 1, 6
    // выведется Message 3 - идет из микрозадач
    // идет в очередь макрозадач Message 4

    // 0, 1, 6, 3, 2, 5, 4

    return (
        <div>

        </div>
    );
};