<template>
  <div>
    <h1>Car id {{id}}</h1>
  </div>

</template>

<script>
export default {
  data() {
    return {
      // id: this.$router.currentRoute.params['id']
      id: this.$route.params['id']
    }
  },
  watch: {
    $route(toR, formR) {
      this.id = toR.params['id']
    }
  }
}
</script>

<style scoped>

</style>
