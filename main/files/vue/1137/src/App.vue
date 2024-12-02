<template>
  <div>
    <h1>Компоненты</h1>
    <h1>Передача параметров компоненту</h1>
    <h1>{{msg}}</h1>

    <app-car></app-car>
  </div>

</template>

<script>
// Задание
// carName и carYear передавать в Car.vue пропсами из App.vue
// добавить стили в Car в div добавить border green
import Car from "./Car.vue";

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    appCar: Car
  }
}
</script>

<style>

</style>
