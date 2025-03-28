import Vue from 'vue'
import App from './App.vue'
import List from './List.vue';

Vue.filter('uppercase', value => value.toUpperCase())

Vue.component('app-list', List)

new Vue({
  el: '#app',
  render: h => h(App)
})


