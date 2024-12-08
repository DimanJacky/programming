<template>
  <div>
    <app-car>
      <h2 slot="title">{{ carName }}</h2>
      <p slot="text">Lorem ipsum dolor.</p>
    </app-car>
  </div>

</template>

<script>
import Car from "./Car.vue";

export default {
  data() {
    return {
      carName: 'Ford'
    }
  },
  components: {
    appCar: Car,
  }
}
</script>

<style scoped>

</style>
