<template>
  <div>
    <h1>Директивы</h1>
    <h1>Параметры в директивах</h1>
    <h2 v-colored>{{title}}</h2>
  </div>
</template>

<script>
// Задание
// Сейчас директива добавляет голубой цвет тексту
// Нужно сделать чтобы в директиву можно было передавать параметр цвета например red

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
