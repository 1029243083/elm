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


export const classifyItem = craeteData()