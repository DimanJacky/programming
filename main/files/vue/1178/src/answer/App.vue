<template>
  <div class="container text-center pt-5">
    <h1>Vuex</h1>
    <h1>Использование state</h1>
    <app-counter></app-counter>
    <app-actions></app-actions>
  </div>
</template>

<script>
// Из App убираем counter, добавляем в стор state counter
// В Actions используем $store
// В Counter используем $store

  import Counter from './Counter'
  import Actions from './Actions'

  export default {
    components: {
      appCounter: Counter,
      appActions: Actions
    }
  }
</script>
