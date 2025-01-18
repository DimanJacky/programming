import Home from "./pages/Home.vue";
import Cars from "./pages/Cars.vue";
import VueRouter from "vue-router";
import Car from "./pages/Car.vue";

export default new VueRouter({
  routes: [
    {
      path: '',
      component: Home
    },
    {
      path: '/cars',
      component: Cars
    },
    {
      path: '/car/:id',
      component: Car
    }
  ],
  mode: 'history'
})
