<template>
  <div class="container">
    <h1>Роутинг с vue-router</h1>
    <h1>Динамические роуты</h1>
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
// В компоненте Cars отобразить список всех машин выводить Car id машины
// Создать роут car для отображения одной машины по id
// В компоненте Car вывести car id и получать id из роута
// и чтобы если кликать по ссылкам не получать постоянно закешированный роут
// если есть ссылки car/3 и car/4
// через watch слушать роут и менять id
export default {
  data() {
    return {

    }
  }
}
</script>
