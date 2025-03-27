<template>
  <div class="container text-center pt-5">
    <h1>Vuex</h1>
    <h1>Установка vuex</h1>
    <app-counter :counter="counter"></app-counter>
    <app-actions @counterUpdated="counter += $event"></app-actions>
  </div>
</template>

<script>
// Задание
// Есть главный компонент, компонент с каунтером и компонент с кнопками
// установить и подключить vuex

  import Counter from './Counter'
  import Actions from './Actions'

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
