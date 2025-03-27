import { useState, useRef } from 'react';

const useStateWithHistory = (init: any) => {
    const historyRef = useRef([init]); // он не будет ререндериться в новых версиях
    const [id, setId] = useState(0);

    const state = historyRef.current[id];

    const setState = (arg: any) => {
        historyRef.current = [...historyRef.current.slice(0, id + 1), arg];
        setId(historyRef.current.length - 1);
    };

    const goBack = () => {
        if (id === 0) return;
        setId((prev) => prev - 1);
    };

    const goForward = () => {
        if (id === historyRef.current.length - 1) return;
        setId((prev) => prev + 1);
    };

    let history = historyRef.current;

    return [state, setState, goBack, goForward, history];
};

export { useStateWithHistory };
