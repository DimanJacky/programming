<template>
  <div>
    <h1>Компоненты</h1>
    <h1>Валидация входящих параметров</h1>
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
// Нужно сделать валидацию входящих параметров
// В компоненте Car принимать пропсы через объект
// Сделать обычную валидацию и у пропса carName расширить валидацию
// И указать Default name
import Car from "./Car.vue";

export default {
  data() {
    return {
      carName: 'Ford from parent',
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
