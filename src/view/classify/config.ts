import Mock from 'mockjs'
const classifyItems = [
    {
        text: '快餐便当'
    },
    {
        text: '小吃宵夜'
    },
    {
        text: '果蔬生鲜'
    },
    {
        text: '特色菜系'
    },
    {
        text: '商店超市'
    },
    {
        text: '鲜花蛋糕'
    },
    {
        text: '全部商家'
    },
    {
        text: '甜品饮品'
    }
]

interface itemType {
    text: string,
    children: childrenType[]
}

export interface childrenType {
    text: string,
    id: string
}

export interface shuxingItemType {
    text: string,
    isSelect: boolean,
    id: number
}


function craeteData() {
    const arr: itemType[] = []
    for (let i = 0; i < classifyItems.length; i++) {
        const childrens: childrenType[] = []
        for (let j = 0; j < getRamdom(1, 10); j++) {
            const data = Mock.mock({
                text: 'mock测试数据' + getRamdom(0, 99),
                'id': '@guid'
            })
            childrens.push(data)
        }
        arr.push({
            text: classifyItems[i].text,
            children: childrens
        })
    }
    return arr
}

function getRamdom(max: number, min: number) {
    return Math.floor(Math.random() * (max - min) + min)
}

export const sortArr = [
    {
        text: '智能排序',
        type: 0
    }, {
        text: '距离最近',
        type: 1
    }, {
        text: '销量最高',
        type: 2
    }, {
        text: '起送价最低',
        type: 3
    }, {
        text: '配送速度最快',
        type: 4
    }, {
        text: '评分最高',
        type: 5
    },
]

export const screenArr: shuxingItemType[] = [
    {
        text: '品牌商家',
        isSelect: false,
        id: 100
    }, {
        text: '外卖保',
        isSelect: false,
        id: 101
    }, {
        text: '准时达',
        isSelect: false,
        id: 102
    }, {
        text: '新店',
        isSelect: false,
        id: 103
    }, {
        text: '在线支付',
        isSelect: false,
        id: 104
    }, {
        text: '开发票',
        isSelect: false,
        id: 105
    },
]

export const classifyItem = craeteData()