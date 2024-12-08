<template>
  <div class="container">
    <h1>Валидация форм с vuelidate</h1>
    <h1>Валидация пароля</h1>
    <form class="pt-3">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          class="form-control"
          :class="{'is-invalid': $v.email.$error}"
          @blur="$v.email.$touch()"
          v-model="email"
        >
        <div class="invalid-feedback" v-if="!$v.email.required">Email field is required</div>
        <div class="invalid-feedback" v-if="!$v.email.email">This field should be an email</div>
      </div>
    </form>
  </div>
</template>

<script>
// Задание
// Создать еще один form-group div для пароля password
// Создать валидатор, который валидирует пароль минимальная длина 6 символов
// Создать еще один form-group div для подтверждения пароля confirmPassword валидатор, который сравнивает пароли
import {required, email} from 'vuelidate/lib/validators'

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
