import './App.css';
import {useState} from "react";

function App() {
    const [isVisibleAnswer, setIsVisibleAnswer] = useState(false);

    if (isVisibleAnswer) {
        let arr = ["a", "b"];

        arr.push(function () {
            console.log(this);
        });

        arr[2]();
    }

  return (
    <div>
        <h3>Каков результат? Почему?</h3>
        <pre>
            {
                `
let arr = ["a", "b"];

arr.push(function() {
alert( this );
});

arr[2](); // ?`
            }
        </pre>
        <div>
            <button onClick={() => setIsVisibleAnswer(prevState => !prevState)}>ответ</button>
            {
                isVisibleAnswer &&
                <div>
                    <pre>
                        {
                            `
Вызов arr[2]() синтаксически – старый добрый obj[method](), в роли obj – arr, а в роли method – 2.

Итак, у нас есть вызов функции arr[2] как метода объекта. Соответственно, он получает в качестве this объект arr и выводит массив:

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // a,b,function(){...}
                            `
                        }
                    </pre>
                </div>
            }
        </div>
    </div>
  );
}

export default App;
