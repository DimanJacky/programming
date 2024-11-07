import React from 'react';

export const AppAnswer = () => {

    // В модулях нет глобального объекта, this в строгом режиме undefined


    // user.one()(); undefined, так как стрелочные функции не имеют this и нельзя привязать

    // user.two()(); объект user, так как из стрелочной функции this переходит в метод в обычную функцию

    // user.three()(); undefined, так как user.three() возвращает обычную функцию и если ее вызвать user.three()(), то у нее нет this
    // можно привязать this, так как внутренняя обычная фукнция
    // user.three().call(user) или user.three().bind(user)();

    // user.four()(); undefined, так как user.four() возвращает обычную функцию и если ее вызвать user.three()(), то у нее нет this
    // можно привязать this, так как внутренняя обычная фукнция
    // user.four().call(user) или user.four().bind(user)();

    return (
        <div>

        </div>
    );
};