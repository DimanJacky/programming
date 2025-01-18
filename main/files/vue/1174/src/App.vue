<template>
  <div class="container">
    <h1>Роутинг с vue-router</h1>
    <h1>Хэш и скролл</h1>
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
// В компоненте CarFull есть скролл
// Нужно передать в него помимо параметров хэш, чтобы проскроллить до этого хэша
// в компоненте CarFull вывести эти параметры

export default {
  data() {
    return {

    }
  }
}
</script>
