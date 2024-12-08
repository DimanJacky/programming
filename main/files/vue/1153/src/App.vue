<template>
  <div>
    <h1>Фильтры и Миксины</h1>
    <h1>Фильтрация списков</h1>
    <h2>{{title}}</h2>

    <input type="text" v-model="searchName">

    <ul>
      <li v-for="name of names">{{ name }}</li>
    </ul>
  </div>
</template>

<script>
// Задание
// Есть массив имен и в searchName можно вводить имя
// Нужно создать фильтр, чтобы выводились в списке только те, которые соответствуют строке
export default {
  data() {
    return {
      title: 'Hello I am Vue!',
      searchName: '',
      names: ['Vlad', 'Max', 'Elena', 'Igor']
    }
  },
  filters: {
    lowercase(value) {
      return value.split('').join(' ')
    }
  }
}
</script>

<style scoped>

</style>
