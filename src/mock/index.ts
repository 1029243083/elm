// mockjs

import Mock from 'mockjs'
import { apis } from '../axios/api'

Mock.mock(apis.banner, () => {
    const data = Mock.mock({

        banner1: [
            {
                title: '湘川菜',
                src: 'src/assets/banner_png/chuanxiangcai.png',
                id: '@guid'
            },
            {
                title: '麻辣烫',
                src: 'src/assets/banner_png/icon-test.png',
                id: '@uid'
            },
            {
                title: '包子店',
                src: 'src/assets/banner_png/baozi.png',
                id: '@uid'
            },
            {
                title: '鲜花蛋糕',
                src: 'src/assets/banner_png/dangao.png',
                id: '@uid'
            },
            {
                title: '日韩料理',
                src: 'src/assets/banner_png/rihanliaoli.png',
                id: '@uid'
            },
            {
                title: '果蔬生鲜',
                src: 'src/assets/banner_png/yumi.png',
                id: '@uid'
            },
            {
                title: '汉堡薯条',
                src: 'src/assets/banner_png/hanbao.png',
                id: '@uid'
            },
            {
                title: '披萨意面',
                src: 'src/assets/banner_png/pisa.png',
                id: '@uid'
            }
        ],
        banner2: [
            {
                title: '甜品饮品',
                src: 'src/assets/banner_png/tianpin.png',
                id: '@uid'
            },
            {
                title: '商超便利',
                src: 'src/assets/banner_png/shangchao.png',
                id: '@uid'
            },
            {
                title: '美食',
                src: 'src/assets/banner_png/meishi.png',
                id: '@uid'
            },
            {
                title: '简餐',
                src: 'src/assets/banner_png/jiancancai.png',
                id: '@uid'
            },
            {
                title: '新店特惠',
                src: 'src/assets/banner_png/mianfeixindiantiyan.png',
                id: '@uid'
            },
            {
                title: '准时达',
                src: 'src/assets/banner_png/jiaofuzhunshi.png',
                id: '@uid'
            },
            {
                title: '预定早餐',
                src: 'src/assets/banner_png/zaocan.png',
                id: '@uid'
            },
            {
                title: '土豪推荐',
                src: 'src/assets/banner_png/tuhaonan.png',
                id: '@uid'
            }
        ]

    })
    return data
})