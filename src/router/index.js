import Vue from 'vue'
import VueRouter from 'vue-router'
import { route } from '../scripts/Creators'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  route('/', 'Home', Home),
];

const router = new VueRouter({
  routes
})

export default router
