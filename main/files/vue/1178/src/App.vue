<template>
  <div class="container text-center pt-5">
    <h1>Vuex</h1>
    <h1>Использование state</h1>
    <app-counter :counter="counter"></app-counter>
    <app-actions @counterUpdated="counter += $event"></app-actions>
  </div>
</template>

<script>
// Задание
// Сейчас counter в App идет к дочерним компонентам
// Сделать его через стор определить state.counter, убрать из App

  import Counter from './Counter.vue'
  import Actions from './Actions.vue'

  export default {
    data() {
      return {
        counter: 0
      }
    },
    components: {
      appCounter: Counter,
      appActions: Actions
    }
  }
</script>
