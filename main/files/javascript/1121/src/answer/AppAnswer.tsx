import React from 'react';

export const AppAnswer = () => {

    // В модулях нет глобального объекта, this undefined
    // user.one()(); undefined, так как стрелочные функции не имеют this
    // user.two()(); объект user, так как из стрелочной функции this переходит в метод в обычную функцию
    // user.three()(); undefined, так как this берется из области видимости метода
    // user.four()(); undefined, так как this берется из области видимости метода

    return (
        <div>

        </div>
    );
};