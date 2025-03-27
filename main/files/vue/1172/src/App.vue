<template>
  <div class="container">
    <h1>Роутинг с vue-router</h1>
    <h1>Вложенные роуты</h1>
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
// Нужно сделать в компоненте Car ссылку, похожую на кнопку full info, которая будет переходить на полную информацию о машине в компонент CarFull
// Сделать вложенный роут компонента Car, роут должен быть вида car/id автомобиля/full
// Сделать еще вложенный роут через свойство name, передавая параметры

export default {
  data() {
    return {

    }
  }
}
</script>
