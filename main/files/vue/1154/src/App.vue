<template>
  <div>
    <h1>Фильтры и Миксины</h1>
    <h1>Использование миксинов</h1>
    <h2>{{title}}</h2>

    <input type="text" v-model="searchName">

    <ul>
      <li v-for="name of filteredNames">{{name}}</li>
    </ul>

    <hr>

    <app-list></app-list>
  </div>
</template>

<script>
// Задание
// Есть 2 списка, которые выводятся в App и List
// Нужно создать миксин ListMixin в файле listMixin и перенести в него names и searchName и функцию filteredNames чтобы не дублировать код
// Нужно применить миксин в этих компонентах
// Также создать глобальный миксин, который будет применяться во всех компонентах с функцией beforeCreate, которая выводит название

export default {
  data() {
    return {
      title: 'Hello I am Vue!',
      searchName: '',
      names: ['Vlad', 'Max', 'Elena', 'Igor']
    }
  },
  computed: {
    filteredNames() {
      return this.names.filter(name => {
        return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
      })
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
