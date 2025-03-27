import React, {useCallback, useState} from 'react';
import Search from "@/Search";

// функция для перемешивания массива
const shuffle = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
};

const allUsers = ['john', 'alex', 'george', 'simon', 'james'];

export const App = () => {
    // Если вводить буквы в input, будут фильтроваться пользователи, Search будет перерендериваться, это нормально
    // Потом можно стереть буквы и нажать shuffle
    // Компонент Search так же будет перерендериваться, хотя пропс onChange не меняется
    // В Search есть memo, который не перерендеривает компонент, если не менялись пропсы
    // Как можно исправить?

    const [users, setUsers] = useState(allUsers);

    const handleSearch = (text: string) => {
        const filteredUsers = allUsers.filter((user) =>
            user.includes(text),
        );
        setUsers(filteredUsers);
    };

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