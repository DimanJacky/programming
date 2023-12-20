import './App.css';
import {useEffect, useRef, useState} from "react";

function App() {
    const [chapterArray, setChapterArray] = useState([]);
    const [lessonsChapter, setLessonsChapter] = useState({});
    console.log('lessonsChapter', lessonsChapter)

    const isMounted = useRef(true); // Используем useRef для отслеживания момента размонтирования компонента

    console.log('chapterArray', chapterArray)

    const selectHandler = (event) => {
        console.log('event.target.value', event.target.value)
        const selectChapterData = chapterArray.find((chapter) => chapter?.name === event.target.value);
        setLessonsChapter(selectChapterData);
    }

    const choiceHandler = async () => {
        try {
            try {
                const chapter = document.querySelector('#chapter').value;
                console.log('chapter', chapter)
                const lesson = document.querySelector('#lesson').value;
                console.log('lesson', lesson)

                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({chapter, lesson})
                };

                let response;

                console.log('isMounted.current', isMounted.current)

                // if (!isMounted.current) {
                //     return; // Если компонент размонтирован, не обновляем состояние
                // } else {
                    response = await fetch('http://localhost:5001/api/v1/pp-delivery/issuance-np-card-in-tp/start', options);
                // }

                const data = await response.json();
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        } catch (e) {

        }
    }

    const chooseLesson = (name) => {
        document.querySelector('#lesson').value = name;
    }

    useEffect(() => {
        const getData = async () => {
            try {
                let response;

                if (!isMounted.current) {
                    return; // Если компонент размонтирован, не обновляем состояние
                } else {
                    response = await fetch('http://localhost:5001/api/v1/start', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({})
                    });
                }

                const data = await response.json();
                setChapterArray(data?.dir)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        getData();

        return () => {
            isMounted.current = false; // Устанавливаем isMounted в false при размонтировании
        };
    }, [])

  return (
    <div>
        <h1>Auth Page</h1>
        <label>Раздел</label><br />
        <select name="chapter" id="chapter" onChange={selectHandler}>
            <option value="Выберите раздел">Выберите раздел</option>
            {
                chapterArray?.length > 0 && chapterArray.map((lesson, i) => (<option value={lesson.name} key={i}>{lesson.name}</option>))
            }
        </select><br />
        <input type="text" name="lesson" id="lesson" /><br />

        <button onClick={choiceHandler}>Выбрать</button>
        {
            lessonsChapter?.subfolders && lessonsChapter?.subfolders.map((lesson, i) => (
                <>
                    <h3>
                        {lesson.theme}
                    </h3>
                    <div key={i} onClick={() => chooseLesson(lesson.folderName)}>
                        {lesson.name}
                    </div>
                </>
            ))
        }
    </div>
  );
}

export default App;
