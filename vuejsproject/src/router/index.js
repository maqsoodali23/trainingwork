// import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/components/HomePage'
import RegisterUser from '@/components/RegisterUser'
import LoginUser from '@/components/LoginUser'

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/register',
            name: 'signup',
            component: RegisterUser
        },
        {
            path: '/login',
            name: 'login',
            component: LoginUser
        },
    ]
})
