<template>
  <div class="container">
    <h1>Роутинг с vue-router</h1>
    <h1>Обозначение активной ссылки</h1>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'/cars'">Cars</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
// Задание
// Нужно сделать чтобы класс active применялся к активной ссылке
// Поменять ссылки и теги li
export default {
  data() {
    return {}
  }
}
</script>
