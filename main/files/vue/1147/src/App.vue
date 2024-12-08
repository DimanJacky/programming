<template>
  <div>
    <h1>Директивы</h1>
    <h1>Жизненный цикл директивы</h1>
    <h2 v-colored>{{title}}</h2>
  </div>
</template>

<script>
// Задание
// Написать методы жизненного цикла и вывести в console.log названия
// Добавить 2 кнопки, одна для изменения title, другая для видимости h2 и переменную visible

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
