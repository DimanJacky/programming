import Home from "./pages/Home.vue";
import Cars from "./pages/Cars.vue";
import VueRouter from "vue-router";
import Car from "./pages/Car.vue";
import CarFull from "./pages/CarFull.vue";
import ErrorCmp from "./pages/Error.vue";

export default new VueRouter({
  routes: [
    {
      path: '',
      component: Home
    },
    {
      path: '/cars',
      component: Cars,
      name: 'cars'
    },
    {
      path: '/car/:id',
      component: Car,
      children: [
        {
          path: 'full',
          component: CarFull,
          name: 'carFull'
        }
      ]
    },
    {
      path: '/none',
      redirect: {
        name: 'cars'
      }
    },
    {
      path: '*',
      component: ErrorCmp
    }
  ],
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {

    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {selector: to.hash}
    }

    return {
      x: 0,
      y: 0
    }
  }
})
