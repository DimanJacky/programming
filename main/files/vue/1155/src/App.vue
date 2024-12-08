<template>
  <div>
    <h1>Работа с формами</h1>
    <h1>Текстовый инпут</h1>
    <h2>Form inputs</h2>
    <input type="text">
  </div>
</template>

<script>
// Задание
// Сделать двустороннее связывание между input и name
// И задать дефолтное значение Initial state
// вывести в p значение name
// добавить модификатор, чтобы input менялся только если теряется фокус с input
export default {
  data() {
    return {
      name: ''
    }
  }
}
</script>

<style scoped>

</style>
