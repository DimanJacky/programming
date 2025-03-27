import React from 'react';
import Counter from "@/Counter";

export const App = () => {

    return (
        <div>
            <h1>Классовые компоненты</h1>
            <h1>Перевод классового компонента в функциональный</h1>

            <Counter initialCount={7} />
        </div>
    );
};