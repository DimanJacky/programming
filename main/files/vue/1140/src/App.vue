<template>
  <div>
    <h1>Компоненты</h1>
    <h1>Передача функции как параметр</h1>
    <h1>Parent: {{carName}}</h1>

    <app-car
      :carName="carName"
      :carYear="carYear"
      @nameChanged="carName = $event"
    >
    </app-car>
  </div>

</template>

<script>
// Задание
// Нужно передать в компонент Car функцию, которая меняет carName changeNameToAudi как changeFunc
// В Car нужно по нажатию на кнопку Change from parent вызвать эту функцию
import Car from "./Car.vue";

export default {
  data () {
    return {
      carName: 'Ford',
      carYear: 2018
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
