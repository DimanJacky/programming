import React, {useCallback, useState} from 'react';
import Search from "@/Search";

// функция для перемешивания массива
const shuffle = (array: string[]) => {
    return [...array].sort(() => Math.random() - 0.5);
};

const allUsers = ['john', 'alex', 'george', 'simon', 'james'];

export const App = () => {
    // Когда используется useCallback то кешируется вся функция, она использует значение при первом рендере
    // Чтобы это исправить нужно добавить в зависимости useCallback users

    const [users, setUsers] = useState(allUsers);

    const handleSearch = useCallback((text: string) => {
        console.log(users[0]);
        const filteredUsers = allUsers.filter((user) =>
            user.includes(text),
        );
        setUsers(filteredUsers);
    }, [users]);

    return (
        <div>
            <h1>Хуки</h1>
            <h1>useCallback некорректная работа хука</h1>

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