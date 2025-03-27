import React, {useCallback, useState} from 'react';
import Search from "@/Search";

// функция для перемешивания массива
const shuffle = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
};

const allUsers = ['john', 'alex', 'george', 'simon', 'james'];

export const App = () => {
    // Нужно обернуть handleSearch в useCallback, тогда Search не будет ререндериться при нажатии shuffle

    const [users, setUsers] = useState(allUsers);

    const handleSearch = useCallback((text: string) => {
        const filteredUsers = allUsers.filter((user) =>
            user.includes(text),
        );
        setUsers(filteredUsers);
    }, []);

    return (
        <div>
            <h1>Хуки</h1>
            <h1>useCallback лишние ререндеры компонента</h1>

            <button onClick={() => setUsers(shuffle(allUsers))}>Shuffle</button>

            <Search onChange={handleSearch} />

            <ul>
                {users.map((user) => (
                    <li key={user}>{user}</li>
                ))}
            </ul>

        </div>
    );
};