import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/WhatHomw.vue'
import FourOhFour from '../components/FourOhFour.vue'
import Flu from '../components/Fluffyluo.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'app',
            component: Home
        },
        {
            path: "/fluffyluo",
            name: 'f',
            component: Flu
        },
        {
            path: '/:pathMatch(.*)*',
            name: '404',
            component: FourOhFour
        }
    ]
})

export default router
