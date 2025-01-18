<template>
  <div class="container">
    <h1>Роутинг с vue-router</h1>
    <h1>Редирект</h1>
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
// Есть компонент Error, нужно если страница не существует, редиректить на него
// Сделать именованный роут cars, и если в адресной строке none, то редиректить на страницу cars

export default {
  data() {
    return {

    }
  }
}
</script>
