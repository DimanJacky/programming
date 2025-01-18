<template>
  <div class="container">
    <h1>Роутинг с vue-router</h1>
    <h1>Создание навигации</h1>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">Cars</a>
          </li>
        </ul>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
// Задание
// Нужно сделать, чтобы ссылки переходили по компонентам без перезагрузки страницы
export default {
}
</script>
