<template>
  <div>
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
// Ответ
// У каждого компонента есть метод $emit
// передается название события, которое будет прослушиваться
// и значение nameChanged
// в главном компоненте поставить директиву v-on:nameChanged или @nameChanged
// и далее запустить метод изменения
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
