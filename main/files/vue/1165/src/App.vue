<template>
  <div class="container">
    <h1>Валидация форм с vuelidate</h1>
    <h1>Создание своего валидатора</h1>
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
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          class="form-control"
          :class="{'is-invalid': $v.password.$error}"
          @blur="$v.password.$touch()"
          v-model="password"
        >
        <div class="invalid-feedback" v-if="!$v.password.minLength">
          Min length of password is {{ $v.password.$params.minLength.min }}. Now it is {{ password.length }}.
        </div>
      </div>
      <div class="form-group">
        <label for="password">Confirm password</label>
        <input
          type="password"
          id="confirm"
          class="form-control"
          :class="{'is-invalid': $v.confirmPassword.$error}"
          @blur="$v.confirmPassword.$touch()"
          v-model="confirmPassword"
        >
        <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">
          Passwords should match
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// Задание
// Создать свой валидатор, который проверяет email на уникальность
// Проверять на значение mail@mail.ru, чтобы не было этим значением
// Отобразить ошибку
// Создать функцию, которая через промис валидирует значение через 3 секунды
import {required, email, minLength, sameAs} from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      minLength: minLength(6)
    },
    confirmPassword: {
      sameAs: sameAs('password')
    }
  }
}
</script>
