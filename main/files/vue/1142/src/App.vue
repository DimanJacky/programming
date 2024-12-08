<template>
  <div>
    <h1>Компоненты</h1>
    <h1>Использование event emitter</h1>
    <h1>Parent: {{carName}}</h1>

    <app-counter :counter="counter"></app-counter>

    <app-car
      :carName="carName"
      :carYear="carYear"
      :counter="counter"
      :changeFunc="changeNameToAudi"
      @nameChanged="carName = $event"
      @counterUpdated="counter = $event"
    >
    </app-car>
  </div>

</template>

<script>
// Задание
// Переписать связь компонентов с event emitter
// чтобы все было в counter, а не передавать пропсы в дочерние компоненты

import Car from "./Car.vue";
import Counter from "./Counter.vue";

export default {
  data () {
    return {
      carName: 'Ford',
      carYear: 2018,
      counter: 0
    }
  },
  methods: {
    changeNameToAudi() {
      this.carName = 'Audi';
    }
  },
  components: {
    appCar: Car,
    appCounter: Counter
  }
}
</script>

<style>

</style>
