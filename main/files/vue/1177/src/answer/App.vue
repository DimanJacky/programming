<template>
  <div class="container text-center pt-5">
    <h1>Vuex</h1>
    <h1>Установка vuex</h1>
    <app-counter :counter="counter"></app-counter>
    <app-actions @counterUpdated="counter += $event"></app-actions>
  </div>
</template>

<script>
// Создаем папку store, в ней файл index для стора приложения
// в main нужно подключить стор


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
