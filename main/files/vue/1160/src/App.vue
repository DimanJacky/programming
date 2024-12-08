<template>
  <div>
    <h1>Работа с формами</h1>
    <h1>Числовой модификатор</h1>
    <h2>Form inputs</h2>

    <input type="text" v-model="age">

    <p>{{age}}</p>
  </div>
</template>

<script>
// Задание
// сделать чтобы при вводе данных в инпут в p отображалось только число
// а остальные символы игнорировались
export default {
  data() {
    return {
      age: 20
    }
  },
  watch: {
    age(value) {
      console.log(value)
      console.log(typeof value)
    }
  }
}
</script>

<style scoped>

</style>
