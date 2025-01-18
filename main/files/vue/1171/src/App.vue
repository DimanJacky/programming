<template>
  <div class="container">
    <h1>Роутинг с vue-router</h1>
    <h1>Программная навигация</h1>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse">
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
// Нужно сделать в компоненте Car кнопку Back, которая будет переходить в список машин
// сделать не через роут, а программным путем через метод goBacToCars
export default {
  data() {
    return {

    }
  }
}
</script>
