<template>
  <div>
    <h1>Компоненты</h1>
    <h1>Связь дочерних компонентов</h1>
    <h1>Parent: {{carName}}</h1>

    <app-counter :counter="counter"></app-counter>

    <app-car
      :carName="carName"
      :carYear="carYear"
      :counter="counter"
      :changeFunc="changeNameToAudi"
      @nameChanged="carName = $event"
    >
    </app-car>
  </div>

</template>

<script>
// Задание
// Нужно подключить компонент Counter к App
// и в компоненте Car нужно по нажатию на кнопку Update counter менять counter

import Car from "./Car.vue";

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
    appCar: Car
  }
}
</script>

<style>

</style>
