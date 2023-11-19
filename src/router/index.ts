import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/TheIndex.vue'
import Me from '../components/KnowMe.vue'
import Links from '../components/SeeLinks.vue'
import Thanks from '../components/ThankYou.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    },
    {
      path: '/links',
      name: 'links',
      component: Links
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: Thanks
    },
  ],
})

export default router