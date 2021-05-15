import { RouteRecordRaw } from "vue-router";

import Home from '../view/home.vue'
import Index from '../view/index.vue'
import Test from '../view/test.vue'

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Home,
        children: [
            {
                path: '/index',
                component: Index
            }
        ]
    },
    {
        path: '/test',
        component: Test
    }
]