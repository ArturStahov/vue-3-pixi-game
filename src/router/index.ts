import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../Pages/HomePage/HomePage.vue";
import GamePage from "../Pages/GamePage/GamePage.vue";
import { Pages } from '../constants/pages';


const routes = [
  {
    path: '/',
    name: Pages.HOME,
    component: HomePage
  },
  {
    path: '/game',
    name: Pages.GAME,
    component: GamePage
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router