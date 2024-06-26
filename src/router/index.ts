import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Home from '../components/WhatHomw.vue'
import Me from '../components/KnowMe.vue'
import Links from '../components/SeeLinks.vue'
import Thanks from '../components/ThankYou.vue'
import FourOhFour from '../components/FourOhFour.vue'
import Setting from '../components/SettingTheSite.vue'
import Picture from '../components/ShowPicture.vue'
import Card from '../components/ReadTheCard.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'app',
            component: Home
        },
        {
            path: '/pictures',
            name: 'picture',
            component: Picture
        },
        {
            path: '/c',
            name: 'card',
            component: Card
        },
        {
            path: '/:pathMatch(.*)*',
            name: '404',
            component: FourOhFour
        }
    ]
})

export default router
