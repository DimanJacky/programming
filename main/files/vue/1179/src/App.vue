<template>
  <div class="container text-center pt-5">
    <h1>Vuex</h1>
    <h1>Использование getters</h1>
    <app-counter></app-counter>
    <app-actions></app-actions>
  </div>
</template>

<script>
// Задание
// Создать компонент SecondCounter
// Создать геттер computedCounter, который рассчитывается как counter * 10
// Вывести значение геттера вместо counter в Counter и SecondCounter

  import Counter from './Counter'
  import Actions from './Actions'

  export default {
    components: {
      appCounter: Counter,
      appActions: Actions
    }
  }
</script>
