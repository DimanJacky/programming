import React from 'react';

export const AppAnswer = () => {

    // user.updateEmail("new@email.com") когда вызовется метод будет ошибка, так как this будет undefined
    // так как у стрелочной функции нет this и у undefined нет свойства email
    // console.log(user.email)

    return (
        <div>

        </div>
    );
};