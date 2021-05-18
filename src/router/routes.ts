import { RouteRecordRaw } from "vue-router";

import Index from '../view/index/index.vue'
import Home from '../view/home/home.vue'
import Search from '../view/search/search.vue'
import Order from '../view/order/order.vue'
import My from '../view/My/my.vue'
export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Index,
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: Home
            },
            {
                path: '/search',
                component: Search
            },
            {
                path: '/order',
                component: Order
            },
            {
                path: '/my',
                component: My
            }
        ]
    }
]
