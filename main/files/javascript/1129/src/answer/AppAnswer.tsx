import React from 'react';

export const AppAnswer = () => {
    // Ответ
    // 1) будет ошибка TypeError, так как у стрелочных функций нет this
    // она ничего не привязывает. У функции просто нет this

    // 2) будет ошибка TypeError, так как стрелочные функции нельзя использовать с new
    // они не могут быть использованы как конструкторы

    // 3) undefined Стрелочные функции не имеют «arguments»
    // Это отлично подходит для декораторов, когда нам нужно пробросить вызов с текущими this и arguments

    // 4) У стрелочных функций нет super
    // При обращении к super стрелочной функции он берётся из внешней функции
    // Здесь в обычной функции контекст this не указывает на экземпляр класса Rabbit.
    // Вместо этого, он будет указывать на глобальный объект
    // Здесь можно внутреннюю функцию в методе изменить на стрелочную

    class Animal {
        run() {
            console.log('Animal');
        }
    }

    class Rabbit extends Animal {
        run() {
            setTimeout(() => super.run(), 1000);
        }
    }

    const rabbit = new Rabbit();

    rabbit.run();

    return (
        <div>

        </div>
    );
};