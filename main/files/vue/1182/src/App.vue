<template>
  <div class="container text-center pt-5">
    <h1>Vuex</h1>
    <h1>Оптимизация с помощью модулей</h1>
    <app-counter></app-counter>
    <app-second-counter></app-second-counter>
    <hr>
    <app-actions></app-actions>
  </div>
</template>

<script>
// Задание
// Для counter сделать модуль в сторе и все state, getters, mutations, actions переделать на модуль
// В index оставить state title 'Hello from store' и getter title, который прибавляет к title !!!
// Вывести в App getter в h1 через computed

import Counter from './Counter'
import Actions from './Actions.vue'
import SecondCounter from './SecondCounter'

export default {
  components: {
    appCounter: Counter,
    appActions: Actions,
    appSecondCounter: SecondCounter
  }
}
</script>
