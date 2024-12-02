<template>
  <div>
    <h1>Компоненты</h1>
    <h1>Передача параметров от дочернего компонента</h1>
    <h1>Parent: {{carName}}</h1>

    <app-car
      :carName="carName"
      :carYear="carYear"
    >
    </app-car>
  </div>

</template>

<script>
// Задание
// В компоненте Car по нажатию кнопки меняется carName
// но только в Car и не меняется в App
// как сделать чтобы по нажатию кнопки менялся еще и в App?
import Car from "./Car.vue";

export default {
  data () {
    return {
      carName: 'Ford',
      carYear: 2018
    }
  },
  components: {
    appCar: Car
  }
}
</script>

<style>

</style>
