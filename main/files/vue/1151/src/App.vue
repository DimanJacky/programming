<template>
  <div>
    <h1>Директивы</h1>
    <h1>Локальная регистрация</h1>
    <h2 v-colored:background.font="'red'">{{title}}</h2>
    <h2 v-colored:color.delay.font="'blue'">{{title}}</h2>

    <h2>Local font directive</h2>
  </div>
</template>

<script>
// Задание
// директивы v-colored были созданы глобально в файле main
// Создать директивy v-font локально, чтобы она была доступна только для этого компонента
// которая делает шрифт 40px и применить к третьему заголовку
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
