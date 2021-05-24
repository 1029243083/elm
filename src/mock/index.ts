// mockjs

import Mock from 'mockjs'
import { apis } from '../axios/api'

Mock.mock(apis.banner, () => {
    const data = Mock.mock({

        banner1: [
            {
                title: '湘川菜',
                src: 'https://i.loli.net/2021/05/24/9nRzLFx2ZjyI7W5.png',
                id: '@guid'
            },
            {
                title: '麻辣烫',
                src: 'https://i.loli.net/2021/05/24/kaZAM5iWtHxuSsT.png',
                id: '@guid'
            },
            {
                title: '包子店',
                src: 'https://i.loli.net/2021/05/24/InBmdtWrl9sF86L.png',
                id: '@guid'
            },
            {
                title: '鲜花蛋糕',
                src: 'https://i.loli.net/2021/05/24/G4XIJOA5NQxmCRK.png',
                id: '@guid'
            },
            {
                title: '日韩料理',
                src: 'https://i.loli.net/2021/05/24/q2Un1Z6AfxvJ8jP.png',
                id: '@guid'
            },
            {
                title: '果蔬生鲜',
                src: 'https://i.loli.net/2021/05/24/2SdLm4iPjXHgAhf.png',
                id: '@guid'
            },
            {
                title: '汉堡薯条',
                src: 'https://i.loli.net/2021/05/24/yDYt7aHETkzKCgd.png',
                id: '@guid'
            },
            {
                title: '披萨意面',
                src: 'https://i.loli.net/2021/05/24/KyQYpa5FVo9Suje.png',
                id: '@guid'
            }
        ],
        banner2: [
            {
                title: '甜品饮品',
                src: 'https://i.loli.net/2021/05/24/NMPlJ8WsQc2IHdn.png',
                id: '@guid'
            },
            {
                title: '商超便利',
                src: 'https://i.loli.net/2021/05/24/1jo6WVFNCq5ugyc.png',
                id: '@guid'
            },
            {
                title: '美食',
                src: 'https://i.loli.net/2021/05/24/4JkljeCmKvBLczD.png',
                id: '@guid'
            },
            {
                title: '简餐',
                src: 'https://i.loli.net/2021/05/24/1EuIW637N8QJGZ4.png',
                id: '@guid'
            },
            {
                title: '新店特惠',
                src: 'https://i.loli.net/2021/05/24/PejU4MisDdhX6G8.png',
                id: '@guid'
            },
            {
                title: '准时达',
                src: 'https://i.loli.net/2021/05/24/ZscjqC9Kuvfw1PF.png',
                id: '@guid'
            },
            {
                title: '预定早餐',
                src: 'https://i.loli.net/2021/05/24/kjN4XHxJ65GiF3I.png',
                id: '@guid'
            },
            {
                title: '土豪推荐',
                src: 'https://i.loli.net/2021/05/24/UewnLyrCYjizEfW.png',
                id: '@guid'
            }
        ]

    })
    return data
})

Mock.mock(apis.shopList, () => {
    const data = Mock.mock({
        'shopList|5-10': [
            {
                title: '@ctitle(3, 5)',
                img: Mock.Random.image('200x100', '#50B347', '#FFF', '商家头像'),
                pinpai: '品牌',
                'star|1-10': 1,
                'salesVolume|100-1999': 100,
                'riseGiveMoney|10-15': 10,
                'DistributionFee|3-5': 3,
                'distance|20-100': 20,
                "time|1800000-3600000": 1800000,
                id: '@guid'
            }
        ]
    })
    return data
})

Mock.mock(apis.orderList, () => {
    const data = Mock.mock({
        'orderList|10': [
            {
                title: '@ctitle(3, 5)' + '店',
                img: Mock.Random.image('200x100', '#50B347', '#FFF', '商家头像'),
                service: '已送达',
                'itemImg|1-4': [
                    {
                        url: Mock.Random.image('200x100', '#50B347', '#FFF', '食品图片'),
                        id: '@guid'
                    }
                ],
                'price|10-30': 10,
                id: '@guid'
            }
        ]
    })
    return data
})

Mock.mock(apis.shopInfoLeft, () => {
    const data = Mock.mock({
        'shopInfoLeft|3-6': [
            {
                id: '@guid',
                title: '@ctitle(2, 3)'
            }
        ]
    })
    return data
})

Mock.mock(apis.shopInfoRight, () => {
    const data = Mock.mock({
        'shopInfoRight|5-10': [
            {
                id: '@guid',
                img: Mock.Random.image('200x100', '#50B347', '#FFF', '商家头像'),
                title: '@ctitle(2, 3)',
                desc: '@ctitle(5, 10)',
                'salesVolume|100-200': 100,
                'praise|0-100': 100,
                redText: '@ctitle(2, 3)',
                'price|10-100': 10,
                num: 0
            }
        ]
    })
    return data
})

Mock.mock(apis.shopInfoHeader, () => {
    const data = Mock.mock({
        shopInfoHeader: {
            img: Mock.Random.image('200x100', '#50B347', '#FFF', '商家头像'),
            desc: '商家配送/分钟送达/配送费￥5',
            notice: '@ctitle(8, 18)',
            title: '@ctitle(3, 6)'
        }
    })
    return data
})

Mock.mock(apis.shopInfoComment, () => {
    const data = Mock.mock({
        shopInfoComment: {
            header: {
                'score|1-5.1': 1,
                'time|20-40': 20,
                'num|1-100': 1
            },
            'center|1-8': [
                {
                    text: '@ctitle(2, 3)',
                    'num|100-200': 100
                }
            ],
            'bottomData|10-15': [
                {
                    av: Mock.Random.image('200x100', '#50B347', '#FFF', '商家头像'),
                    info: {
                        phone: Mock.mock('@integer(10000)'),
                        'score|1-5.1-9': 1,
                        'imgList|1-3': [
                            {
                                url: Mock.Random.image('200x100', '#50B347', '#FFF', '商家头像')
                            }
                        ],
                        'tag|1-4': [
                            {
                                text: '@ctitle(2, 3)'
                            }
                        ]
                    },
                    time: Mock.mock('@date')
                }
            ]
        }
    })
    return data
})