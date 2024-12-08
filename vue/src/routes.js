import Home from "./pages/Home.vue";
import Cars from "./pages/Cars.vue";
import VueRouter from "vue-router";

export default new VueRouter({
  routes: [
    {
      path: '',
      component: Home
    },
    {
      path: '/cars',
      component: Cars
    }
  ],
  mode: 'history'
})
