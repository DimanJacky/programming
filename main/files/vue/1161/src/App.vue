<template>
  <div>
    <h1>Работа с формами</h1>
    <h1>Создание своего контрола</h1>
    <h2>Form inputs</h2>

    <app-onoff></app-onoff>

    <div>
      <h3 v-if="switched">Component is enabled</h3>
      <h3 v-else>Component is disabled</h3>
    </div>
  </div>
</template>

<script>
// Задание
// в компоненте App связать переменную switched с app-onoff через v-model
// в компоненте Onoff кнопки on и off
// с классом active on становится зеленая, а off красная
// нужно добавить при клике на on или off изменение switched и добавление класса active
// использовать метод onChange который в главном компоненте меняет switched

import Onoff from "./Onoff.vue";

export default {
  data() {
    return {
      switched: false
    }
  },
  components: {
    appOnoff: Onoff
  }
}
</script>

<style scoped>
button {
  border: none;
  padding: 5px 15px;
  cursor: pointer;
  margin-right: 20px;
  outline: none;
}

button:active {
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, .5);
}

.on.active {
  background: green;
  color: #fff;
}

.off.active {
  background: red;
  color: #fff;
}
</style>
