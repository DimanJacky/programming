<template>
  <div>
    <h2 v-colored:background.font="'red'">{{title}}</h2>
    <h2 v-colored:color.delay.font="'blue'">{{title}}</h2>

    <h2 v-font>Local font directive</h2>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Hello I am Vue!'
    }
  },
  directives: {
    font: {
      bind(el, bindings, vnods) {
        el.style.fontSize = '40px';
      }
    }
  }
}
</script>

<style scoped>

</style>
