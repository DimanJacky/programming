<template>
  <div class="car">
    <h3>Name: {{carName}}</h3>
    <p>Year: {{carYear}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carName: 'Ford',
      carYear: 2015
    }
  }
}
</script>

<style scoped>
.car {
  border: 1px solid green;
}
</style>
