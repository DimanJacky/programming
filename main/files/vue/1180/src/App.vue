<template>
  <div class="container text-center pt-5">
    <h1>Vuex</h1>
    <h1>Использование mutations</h1>
    <app-counter></app-counter>
    <app-second-counter></app-second-counter>
    <hr>
    <app-actions></app-actions>
  </div>
</template>

<script>
// Задание
// Заменить изменение стора в Actions на mutations

import Counter from './Counter'
import Actions from './Actions'
import SecondCounter from './SecondCounter'

export default {
  components: {
    appCounter: Counter,
    appActions: Actions,
    appSecondCounter: SecondCounter
  }
}
</script>
