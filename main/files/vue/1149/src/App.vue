<template>
  <div>
    <h1>Директивы</h1>
    <h1>Аргументы в директивах</h1>
    <h2 v-colored="'red'">{{title}}</h2>
  </div>
</template>

<script>
// Задание
// Создать второй заголовок с такой же директивой v-colored
// Передать в директивы v-colored аргументы чтобы фон первого заголовка был красный
// цвет второго заголовка был синий
export default {
  data() {
    return {
      title: 'Hello I am Vue!'
    }
  }
}
</script>

<style scoped>

</style>
