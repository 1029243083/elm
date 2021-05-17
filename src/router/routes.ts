import { RouteRecordRaw } from "vue-router";

import Index from '../view/index/index.vue'
import Home from '../view/home/home.vue'
export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Index,
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: Home
            }
        ]
    }
]
