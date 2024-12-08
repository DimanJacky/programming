<template>
  <div>
    <h1>Директивы</h1>
    <h1>Взаимодействие с элементом</h1>
    <h2>{{title}}</h2>
  </div>
</template>

<script>
// Задание
// есть директива colored
// Нужно добавить метод bind, где описать, что текст становится синим
// Применить директиву к h2
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
