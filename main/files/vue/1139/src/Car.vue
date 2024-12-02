<template>
  <div class="car">
    <h3>Name: {{carName}} \ {{reverseName}}</h3>
    <p>Year: {{carYear}}</p>
    <button @click="changeName">Change name</button>
  </div>
</template>

<script>
export default {
  props: {
    carName: {
      type: String,
      required: true,
      default: 'Default name'
    },
    carYear: Number
  },
  methods: {
    changeName() {
      this.carName = 'Mazda';
    }
  },
  computed: {
    reverseName() {
      return this.carName.split('').reverse().join('');
    }
  }
}
</script>

<style>
.car {
  border: 1px solid black;
}
</style>
