<template>
  <div>
    <app-counter></app-counter>

    <app-car></app-car>
  </div>

</template>

<script>
// добавляем атрибут scoped, чтобы стили были независимыми
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
