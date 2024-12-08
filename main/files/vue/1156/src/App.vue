<template>
  <div>
    <h1>Работа с формами</h1>
    <h1>Текстарея</h1>
    <h2>Form inputs</h2>
    <textarea></textarea>
  </div>
</template>

<script>
// Задание
// Создать двустороннее связывание с textarea и переменной textarea
// вывести ее в p
// добавить высоту 100 и ширину 400 и перенос строк, чтобы в p были переносы строк
export default {
  data() {
    return {
      textarea: 'I am initial text'
    }
  }
}
</script>

<style scoped>

</style>
