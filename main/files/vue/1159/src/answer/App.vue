<template>
  <div>
    <h2>Form inputs</h2>

    <select v-model="social">
      <option
        v-for="s in socialList"
      >{{s}}</option>
    </select>

    <hr>

    <p>{{social}}</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      social: 'vk',
      socialList: ['instagram', 'vk', 'facebook']
    }
  }
}
</script>

<style scoped>

</style>
