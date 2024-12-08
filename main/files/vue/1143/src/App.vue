<template>
  <div>
    <h1>Компоненты</h1>
    <h1>Изолированные стили</h1>

    <app-counter></app-counter>

    <app-car></app-car>
  </div>

</template>

<script>
// Задание
// Сделать в компоненте Car border green чтобы он был только в Car
// Сделать в компоненте Counter color red чтобы он был только в Counter

import Car from "./Car.vue";
import Counter from "./Counter.vue";

export default {
  components: {
    appCar: Car,
    appCounter: Counter
  }
}
</script>

<style>

</style>
