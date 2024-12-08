<template>
  <div>
    <h1>List</h1>
    <input type="text" v-model="searchName">

    <ul>
      <li v-for="name of filteredNames">{{name}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
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
  }
}
</script>

<style scoped>

</style>
