import React, { useEffect } from 'react';

export const Events2 = () => {
    useEffect(() => {
        const form = document.getElementById('form');

        // Обработчик для фазы погружения
        form.addEventListener(
            'click',
            (event) => {
                console.log('Form clicked (capturing phase)');
                event.preventDefault(); // Предотвращаем действие по умолчанию
            },
            // true // Активируем фазу погружения
        );

        return () => {
            form.removeEventListener('click', () => {}, true);
        };
    }, []);

    return (
        <form id="form">
            <button id="submitButton" type="submit">Submit</button>
        </form>
    );
};
