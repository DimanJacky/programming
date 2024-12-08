<template>
  <div class="container">
    <h1>Валидация форм с vuelidate</h1>
    <h1>Визуальное отображение ошибок</h1>
    <form class="pt-3">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          class="form-control"
          @blur="$v.email.$touch()"
          v-model="email"
        >
      </div>

      <pre>
        {{$v.email}}
      </pre>
    </form>
  </div>
</template>

<script>
// Задание
// Сдеать чтобы отображались ошибки
// Добавить ниже input два div, в котором красным будет отображаться ошибка required и email
// Отображение в зависимости от условия
// Добавлять классы в зависимости, если есть ошибка
import { required, email } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      email: ''
    }
  },
  validations: {
    email: {
      required,
      email
    }
  }
}
</script>
