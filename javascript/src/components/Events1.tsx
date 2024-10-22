import React, { useEffect } from 'react';

export const Events1 = () => {
    const handleClick = () => {
        console.log('handleClick')
    }

    useEffect(() => {
        // Обработчик события для родительского элемента
        const main = document.getElementById('main');
        const parent = document.getElementById('parent');
        const child = document.getElementById('child');

        if (parent && child && main) {
            parent.addEventListener('click', function() {
                console.log('Parent clicked (bubbling)');
            });

            main.addEventListener('click', function(event) {
                console.log('Main clicked (bubbling)');
                const target = event.target as HTMLElement;
                // console.log('target', target)
                // console.log('Main clicked (bubbling)');
                // Если кликнули на кнопку (child)
                // if (target.id === 'child') {
                //     console.log('Child clicked');
                // }
                //
                // // Если кликнули на родителя (parent)
                // if (target.id === 'parent') {
                //     console.log('Parent clicked (bubbling)');
                // }

                // Если кликнули на самого родителя (main)
                // if (target.id === 'main') {
                //     console.log('Main clicked (bubbling)');
                // }
            });

            child.addEventListener('click', function(event) {
                event.stopPropagation();
                console.log('Child clicked');
            });

            // Добавляем событие для родительского элемента в фазе погружения
            parent.addEventListener('click', function() {
                console.log('Parent clicked (capturing)');
            }, true);

            main.addEventListener('click', function() {
                console.log('Main clicked (capturing)');
            }, true);
        }

    }, []);

    return (
        <div>
            <div id="main" style={{border: '2px solid red', padding: '20px'}}>
                Main
                <div id="parent" style={{border: '2px solid red', padding: '20px'}}>
                    Parent
                    <button id="child" style={{margin: '20px'}} onClick={handleClick}>Click me</button>
                </div>
            </div>
        </div>
    );
};
