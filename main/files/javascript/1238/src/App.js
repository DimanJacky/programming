import './App.css';

function App() {
    // Есть объект, нужно добавить к нему геттер fullName, который возвращает полное имя John Smith
    // и сеттер fullName, который присваивает объекту name и surname

    let user = {
        name: "John",
        surname: "Smith",
    };

  return (
    <div>
        <p>Есть объект, нужно добавить к нему геттер fullName, который возвращает полное имя John Smith</p>
        <p>и сеттер fullName, который присваивает объекту name и surname</p>
    </div>
  );
}

export default App;
