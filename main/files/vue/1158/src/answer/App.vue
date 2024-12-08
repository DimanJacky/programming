<template>
  <div>
    <h2>Form inputs</h2>

    <label>
      <input type="radio" value="instagram" v-model="social"> Instagram
    </label>

    <label>
      <input type="radio" value="vk" v-model="social"> Vk
    </label>

    <label>
      <input type="radio" value="facebook" v-model="social"> Facebook
    </label>

    <hr>

    <p>{{social}}</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      social: 'facebook'
    }
  }
}
</script>

<style scoped>

</style>
