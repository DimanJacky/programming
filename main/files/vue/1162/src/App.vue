<template>
  <div class="container">
    <h1>Валидация форм с vuelidate</h1>
    <h1>Настройка валидаторов</h1>
    <form class="pt-3">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          class="form-control"
          v-model="email"
        >
      </div>
    </form>
  </div>
</template>

<script>
// Задание
// Подключить бутстрап <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
// Подключить библиотеку vuelidate
// Добавить валидаторы на поле email, сделать его обязательным, и валидацию email
// Сделать, чтобы валидация срабатывала при переходе фокуса
export default {
  data() {
    return {
      email: ''
    }
  }
}
</script>
