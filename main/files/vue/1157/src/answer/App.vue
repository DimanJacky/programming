<template>
  <div>
    <h2>Form inputs</h2>

    <label>
      <input type="checkbox" value="instagram" v-model="social"> Instagram
    </label>

    <label>
      <input type="checkbox" value="vk" v-model="social"> Vk
    </label>

    <label>
      <input type="checkbox" value="facebook" v-model="social"> Facebook
    </label>

    <hr>

    <ul>
      <li v-for="s in social">{{s}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      social: []
    }
  }
}
</script>

<style scoped>

</style>
