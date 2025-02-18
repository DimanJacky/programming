import './App.css';
import {useEffect, useRef, useState} from "react";

function App() {
    const [chapterArray, setChapterArray] = useState([]);
    const [lessonsChapter, setLessonsChapter] = useState({});
    const [groupedLessons, setGroupedLessons] = useState({});
    const [choiseDisable, setChoiseDisable] = useState(true);
    const [newLessonDisable, setNewLessonDisable] = useState(true);

    const [themeText, setThemeText] = useState('');
    const [newlessonText, setNewlessonText] = useState('');

    const onChangeThemeText = (newThemeText) => {
        setThemeText(newThemeText.target.value);
    }

    const onChangeNewlessonText = (newlessonText) => {
        setNewlessonText(newlessonText.target.value);
    }

    const isMounted = useRef(true); // Используем useRef для отслеживания момента размонтирования компонента

    const selectHandler = (event) => {
        const selectChapterData = chapterArray.find((chapter) => chapter?.name === event.target.value);
        setLessonsChapter(selectChapterData);
        const groupedData = {};
        selectChapterData.subfolders.forEach(item => {
            const theme = item.theme;

            if (!groupedData[theme]) {
                groupedData[theme] = [];
            }

            groupedData[theme].push(item);
        });
        const resultArray = Object.keys(groupedData).map(theme => ({
            theme: theme,
            data: groupedData[theme]
        }));
        setGroupedLessons(resultArray);
    }

    const choiceHandler = async () => {
        try {
            try {
                const chapter = document.querySelector('#chapter').value;
                const lesson = document.querySelector('#lesson').value;

                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({chapter, lesson})
                };

                let response;

                    response = await fetch('http://localhost:5001/api/v1/pp-delivery/issuance-np-card-in-tp/start', options);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        } catch (e) {

        }
    }

    const createHundler = async () => {
        const chapter = document.querySelector('#chapter').value.trim();
        const theme = document.querySelector('#theme').value.trim();
        const newlesson = document.querySelector('#newlesson').value.trim();

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({chapter, theme, newlesson})
        };

        let response;

        response = await fetch('http://localhost:5001/api/v1/create', options);
    }

    const editHundler = async () => {
        const chapter = document.querySelector('#chapter').value.trim();
        const theme = document.querySelector('#theme').value.trim();
        const newlesson = document.querySelector('#newlesson').value.trim();
        const folderLesson = document.querySelector('#lesson').value.trim();

        const edit = window.confirm(`Вы хотите отредактировать в разделе ${chapter} в теме ${theme} урок ${newlesson}?`);
        if (!edit) {
            return;
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({chapter, theme, newlesson, folderLesson})
        };

        let response;

        response = await fetch('http://localhost:5001/api/v1/edit', options);
    }

    const chooseLesson = (e, name) => {
        document.querySelectorAll('.lesson').forEach(el => el.style.background = '#ffffff');
        e.target.style.background = '#eeeeee';
        document.querySelector('#lesson').value = name;
        setChoiseDisable(false);
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
        <div style={{position: "fixed", top: 0, background: '#ffffff', width: '100%'}}>
            <h1>Auth Page</h1>
            <label>Раздел</label><br />
            <select name="chapter" id="chapter" onChange={selectHandler}>
                <option key={0} value="Выберите раздел">Выберите раздел</option>
                {
                    chapterArray?.length > 0 && chapterArray.map((lesson, i) => (<option value={lesson.name} key={lesson.id}>{lesson.name}</option>))
                }
            </select><br />
            <input type="text" name="lesson" id="lesson" /><br />

            <button disabled={choiseDisable} onClick={choiceHandler}>Выбрать</button>

            <div>
                <label>Создать новый</label><br />
                тема <input type="text" name="theme" id="theme" value={themeText} onInput={onChangeThemeText}/><br />
                название <input type="text" name="newlesson" id="newlesson" value={newlessonText}
                                onInput={onChangeNewlessonText}/><br />
                <button disabled={!newlessonText || !themeText} onClick={createHundler}>Создать</button><br />
                <button disabled={choiseDisable} onClick={editHundler}>Редактировать</button>
            </div>
        </div>
        <div style={{marginTop: '300px'}}>
            {
                groupedLessons.length > 0 && groupedLessons?.map((lessons, i) => {
                    return (
                        <div key={i}>
                            <h3>
                                {lessons.theme}
                            </h3>
                            {
                                lessons.data.map(item => {
                                    return (<div className="lesson" key={item.id} onClick={(e) => chooseLesson(e, item.folderName)}>
                                        {item.name}
                                    </div>)
                                })
                            }

                        </div>
                    )
                })
            }
        </div>
    </div>
  );
}

export default App;
