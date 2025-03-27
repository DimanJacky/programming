import React, {useEffect} from 'react';
import {useStateWithHistory} from "@/useStateWithHistory";

export const App = () => {
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