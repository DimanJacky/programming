import React, {useEffect} from 'react';
import {useStateWithHistory} from "@/useStateWithHistory";

export const App = () => {
    // нужно написать хук который работает с состоянием и который запоминает историю изменений,
    // (он работает не как браузерная история) в качестве значений стейта тебе
    // может приходить переменная любого типа

    // state = 1, history = [1]

// setState(2); // state = 2 history = [1, 2]

// goBack(); // state = 1 history = [1, 2]

// setState(3); // state = 3 history = [1, 2, 3]

// goBack(); // state = 2 history = [1, 2, 3]

// goBack(); // state = 1 history = [1, 2, 3]

// goForward(); // state = 2 history = [1, 2, 3]

    const [state, setState, goBack, goForward, history] = useStateWithHistory(1);

    useEffect(() => {
        console.log('rerender');
        console.log('history', history);
        console.log('state', state);
    });

    return (
        <div>
            <h1>Кастомные хуки</h1>
            <h1>Хук состояние</h1>

            <div>{state}</div>
             {/*<div>{history.join(', ')}</div>*/}
            <button onClick={() => setState(5)}>5</button>
            <button onClick={() => setState(4)}>4</button>
            <button onClick={() => setState(3)}>3</button>
            <button onClick={() => setState(2)}>2</button>
            <button onClick={() => setState(1)}>1</button>
            <button onClick={goBack}>back</button>
            <button onClick={goForward}>forward</button>
        </div>
    );
};