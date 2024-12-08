<template>
  <div>
    <h1>Компоненты</h1>
    <h1>Передача HTML компоненту</h1>
    <app-car carName="Mazda"></app-car>
  </div>
</template>

<script>
// Задание
// Сейчас из App в компонент Car передается пропс Mazda, а код в Car
// Нужно удалить пропс и передать в компонент Car html-код 2 слота h2 с переменной carName Ford в слот title
// и текст p lorem 3 в слот text
// в компоненте Car принять слот title, потом сделать 2 hr, потом слот text
import Car from "./Car.vue";

export default {
  components: {
    appCar: Car,
  }
}
</script>

<style>

</style>
