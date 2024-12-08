<template>
  <div>
    <h1>Директивы</h1>
    <h1>Модификаторы</h1>
    <h2 v-colored:background="'red'">{{title}}</h2>
    <h2 v-colored:color="'blue'">{{title}}</h2>
  </div>
</template>

<script>
// Задание
// Создать модификаторы font и delay для директивы v-colored
// Если применить font, то шрифт текста 30px
// Если применить delay, то через 2 секунды применяется директива
// Первому заголовку задать font
// Второму заголовку задать оба модификатора
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
