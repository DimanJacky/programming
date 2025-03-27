<template>
  <div class="container">
    <h1>Роутинг с vue-router</h1>
    <h1>Передача параметров</h1>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="navbar-collapse">
        <ul class="navbar-nav">
          <router-link tag="li" class="nav-item" exact to="/" active-class="active">
            <a class="nav-link">Home</a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/cars" active-class="active">
            <a class="nav-link">Cars</a>
          </router-link>
        </ul>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
// Задание
// Нужно передать из компонента Car в компонент CarFull параметры как в get запросе
// Передать name Mazda, year 2000
// в компоненте CarFull вывести эти параметры

export default {
  data() {
    return {

    }
  }
}
</script>
