import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../Pages/HomePage/HomePage.vue";
import GamePage from "../Pages/GamePage/GamePage.vue";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/game',
    name: 'Game',
    component: GamePage
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router