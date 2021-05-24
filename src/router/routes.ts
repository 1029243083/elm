import { RouteRecordRaw } from "vue-router";

import Index from '../view/index/index.vue'
import Home from '../view/home/home.vue'
import Search from '../view/search/search.vue'
import Order from '../view/order/order.vue'
import My from '../view/My/my.vue'
import ShopInfo from '../view/shopInfo/shopInfo.vue'
import Classify from '../view/classify/classify.vue'
import OrderInfo from '../view/orderInfo/orderInfo.vue'
import Address from '../view/address/address.vue'

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
    },
    {
        path: '/shopinfo',
        name: 'shopInfo',
        component: ShopInfo
    },
    {
        path: '/classify',
        name: 'classify',
        component: Classify
    },
    {
        path: '/orderinfo',
        name: 'orderinfo',
        component: OrderInfo
    },
    {
        path: '/address',
        name: 'address',
        component: Address
    }
]
